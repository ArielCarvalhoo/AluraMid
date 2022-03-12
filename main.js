//Pom -----------------------------------------------------
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
   
    if (elemento && elemento.localName === 'audio' ) {
        
        elemento.play();
    }
    else {
        alert('Elemento não encontrado')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


//para
for (let contador  = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

//template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        console.log(event.code === 'Space');
        if (event.code === 'Space' || event.code ==='Enter') {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

