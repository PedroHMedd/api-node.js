import express from 'express'
const app = express()

app.use(express.json())

const usuarios = []

// ROTAS
app.get('/cadastro', (req, res) => {
    //res.send('DEU BOM COM O GET')
    res.status(200).json(usuarios)
})

app.post('/cadastro', (req, res) => {
    //console.log(req.body)
    usuarios.push(req.body)
    //res.status(201).send('DEU BOM COM O POST')
    res.status(201).json(req.body)
})


//PORTA LOCAL DO SERVIDOR
app.listen(3000, () => {
    console.log('SERVIDOR RODANDO!')
})