const PrecentacionInput=document.querySelector(".PresentacionEncriptarTexto");
const MensajeEncriptado=document.querySelector(".MensajeDesencriptado");
const ImagenMuneco = document.querySelector(".PresentacionMunecoLogo"); 
const parrafos = document.querySelector(".PresentacionMunecoMensaje")
const btnCopiar = document.querySelector(".BtnCopiar");
const mensaje = document.getElementById("mensaje");
const mensaje2 = document.getElementById("mensaje2");
const textarea = document.querySelector(".PresentacionEncriptarTexto");
const textoEncriptado = desencriptar(PrecentacionInput.value);


btnCopiar.addEventListener('click', function() {
    MensajeEncriptado.select();
    document.execCommand('copy');
    mensaje.style.display = "none";
    mensaje2.style.display = "none";
    if (parrafos) {
        parrafos.style.display = "block"; 
    }

});


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {

    if (textarea.value.trim() !== "") {
        const textoEncriptado = encriptar(textarea.value);
        MensajeEncriptado.value = textoEncriptado;
        textarea.value = "";

        parrafos.style.display = "none";
        mensaje2.style.display = "none";

        const mensaje = document.getElementById("mensaje");
        if (mensaje) {
            mensaje.style.display = "block"; 
        }
    } else {
        
        alert("Por favor, escribe algo en el campo de texto antes de encriptar.");
    }
}


function btnDesencriptar() {
    if (textarea.value.trim() !== "") {
        const textoDesencriptado = desencriptar(textarea.value); 
        MensajeEncriptado.value = textoDesencriptado;
        textarea.value = "";

        parrafos.style.display = "none";
        mensaje.style.display = "none";

        const mensaje2 = document.getElementById("mensaje2");
        if (mensaje2) {
            mensaje2.style.display = "block"; 
        }
    } else {
        alert("Por favor, escribe algo en el campo de texto antes de desencriptar.");
    }
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }

    return stringEncriptada
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}
