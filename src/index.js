import cipher from './cipher.js';

document.getElementById("buttonCifrar").addEventListener("click",cifrar)//Aquí estoy llamando la función cifrar al dar click en el botón

function cifrar() {//Aquí estoy llamando la función de cifrado que se resuelve en el cipher
    let texto = document.getElementById("password").value;//Aquí estoy guardando lo que ingresa en mi caja de texto de contraseña
    let offset = parseInt(document.getElementById("clave").value);//Aquí estoy guardando el desplazamiento para que todo lo que entre lo guarde como un número
    let result = cipher.encode(offset,texto);//Aquí estoy mandando a llamar al modulo cipher con el objeto encode con sus respectivos parámetros  y lo guardo en la variable
    document.getElementById("newPassword").value = result;//Aquí estoy devolviendo el resultado de la función en el modulo cipher para que se muestre en mi caja de nueva contraseña
}
document.getElementById("buttonDescifrar").addEventListener("click",descifrar)//Aquí estoy llamando la función descifrar

function descifrar(){//Esta función es para descifrar lo que se va a resolver en el cipher
    let texto = document.getElementById("password").value;//Aquí estoy guardando lo que ingresa en mi caja de texto de contraseña
    let offset = parseInt(document.getElementById("clave").value);//Aquí estoy guardando el desplazamiento para que todo lo que entre lo guarde como un número
    let result = cipher.decode(offset,texto);//Aquí estoy mandando a llamar al modulo cipher con el objeto encode con sus respectivos parámetros  y lo guardo en la variable
    document.getElementById("newPassword").value = result;//Aquí estoy devolviendo el resultado de la función en el modulo cipher para que se muestre en mi caja de nueva contraseña
}