const { createServer } = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const { error } = require('console');

dotenv.config();

let app = express();

app.use(bodyParser.json()); 

const http = createServer(app)

process.on('SIGINT', ()=> http.close((error) => {
    if(error)
    {
        console.error(`${error.name}: ${error.message}`);
    }

    process.exit(error ? 1 : 0);
}));

app.post("/", function (req, res){ 
    const nome = req.body.nome;
    res.send(`Olá, ${nome}!`)
});

app.get('/', (_, res) => res.send('<h1>testetetete</h1>'))

http.listen(8989, () => console.log('Listening on *:8989'));