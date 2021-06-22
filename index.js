const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

// middleware afin de récupérer les données du body lors d'une requête PUT / POST
app.use(express.json());
app.use(cors());

// Appel de notre route global
const globalRouting = require('./src/routes');
globalRouting(app);

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})