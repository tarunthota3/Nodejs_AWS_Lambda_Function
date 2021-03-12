const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/say', (req, res) => {
    let keyword = req.query.keyword;
    axios.get(`https://5lqu0fcfob.execute-api.us-east-1.amazonaws.com/prod/getNameFunction?keyword=${keyword}`)
    .then(function (response) {
        console.log(response.data);
        if(response.data.statusCode === 200){
            res.send(response.data.body);
        }
    })
    .catch(function (error) {
        res.send('error occured: ', error)
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});