const textFrase = document.querySelector('#frase');
const textFraseEncriptada = document.querySelector('#frase-encriptada');
const sugerencia = document.querySelector('.form__sugerencia');
const desencriptarMsg = document.querySelector('.desencriptar__mensaje');
const desencriptarResultado = document.querySelector('.desencriptar__resultado');
const btnEncriptar = document.querySelector('#btn-encriptar');
const btnDesencriptar = document.querySelector('#btn-desencriptar');
const btnCopy = document.querySelector('#btn-copiar');
const btnPaste = document.querySelector('#btn-pegar');
const regexInput = /^[a-z0-9 ]*$/;

let mensaje = true;
let resultado = false;

// Evalúa la frase usando una expresión regular
function encriptarFrase() {
    if (!regexInput.test(textFrase.value) || textFrase.value.length === 0) {
        sugerencia.style.display = "flex";
        mensaje = true;
        mostrarMensaje()
        resultado = false;
        mostrarResultado();
    } else {
        sugerencia.style.display = "none";

        let fraseEncriptada = textFrase.value.
                                            replaceAll("e", "enter").
                                            replaceAll("i", "imes").
                                            replaceAll("a", "ai").
                                            replaceAll("o", "ober").
                                            replaceAll("u", "ufat");

        textFraseEncriptada.value = fraseEncriptada

        mensaje = false;
        mostrarMensaje()
        resultado = true;
        mostrarResultado();
        textFrase.value = '';
    }
}

// Función que copia la frase encriptada en el textarea para desencriptar
function copy() {
    textFraseEncriptada.select();
    document.execCommand("copy");
    textFraseEncriptada.setAttribute('disabled', true);
    alert("El texto ha sido copiado")
}

// Función que pega la frase desencriptada en el textarea para encriptar
function paste() {
    textFrase.value = textFraseEncriptada.value;
    alert("El texto ha sido pegado")
    textFraseEncriptada.value = '';
}

// Función inversa, para desencriptar
function desencriptarFrase() {
    let fraseDesencriptada = textFrase.value.
                                            replaceAll("ufat", "u").
                                            replaceAll("ober", "o").
                                            replaceAll("ai", "a").
                                            replaceAll("imes", "i").
                                            replaceAll("enter", "e");
    textFraseEncriptada.value = fraseDesencriptada;

    mensaje = false;
    mostrarMensaje()
    resultado = true;
    mostrarResultado();
    textFrase.value = '';
}

// Función que muestra el mensaje de error si no se ingresa un texto
function mostrarMensaje() {
    if(mensaje) {
        desencriptarMsg.style.display = "flex";
    } else {
        desencriptarMsg.style.display = "none";
    }
}

// Función que muestra el resultado
function mostrarResultado() {
    if(resultado) {
        desencriptarResultado.style.display = "flex";
    } else {
        desencriptarResultado.style.display = "none";
    }
}

btnEncriptar.addEventListener('click', encriptarFrase);
btnCopy.addEventListener('click', copy);
btnPaste.addEventListener('click', paste);
btnDesencriptar.addEventListener('click', desencriptarFrase);