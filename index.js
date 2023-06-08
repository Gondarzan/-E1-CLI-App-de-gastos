import inquirer from "inquirer";
import { save, get } from './readWritePromises.js';
import { promtUser } from "./promtUser.js";

const run = async () => {
    const opciones = await inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: "Selecciona una opcion",
            choices:[
                {calue: 1, name: "Gasto uno"},
                {value: 2, name: "Gasto dos"},
                {value: 99, name: "Exit"}
            ]
        },
    ])
    console.log(opciones)

}

run()