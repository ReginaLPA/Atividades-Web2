const express = require('express');
const joi = require('joi')
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

let filmes =[
    {
    id:1,
    nome:'12 anos de escreavidão',
    diretor:'Steve McQueen',
    link:'https://www.youtube.com/watch?v=_xcJyqwZrwer',
},
{
    id:2,
    nome:'Skyscraper',
    diretor:'Dany Garcia',
    link:'https://www.youtube.com/watch?v=_xcJyqwZxyQ',

}
];


app.listen(port,()=> console.log(`servidor rodando na porta ${port}`));

app.get('/api/filmes', (req, res) =>{
    res.status(200).send(filmes);
});

app.get('/api/filmes/:id', (req, res) =>{
    const filme = filmes.find(filme => filme.id === parseInt(req.params.id))
    if(!filme)return res.status(404).send('O filme com o Id especificado não foi encontrado');
    res.status(200).send(filme)
});



app.post('/api/filmes', (req, res) =>{
    const schema = joi.object({
        nome: joi.string().min(3).max(50).required(),
        diretor: joi.string().min(3).max(50).required(),
        link: joi.string().min(3).max(150).required()

    });

    const result = schema.validate(req.body);
   le.log(result.error.details[0].message);

    if(result.error) return res.status(400).send(result.error.details[0].message)


    const filme ={
        id:filmes.length + 1,
        nome:req.body.nome,
        diretor:req.body.diretor,
        link:req.body.link
    }
    filmes.push(filme);
    res.send(filme);
    return;
});