let buttonComeçar = document.querySelector('#efeitosonoro');
let buttonComoJogar = document.querySelector('#efeitosonoro2');
let buttonCreditos = document.querySelector('#efeitosonoro3');
let audioArray = document.getElementsByTagName('audio');

// Esse audio vão tocar quando o usuario passar o mause nos buttons
buttonComeçar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonComoJogar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonCreditos.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

function clicouEmComecar() {
    audioArray[2].play(); // Quando o usuario clicar em comecar tocara esse audio
}

