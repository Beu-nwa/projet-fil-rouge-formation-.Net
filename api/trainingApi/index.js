const express = require('express');
const { readFileSync, writeFileSync } = require('fs');
const app = express();
const port = 1998;
const morgan = require('morgan')
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const ip = require('ip');
const { startConfirmation } = require('./helper.js');
const { json } = require('body-parser');

let trainingList = JSON.parse(readFileSync('./data/trainingDatas.json', 'utf-8'))
console.table(trainingList);

app
    .use(cors())
    .use(favicon(__dirname + "/favicon.ico"))
    .use(morgan('dev'))
    .use(bodyParser.json());
    // .use(express.static(path.join(__dirName, 'public')))
    // .use('/static', express.static(path.join(__dirName, 'public')));

function saveList() {
    const objectToJson = JSON.stringify(trainingList);
    writeFileSync('./data/trainingDatas.json', objectToJson);
    console.log('Données sauvegardées...');
}

app.get('/', (req, res) => res.send('Hello from my node JS'));

app.get('/api/training/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

app.get('/api/training', (req, res) => {
});

app.post('/api/user', (req, res) => {
    console.log(req.body);
});

app.put('/api/training/:id', (req, res) => {
    const Id = parseInt(req.params.id);
});

app.delete('/api/training/:id', (req, res) => {
    const Id = parseInt(req.params.id);
});

app.listen(port, () => console.log(startConfirmation(port, ip.address())));
