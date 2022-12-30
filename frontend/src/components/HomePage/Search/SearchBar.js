import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
// import MultipleSelect from "./MultiSelect";
import { useFilter } from "../../../containers/hooks/useFilter";
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from '../../../containers/api';
import { useNavigate, useLocation } from 'react-router-dom'

const SearchInput = styled(TextField)`
  margin: 10px 10px 10px 10px;
`;

const RangeLabel = styled('span')({
    marginBottom: '16.4px'
})

const searchBoxCss = {
    mx: 'auto',
    pb: '12px',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    position: 'sticky',
    top: '68px',
    backgroundColor: '#FFFFFF',
    zIndex: 3,
    width: '69.5%',
    minWidth: '600px',
}

const SearchBar = ({ expList, setExpList }) => {
    const { setSearchName, setTimeRange, searchName, timeRange, locationTagsSelected, rewardTagsSelected, typeTagsSelected, } = useFilter()
    const [loading, setLoading] = useState(false)

    const searchNameHandler = (e) => {
        setSearchName(e.target.value)
    }

    const { state } = useLocation();

    useEffect(() => {
        sendSearch()
    }, [state])

    const sendSearch = async () => {
        console.log({
            searchName,
            locationTagsSelected,
            timeRange,
            rewardTagsSelected,
            typeTagsSelected,
        })
        setLoading(true)
        const { data: { message, contents } } =
            await axios.get('/getExpList', {
                params: {
                    searchName,
                    locationTagsSelected,
                    timeRange,
                    rewardTagsSelected,
                    typeTagsSelected,
                },
            })
        if (message === 'success') {
            console.log('success')
            setExpList([...contents])
        }
    }


    useEffect(() => {
        if (expList) {
            setLoading(false)
        }
    }, [expList])

    const DatePickerRange = () => {
        const DatePick = ({ date, from, to }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={date ? '' : '期間'}
                    value={date}
                    onChange={(newDate) => {
                        const newTimeRange = timeRange.slice()
                        const YDMList = [newDate.$y, newDate.$M, newDate.$D]
                        if (from) newTimeRange[0] = YDMList.join('/')
                        else if (to) newTimeRange[1] = YDMList.join('/')
                        console.log(newTimeRange)
                        setTimeRange(newTimeRange);
                    }}
                    views={["year", "month", "day"]}
                    inputFormat="YYYY/MM/DD"
                    disableHighlightToday
                    // InputProps={{ startAdornment: <InputAdornment position="start">自</InputAdornment> }}
                    renderInput={(InputProps) => {
                        let newParams = { ...InputProps, error: false }
                        return <TextField
                            size="small"
                            sx={{ width: '160px', margin: '10px' }}
                            variant="outlined"
                            InputProps={{ shrink: false }
                            }
                            {...newParams} />
                    }}
                />
            </LocalizationProvider>
        )

        return (
            <>
                <RangeLabel>自</RangeLabel>
                <DatePick date={timeRange[0]} from={true} />
                <RangeLabel>至</RangeLabel>
                <DatePick date={timeRange[1]} to={true} />
            </>
        )
    }

    return (
        <Box
            component="form"
            sx={searchBoxCss}
            noValidate
            autoComplete="on"
        >
            <SearchInput placeholder="搜尋" variant="outlined" sx={{ width: '300px' }} onChange={searchNameHandler} value={searchName} size='small' />
            <DatePickerRange />
            <LoadingButton
                onClick={sendSearch}
                endIcon={<SearchIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                sx={{ height: '43px', width: "90px", margin: '10px' }}
            >
                搜尋
            </LoadingButton>
        </Box >
    );
}

export default SearchBar