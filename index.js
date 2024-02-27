const express = require('express');

port = 5000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => console.log(`Server listening on Port: ${port}`))