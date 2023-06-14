import fs from "fs";


export const get = (file) =>{
    return new Promise((resolve, reject)=> {
        fs.readFile(file, "utf-8", (error, contenido) =>{
            if(error){
                reject(error)
            } else{
                resolve(JSON.parse(contenido))
            }
        })
    })
}



export const save = (file, newData) =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(file, JSON.stringify(newData), (error)=>{
            if(error){
                reject(error)
            }else{
                resolve("se escribió el archivo correctamente")
            }
        })
    })
}

export const obtenerGastoDelArchivo = async (nombre)=>{
    const gastos = await get("./gastos.json")
    const payToReturn = gastos.filter(pay => pay.first_input === nombre.search_name)
    return payToReturn[0]
}