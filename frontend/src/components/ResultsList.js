import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import TaskInfo from './Info';


export default function ResultList() {
    const BoxCss = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: '150px',
        width: '100vw',
    }
    return (
        <Box sx={BoxCss}>
            <TaskInfo />
            <TaskInfo />
            <TaskInfo />
            <TaskInfo />
            <TaskInfo />
            <TaskInfo />
        </Box>
    )
}