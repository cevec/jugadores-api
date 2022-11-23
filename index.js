const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/jugadores', (req, res) => {
    const keys = Object.keys(posts);

    const values = keys.map(key => {
        return posts[key];
    });

    res.send({data: values});
});

app.get('/jugadores/:id', (req, res) => {
    const id = req.params.id

    res.send(posts[id]);
});

app.post('/jugadores', async (req, res) => {
    const { id, nombre, edad } = req.body;

    posts[id] = {
        id, nombre, edad
    };

    res.status(201).send(posts[id]);
});

app.put('/jugadores/:id', async (req, res) => {
    const { id, nombre, edad } = req.body;

    posts[id] = {
        id, nombre, edad
    };

    res.send(posts[id]);
});

app.delete('/jugadores/:id', async (req, res) => {
    const id = req.params.id

    delete posts[id];

    res.send();
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});
