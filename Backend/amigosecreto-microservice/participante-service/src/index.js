const express = require("express");

const app = express();

app.use(express.json());

app.get("/:name", (request, response) => {
    return response.send("Hello World " + `${request.params.name}`);
});

app.post("/participante", (req, res) => {
    console.log(req.body);
    const { nome } = req.body;
    return res.json({"mensagem":`Olá ${nome}`});
});

app.listen(3333);

