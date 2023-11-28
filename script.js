const form = document.getElementById('form');

form.addEventListener('submit' , function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';


    value.classList.add('bad');

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        description = "Cuidado! Você está abaixo do peso!"
    } else if (imc >= 18.5 && imc <= 25 ){
        description = "Você está no peso saudável!"
        value.classList.remove('bad');
        value.classList.add('good');
    } else if (imc > 25 && imc <= 30 ){
        description = "Cuidado! Você está com sobrepeso!"
    } else if (imc > 30 && imc <= 35){
        description = "Cuidado! Você está com obesidade moderada!"
    } else if (imc > 35 && imc <= 40){
        description = "Cuidado! Você está com obesidade severa!"
    } else {
        description = "Cuidado! Você está com obesidade mórbida!"
    }


    value.textContent = imc.replace('.' , ',');
    document.getElementById('description').textContent = description;
});

const reset = document.getElementById('reset');

reset.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('infos').classList.add('hidden');
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
});




const mode = document.getElementById('icon-modes');

mode.addEventListener('click', function(event) {
    event.preventDefault();
    const conteudo = document.getElementById('container');

    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');

    if(moon.classList.contains('icon-selected')){
        moon.classList.remove('icon-selected');
        sun.classList.add('icon-selected');

        conteudo.classList.add('light');

    } else if (sun.classList.contains('icon-selected')){
        sun.classList.remove('icon-selected');
        moon.classList.add('icon-selected');

        conteudo.classList.remove('light');
    }

});  
