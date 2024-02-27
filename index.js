const express = require('express');

port = 5000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/hello', (req, res) => {
    res.json("Hello everyone!!!")
})

app.listen(port, () => console.log(`Server listening on Port: ${port}`))