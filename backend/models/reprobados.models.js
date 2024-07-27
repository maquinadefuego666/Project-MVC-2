import { Schema, model } from "mongoose";

export const reprobado = new Schema({
    name:{
        type:String
    },
    apep:{
        type:String
    },
    apem:{
        type:String
    },
    prom:{
        type:Number
    }
})

export const reprobados = new model('reprobados', reprobado)