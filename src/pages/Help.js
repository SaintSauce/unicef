import React from 'react'
import { Box, Paper, Button, Link } from '@mui/material'
import kid_support from '../assets/kid_support.png'

const Help = () => {
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
                        You can help provide clean water, food, clothes and shelter for the many children 
                        that don’t have by donating through the link down below. Unicef and its many collaborators 
                        thank you for your generosity and compassion.
                        `}
                    </p>
                    <Button variant="contained" style={{ marginTop: "-2%", zIndex: 999 }}
                        onClick={() => window.open("https://www.unicef.org/take-action")}
                    >Get more information</Button>
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

                    <img src={kid_support} 
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
                    position: 'absolute',
                    top: '3%',
                    color: "black",
                }}
            >Be part of the initiative today!</h1>
        </Box>

        </div>
    )
}

export default Help;