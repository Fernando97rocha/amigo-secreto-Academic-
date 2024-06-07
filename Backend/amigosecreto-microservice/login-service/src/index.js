const express = require('express');
require('dotenv-safe');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const username = encodeURIComponent("fernando97");
const password = encodeURIComponent("crossgnt123")

mongoose.connect(
    `mongodb+srv://${username}:${password}@amigosecretodb.cusquzn.mongodb.net/?retryWrites=true&w=majority&appName=AmigoSecretoDB`
);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoBD connected..............")
})

app.listen(3333, () => {
    console.log("server is running")
});


app.listen(3338, () => console.log(`API online na porta ${3338}!`));
