import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

export default function (props) {

    const [name, setName] = useState("")
    const [review, setReview] = useState("")

    const upload = () => {
        props.onUpload(name, review);
    }

    return <div>
        <Typography variant="h3">Share</Typography>
        <Typography variant="h5">your thoughts and leave us some reviews</Typography>
        <TextField style={{ marginTop: 15, }} label="Name" onChange={(e) => setName(e.target.value)} fullWidth></TextField >
        <TextField style={{ marginTop: 15, }} label="Review" multiline onChange={(e) => setReview(e.target.value)} fullWidth></TextField >
        <Button style={{ marginTop: 10, width: "100%", }} onClick={upload} variant="outlined">Submit</Button>
    </div>
}