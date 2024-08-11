const PrecentacionInput=document.querySelector(".PresentacionEncriptarTexto");
const MensajeEncriptado=document.querySelector(".MensajeDesencriptado");
const ImagenMuneco = document.querySelector(".PresentacionMunecoLogo"); 
const parrafos = document.querySelector(".PresentacionMunecoMensaje")
const btnCopiar = document.querySelector(".BtnCopiar");
const mensaje = document.getElementById("mensaje");
const mensaje2 = document.getElementById("mensaje2");



btnCopiar.addEventListener('click', function() {
    MensajeEncriptado.select();
    document.execCommand('copy');
    mensaje.style.display = "none";
    mensaje2.style.display = "none";
    if (parrafos) {
        parrafos.style.display = "block"; // O el valor original del display (block, inline, etc.)
    }

});


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(PrecentacionInput.value)
    MensajeEncriptado.value = textoEncriptado
    PrecentacionInput.value ="";
    parrafos.style.display = "none";
    mensaje2.style.display = "none"

    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.style.display = "block"; // Muestra el mensaje
    }
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(PrecentacionInput.value)
    MensajeEncriptado.value = textoEncriptado
    PrecentacionInput.value ="";
    parrafos.style.display = "none";
    mensaje.style.display = "none"
    const mensaje2 = document.getElementById("mensaje2");
    if (mensaje2) {
        mensaje2.style.display = "block"; // Muestra el mensaje
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
