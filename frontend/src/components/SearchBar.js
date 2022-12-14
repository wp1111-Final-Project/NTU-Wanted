import { useState } from "react"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import MultipleSelect from "./MultiSelect";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchInput = styled(TextField)`
  margin: 10px;
`;

const locations = ['校總區', '城中校區', '家裡'];

const SearchBar = () => {
    const [value, setValue] = useState([null, null])
    return (
        <Box
            component="form"
            sx={{ mx: 'auto', my: '20px', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: '68px', left: 0 }}
            noValidate
            autoComplete="on"
        >
            <SearchInput label="名稱" variant="standard" sx={{ width: 300 }} />
            <MultipleSelect tasks={locations} label={"實驗地點"} />
            {/* <TextField id="date"
                type="date"
                variant="standard"
                label="實驗時間"
                sx={{ width: 250 }}
                InputLabelProps={{
                    shrink: true,
                }}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="實驗時間"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    views={["year", "month", "day"]}
                    renderInput={(params) => {
                        const newParams = { ...params, error: false }
                        return <TextField variant="standard" {...newParams} />
                    }}
                    inputFormat="YYYY/MM/DD"
                />
            </LocalizationProvider>
            <Button sx={{ margin: "8px" }} variant="contained" size="large">搜尋</Button>
        </Box >
    );
}

export default SearchBar