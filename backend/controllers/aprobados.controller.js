import { aprobados } from "../models/aprobados.models.js";
const test = () => {
    console.log(' llamando la funcion desde el contralor')
}
aprobados.create({
    name:"Alvaro",
    apep:"Esparza",
    apem:"Lopez"
})
export default test