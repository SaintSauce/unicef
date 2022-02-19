import React from 'react';
import logo from '../assets/unikids_logo.png';
import { Stack, Button, Link } from '@mui/material';

const NavBar = () => {

    return (
        <div>

            <Stack direction="row" spacing={2} 
                style={{
                    position: 'absolute', left: '50%', top: '25%',
                    transform: 'translate(-50%, 5%)'
                }}
            >

                <Link href="/" underline='none'>
                    <Button variant="outlined">Home</Button>
                </Link>
            
                <Link href="/share" underline='none'>
                    <Button variant="outlined">Share your thoughts</Button>
                </Link>
                
                <Link href="/help" underline='none'>
                    <Button variant="outlined">Be a part of the mission </Button>
                </Link>
                
                <Link href="/about" underline='none'>
                    <Button variant="outlined">About</Button>
                </Link>
            </Stack>

            <img src={logo} alt="Logo" 
                    style = {{
                        marginTop : "2%",
                        height : "10%",
                        width : "20%"
                    }}
            />
        </div>
    )
}

export default NavBar;