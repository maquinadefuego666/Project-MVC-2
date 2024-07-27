import { reprobados } from "../models/reprobados.models.js";

const test = () => {
    console.log(' llamando la funcion desde el contralor')
}

reprobados.create({
    name:"Gustabo",
    apep:"Gomez",
    apem:"Gonsalez"
})
export default test