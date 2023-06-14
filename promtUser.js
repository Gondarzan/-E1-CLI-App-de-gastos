import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'first_input',
    message: "Cual es el gasto",
  },
  {
    type: 'input',
    name: 'last_input',
    message: "Cuanto gastaste",
  }
];

const nombre = [
  {
    type: 'input',
    name: 'search_name',
    message: "Ingrese el nombre que desea buscar",
  },
];

export const promtUser = ()=>{
    return new Promise((resolve, reject)=>{
      try{
        inquirer.prompt(questions)
        .then(res=>{
          resolve(res)
        })
      }catch(error){
        reject(error)
      }
    }) 
}

export const promtObtenerNombre= ()=>{
  return new Promise((resolve, reject)=>{
    try{
      inquirer.prompt(nombre)
      .then(res=>{
        resolve(res)
      })
    }catch(error){
      reject(error)
    }
  }) 
}