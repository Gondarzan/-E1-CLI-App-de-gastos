import inquirer from 'inquirer';
import { save, get, obtenerGastoDelArchivo } from './readWritePromises.js';
import { promtUser, promtObtenerNombre } from "./promtUser.js"


const main = async () => {

    let promptCorriendo = true

    while (promptCorriendo) {

        const opciones = await inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: "Selecciona una opcion",
                choices: [
                    { value: 1, name: "Agregar nuevo gasto" },
                    { value: 2, name: "Obtener gastos" },
                    { value: 3, name: "Buscar gasto por nombre" },
                    { value: 99, name: "Exit" }
                ]
            },
        ])
        console.log(opciones)
        switch (opciones.choices) {
            case 1:
                await createNewPay();
                break
            case 2:
                await getAllPays()
                break
            case 3: 
                await obtenerGastoPorNombre()
            case 99:
                promptCorriendo = false
                break
            default:
                promptCorriendo = false
                break
        }
    }

}


main()

const createNewPay = async () => {
    const pay = await promtUser()

    const gastojson = await get("./gastos.json")

    const newPayData = [...gastojson, pay]

    save("./gastos.json", newPayData)
}

const getAllPays = async () => {
    const gastos = await get("./gastos.json")
    console.log(gastos)

}

const obtenerGastoPorNombre = async() =>{
    const nombre = await promtObtenerNombre()
    const gasto = await obtenerGastoDelArchivo(nombre)
    console.log(gasto)
}