import { remedial } from "../models/remedial.models.js";
const test = () => {
    console.log(' llamando la funcion desde el contralor')
}

remedial.create({
    alumno:"Miguelon",
    estado:"Pagado"
})
export default test