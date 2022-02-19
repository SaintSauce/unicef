import React from 'react'
import { Container, Paper, Box } from '@mui/material'
import Blog from './Blog'

const Share = () => {
    return (
        <div>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 800,
                height: 328,
                },
            }}

            style = {{
                position: 'absolute', left: '50%', top: '35%',
                transform: 'translate(-50%, 0%)',
            }}
            >
                <Container style={{ position: "absolute", marginTop : "5%" }}>
                    <Blog/>
                </Container>
                <Paper elevation={3}/>
            </Box>
        </div>
    )
}

export default Share;