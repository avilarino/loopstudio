function sumar (){
  const numero1 = parseInt(document.getElementById("dato1").value);
  const numero2 = parseInt(document.getElementById("dato2").value);
  const suma = (numero1 + numero2)
  console.log (suma)
}

function restar (){
  const numero1 = parseInt(document.getElementById("dato1").value)
  const numero2 = parseInt (document.getElementById("dato2").value)
  const resta = (numero1 - numero2)
  console.log(resta)
}

function multiplicar (){
  const numero1 = parseInt(document.getElementById("dato1").value)
  const numero2 = parseInt(document.getElementById("dato2").value)
  const multipli = (numero1 * numero2);
  console.log (multipli)

  if (multipli > 500){
    console.log("tienes un beneficio")
  }
  else {
    console.log("esta muy bien el ejercicio")
  }
}
/* trabajo de clase de hoy */

const socios = ["agustin", "mariano", "joaquin", "jonathan"]

for(let i = 0; i < socios.length; i++){
  console.log(socios[i]);}
console.log (socios)



function code () {
  const password = parseInt(document.getElementById("nombre1").value)
  if (password === socios){
    console.log("puede entrar")
  }
  else {
    console.log("no puede entrar")
  }
}

