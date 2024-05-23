const express = require("express");

const app = express();

app.use(express.json());

app.get("/:name", (request, response) => {
    return response.send("Hello World " + `${request.params.name}`);
});

app.listen(3333);

