require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRouter.js')
const table = require('./routes/table/table.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8001;

/*Conection DB*/
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@tempfreelas.q2wtn.mongodb.net/?retryWrites=true&w=majority&appName=tempfreelas`);

const db = mongoose.connection;

db.on("error", (err) => { console.log(`Houve um erro ao conectar com DB: ${err}`) }); /*Caso ocorra um erro ele avisa*/
db.once("open", () => { console.log(`Banco de dados carregado`) });

/*Express JS*/

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.status(200).send("...")
})

app.use('/user', userRouter)
app.use('/table', table)

app.listen(PORT, (err) => {
    if (err) {
        return console.log(`Ocorreu um erro ao iniciar o servidor:${err}`)
    }
    console.log(`Servidor rodando na porta: ${PORT}`)
})