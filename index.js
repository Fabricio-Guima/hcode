const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Alou mundo pqp quero avançar em node gente!');
});


app.listen(8080, ()=> {
    console.log('Servidor rodando na porta 8080');
});

