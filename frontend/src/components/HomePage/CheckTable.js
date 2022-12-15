import { useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { useInfo } from "../../containers/hooks/useInfo";



const BoxCss = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20px',
    width: '100vw',
    zIndex: 1
}

const HeaderTableCell = styled(TableCell)({
    borderRight: '1px solid rgb(224,224,224)'
})

export default function BasicTable() {
    const [dateFrom, setDateFrom] = useState([null, null])
    const [dateTo, setDateTo] = useState([null, null])
    const { tagSelected, setTagSelected, typeSelected, setTypeSelected, setTimeRange, } = useInfo()

    const typeRows = ['實驗', '問卷', '訪談'];
    const tagRows = ['普心加分', '現金', '食物']

    const checkBoxList = [
        { header: '報酬形式', checkBoxes: tagRows, boxState: tagSelected, setBoxState: setTagSelected },
        { header: '實驗類型', checkBoxes: typeRows, boxState: typeSelected, setBoxState: setTypeSelected },
    ]

    const handleCheck = (e, boxState, setBoxState) => {
        const newBoxSelected = boxState.slice()
        if (e.target.checked) newBoxSelected.push(e.target.name)
        else {
            const boxToRemoveIdx = newBoxSelected.indexOf(e.target.name);
            if (boxToRemoveIdx > -1) { // only splice array when item is found
                newBoxSelected.splice(boxToRemoveIdx, 1); // 2nd parameter means remove one item only
            }
        }
        setBoxState(newBoxSelected)
        console.log(newBoxSelected)
    }

    const CheckButtonRow = ({ header, checkBoxes, boxState, setBoxState }) => {
        return <TableRow>
            <HeaderTableCell component="th" scope="row">
                {header}：
            </HeaderTableCell>
            <TableCell align='left'>
                {checkBoxes.map((box) => (
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={box}
                                onChange={(e) => handleCheck(e, boxState, setBoxState)}
                                checked={boxState.includes(box)}
                            />
                        }
                        label={box}
                        key={box}
                    />
                ))}
            </TableCell>
        </TableRow>
    }

    const DatePickerRange = () => {
        const DatePick = ({ date, setDate }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={date ? '' : '期間'}
                    value={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                    views={["year", "month", "day"]}
                    inputFormat="YYYY/MM/DD"
                    disableHighlightToday
                    // InputProps={{ startAdornment: <InputAdornment position="start">自</InputAdornment> }}
                    renderInput={(InputProps) => {
                        let newParams = { ...InputProps, error: false }
                        return <TextField
                            size="small"
                            sx={{ width: '180px', mr: '30px', ml: '10px' }}
                            variant="outlined"
                            InputProps={{ shrink: false }
                            }
                            {...newParams} />
                    }}
                />
            </LocalizationProvider>
        )

        return (
            <TableRow>
                <HeaderTableCell component="th" scope="row">
                    期間：
                </HeaderTableCell>
                <TableCell align='left' sx={{ display: 'flex', alignItems: 'center', fontSize: '1em' }}>
                    自
                    <DatePick date={dateFrom} setDate={setDateFrom} />
                    至
                    <DatePick date={dateTo} setDate={setDateTo} />
                </TableCell>
            </TableRow >
        )
    }

    return (
        <Box sx={BoxCss}>
            <TableContainer sx={{ maxWidth: '800px' }} component={Paper} variant={'outlined'} square>
                <Table sx={{ maxWidth: '100%' }} size="small" aria-label="simple table">
                    <TableBody>
                        <DatePickerRange />
                        {checkBoxList.map(({ header, checkBoxes, boxState, setBoxState }) => (
                            <CheckButtonRow key={header} header={header} checkBoxes={checkBoxes} boxState={boxState} setBoxState={setBoxState} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}