import React, { useEffect, useState } from 'react'
import Form from "./Form"
import Gun from "gun"
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const gun = Gun(['https://gun-manhattan.herokuapp.com/gun']);

let ip = ""

fetch("https://httpbin.org/ip").then(res => res.json()).then(({ origin }) => {
    ip = origin
})


const gunBlogs = gun.get('ftyffuyfug')

function submit(name, review) {
    gunBlogs.put({ [name || ip]: review })
    setTimeout(() => {
       window.location.reload()
    }, 1000)
}

const arrBlogs = []
gunBlogs.map().once((review, name) => {
    console.log(name, review)
    arrBlogs.push({ name, review })
})

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setBlogs(arrBlogs)
        }, 1000)
    }, [])

    return <>
        <Form onUpload={submit}></Form>
        {blogs.map(({ name, review }) => {
            console.log({ name, review })
            return <Card key={name} style={{ marginTop: "5%" }}>
                <CardActionArea>
                    <CardContent>
                        <h1>{name}</h1>
                        <Typography 
                            style={{ 
                                wordWrap: "break-word", 
                            }} sx={{ maxWidth: 800 }} variant="body2">
                            {review}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        })}
    </>

}

export default Blog;