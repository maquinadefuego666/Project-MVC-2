import { model } from "mongoose";
import { reprobado } from "./reprobados.models.js";
export const aprobados = new model('aprobados', reprobado)