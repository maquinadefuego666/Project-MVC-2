//importe de librerias
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import test_reprobados from "./backend/controllers/reprobado.controller.js"
import  test_remedial from "./backend/controllers/remedial.controller.js"
import test_aprobados from "./backend/controllers/aprobados.controller.js"

//para funcionalidad de libreria dotenv
dotenv.config()

//conectamos base de datos haciendo uso de la url en el .env
mongoose.connect(process.env.url_bd)

//promesa de funcionalidad del servidor
.then(() => {
    console.log('la promesa funciona')
})
.catch((err) =>{
    console.log('no funciona la proomesa')
})

//
const App=express()
App.use(cors())

App.listen(4001, () => { 
    console.log('esta funcionando correctamente tu servidor')
})
test_aprobados()
test_remedial()
test_reprobados()