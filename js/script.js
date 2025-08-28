/* Primero tengo que crear una fecha de referencia */
/* let fecha = new Date(2025, 7, 28, 20, 11) */
let fecha = new Date("2025, 11, 26")

/* Luego obtener los milisegundos */
let msFecha = fecha.getTime()

/* Obtengo todos los grupos */
let parrafoDias = document.querySelector("#dias")
let parrafoHoras = document.querySelector("#horas")
let parrafoMinutos = document.querySelector("#minutos")
let parrafoSegundos = document.querySelector("#segundos")
let spanFecha = document.querySelector("#fecha")
let cuentaAtras = document.querySelector("#cuentaAtras")

/* Al span le paso la fecha a la que quiero llegar */
spanFecha.innerText = fecha.toLocaleDateString()

/* Ahora actualizo horas, minutos y segundos cada 1 segundo */
/* Nombro con una variable el setInterval para poder cortarlo cuando llegue al final */
let intervalo = setInterval(() => {
    /* Primero consigo la fecha de hoy */
    let hoy = new Date().getTime()

    /* Segundo calculo la distancia en milisegundos de hoy hasta la fecha querida */
    let distancia = msFecha - hoy

    /* Calculo cuantos días faltan. Como la distancia está en milisegundos, tengo que dividirlo por la cantidad de milisegundos que hay en un día. 1000 milisegundos x segundo x 60 segundos x minuto x x 60 minutos por hora x 24 horas por día*/
    let msPorDia = 1000 * 60 * 60 *24
    /* Calculo cuantos milisegundos por hora */
    let msPorHora = 1000 * 60 * 60
    /* Calculo cuantos milisegundos por minuto */
    let msPorMinuto = 1000 * 60
    /* Declaro los milisegundos por segundo */
    let msPorSegundo = 1000

    /* Cuando calcule la cantidad de días que falta, el resultado va a ser con cero coma algo. Por lo que necesito un numero redondo */
    let dias = Math.floor(distancia / msPorDia)
    
    /* Calculo de horas */
    let horas = Math.floor((distancia % msPorDia) / msPorHora)

    /* Calculo minutos. Calculo el resto de la división entre la distancia y milisegundos por hora y lo divido por los milisegundos por minuto */
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto)

    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo)

    parrafoDias.innerText = dias < 10 ? "0" + dias : dias
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos

    /* Corto el intervalo cuando sea menor a 0 */
    if (distancia < 0) {
        clearInterval(intervalo)
        cuentaAtras.innerHTML = '<p class="grande"> "Nos vamos de viaje de egresados"</p>'
    }
}, 1000) /* 1000: sería cada cuanto tiempo quiero actualizarlo */
