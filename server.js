import express from 'express'
const app = express()

app.use(express.json())

const usuarios = []

// ROTAS
app.get('/cadastro', (req,res) => {
//res.send('o get ta rodando')
res.status(200).json(usuarios)
}
)

app.post('/cadastro', (req,res) => {
    console.log(req.body)
    usuarios.push(req.body)
    //res.status(201).send('POST feito')
    
    }
    )



// PORTA LOCAL DO SERVIDOR
app.listen(3000, () => {
    console.log('RODANDO')
})