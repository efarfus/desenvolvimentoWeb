const { createServer } = require('http');

const dotenv = require('dotenv');

dotenv.config();

let app = require('./config/router-factory.js');

const http = createServer(app)

process.on('SIGINT', ()=> http.close((error) => {
    if(error)
    {
        console.error(`${error.name}: ${error.message}`);
    }

    process.exit(error ? 1 : 0);
}));

/*app.post("/", function (req, res){ 
    const nome = req.body.nome;
    res.send(`Olá, ${nome}!`)
});

app.get('/', (_, res) => res.send('<h1>oiii</h1>'))*/

http.listen(8080, () => console.log('Listening on *:8089'));