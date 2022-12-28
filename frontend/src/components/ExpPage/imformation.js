import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Stack, Chip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';

const BoxCss = {
    px: '25px',
    py: '10px',
    width: "100%",
    border: "1px solid lightgrey",
}

const bigBoxCss = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'sticky',
    top: '150px',
    width: '69.5%',
    minWidth: '450px',
    '&, .ExpInfo:first-of-type': { marginTop: "10px" },
}

const List = styled('ul')({
    listStyleType: 'none',
    padding: 0,
})

const Information = ({ info }) => {

    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <Box sx={bigBoxCss}>
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <Typography variant="h6" sx={{ mt: "25px" }}>
                        研究名稱：{info.title}
                    </Typography>
                    <br />
                    <Stack direction="row" spacing={1} sx={{ mb: "5px" }}>
                        {info.tags.map((tag) => (<Chip key={tag} sx={{ padding: '0', fontSize: '0.5em' }} label={tag} color="primary" variant="outlined" />))}
                    </Stack>
                </Box>
                <Box sx={{ float: 'right', mx: "10px", mt: "10px", zIndex: 2 }}>
                    {liked ? <Favorite onClick={handleLike} sx={{ color: 'red', "&:hover": { cursor: 'pointer' } }} />
                        : <FavoriteBorder onClick={handleLike} sx={{ "&:hover": { cursor: 'pointer' } }} />}
                </Box>

            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>時長：{info.length}</li>
                        <li>時間：{info.time}</li>
                        <li>地點：{info.location}</li>
                    </List>
                </Box>

            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>實驗內容：<br />{info.introduction}</li>
                    </List>
                </Box>
            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>實驗報酬：<br />{info.reward}</li>
                    </List>
                </Box>
            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>其他資訊：<br />{info.memo}</li>
                    </List>
                </Box>
            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>實驗報名連結：</li>
                        <Button variant="outlined" href={info.link} target='_blank'>{info.link}</Button>
                    </List>
                </Box>
            </Box >
            <Box sx={BoxCss} className='ExpInfo'>
                <Box sx={{ float: 'left' }}>
                    <List>
                        <li>實驗主試人員：{info.experimenter}</li>
                        <li>聯絡電話：{info.phone}</li>
                        <li>電子郵件：{info.email}</li>
                    </List>
                </Box>
            </Box >
        </Box>
    )
}
export default Information