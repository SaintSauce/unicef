import React from 'react'
import { Button, Box, Modal, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import game_picture from '../assets/game_screenshot.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(

        <div>

            <img src={game_picture}
                style={{
                    position: 'absolute', left: '50%', top: '35%',
                    transform: 'translate(-50%, 5%)',
                    height: "35%",
                    width: "30%",
                }}
            />

            <Button variant="contained"
                style={{
                    marginTop: "25%",
                    height: "20%",
                    width: "20%",
                }}
                onClick={handleOpen}
            >Play</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <iframe src="https://weisrc.github.io/unicef" width="100%" height="100%"/>
                    </Box>
                </Modal>
        </div>
    )
}

export default Home;