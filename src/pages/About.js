import React from 'react'
import { Box, Paper, Button } from '@mui/material'
import kid_picture from '../assets/kid_picture.jpg'

const About = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 800,
                    height: 700,
                    },
                }}

                style = {{
                    position: 'absolute', left: '50%', top: '30%',
                    transform: 'translate(-50%, 5%)',
                }}
                >
                <Paper elevation={3} />
                    <div
                        style={{
                            position: "absolute",
                            top: "35%",
                            left: "0%"
                        }}
                    >
                        <p style={{margin: "5%"}}>
                            {` 
                            Unicef has been providing help to children across the world for over 75 years.
                            Click the link below in order to learn more about the organization and its involvement
                            with the protection of children all around the world!
                            `}
                        </p>

                        <Button variant="contained" style={{ marginTop: "-2%", zIndex: 999 }}
                            onClick={
                                () => {
                                    window.open("https://www.unicef.org/what-we-do")
                                }
                            }
                        >Learn more</Button>
                    </div>

                <div>
                        <p
                            style = {{
                                position: 'absolute', left: '50%', top: '33%',
                                transform: 'translate(-50%, 5%)',
                                height : "20%",
                                width : "40%",
                                fontSize : 10
                            }}
                    
                        >From : https://images.app.goo.gl/FdmRpfSBGoRwviFG6</p>

                        <img src={kid_picture} 
                                    style = {{
                                        position: 'absolute', left: '50%', top: '8%',
                                        transform: 'translate(-50%, 5%)',
                                        height : "25%",
                                        width : "60%"
                                    }}
                        />
                </div>
                
                <h1
                    style={{
                        position: 'absolute', left: '50%', top: '0%',
                        transform: 'translate(-50%, 5%)',
                        position: "absolute",
                        color: "black",
                    }}
                >Learn more about Unicef!</h1>
            </Box>
        </div>
    )
}

export default About;