import express from 'express';

const app = express();

/* Primeiro parametro => Rota
   Segundo parametro => par request/response */

app.get("/", (request, response) => {
    return response.json({msg: "Hello World"})
})

app.post("/", (request, response) => {
    return response.json({msg: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running!"));


