//variaveis (botão de ligar, desligar e imagem)
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lampada');
//detecta se a lampada esta quebrada 
function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}
//se a lampada não estiver quebrada, muda a imagem para ligada
function lampOn () {
    if ( !isLampBroken ()) {
    lamp.src = "./img/ligada.jpg";
    }
}
//se a lampada não estiver quebrada, muda a imagem para desligada
function lampOff () {
    if ( !isLampBroken ()) {
    lamp.src = "./img/desligada.jpg";
    }
}
//muda a imagem para quebrada
function lampBroken () {
    lamp.src = "./img/quebrada.jpg";
}

//interações com os botões e com a imagem
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('dblclick', lampBroken)
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseout', lampOff);