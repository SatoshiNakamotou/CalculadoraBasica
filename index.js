console.log('Saludos desde JS')
console.log('Saludos desde JS2')

const botones_numeros = ['1','2','3','4','5','6','7','8','9']

const boton9 = document.getElementById(botones_numeros[8])
const boton8 = document.getElementById(botones_numeros[7])
const input_texto = document.getElementById('input');

console.log(boton9)
console.log(boton8)

boton9.addEventListener('click',()=>{
    console.log('hicisteclick')
})

boton8.addEventListener('click',()=>{
    console.log('hicisteclick')
})

botones_numeros.forEach(function(id_boton) {
    console.log('saludos desde JavaScript')
    console.log(id_boton)
    const variable_const = document.getElementById(id_boton)
    variable_const.addEventListener('click',()=>{
        console.log('hicisteclick')
        input_texto.textContent = id_boton
    })
});

