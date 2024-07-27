import { Schema, model } from "mongoose";

export const remediales = new Schema({
    alumno:{
        type:String
    },
    estado:{
        type:String
    }
})

export const remedial = new model('remediales', remediales)