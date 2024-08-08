const PrecentacionInput=document.querySelector(".PresentacionEncriptarTexto");
const MensajeEncriptado=document.querySelector(".MensajeDesencriptado");
const ImagenMuneco = document.querySelector(".PresentacionMunecoLogo"); 
const parrafos = document.querySelector(".PresentacionMunecoMensaje")
const btnCopiar = document.querySelector(".BtnCopiar");

btnCopiar.addEventListener('click', function() {
    MensajeEncriptado.select();
    document.execCommand('copy');
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
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(PrecentacionInput.value)
    MensajeEncriptado.value = textoEncriptado
    PrecentacionInput.value ="";

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
