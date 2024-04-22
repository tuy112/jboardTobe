const express = require('express');
const app = express();
const port = 5000;

const front = require('./App');
const cors = require('cors');

// const path = require('path');
// const server = require('http').createServer(app);

app.use('/', front);
app.use(cors());
        
app.get('/', (req,res) => {
    res.send({message: "hello"});
});
        
server.listen(8080, () => {
    console.log(port, '포트가 열렸습니다~^^');
});