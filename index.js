mensajes = [
    'Te pido perdon bebu. Como la primavera renace quiero que nuestro amor florezca de nuevo',
    'Con vos cada día es primavera',
    'Es primavera, y el sol brilla, pero vos lo haces mucho mas',
    'Tus ojitos son las joyas mas lindas',
    'Como el sol con las flores, sos el sol que ilumina mis dias',
    'Tu amor es el brote que florece en mi marchitado corazon',
    'Tus ojos brillas como sol en cielo despejado',
    'Sos la musica que suena en el aire cuando las flores comienzan a bailar',
    'Cada flor que veo me recuerda a vos',
    'La distancia no puede marchitar el amor que siento por vos',
    'Cada día que pasa mi amor por vos florece mas',
    'Si las flores son lindas, vos superas la naturaleza',
    'Cuento los dias para verte y disfrutar juntos la primavera',
    'Cada día lejos tuyo es un dia menos para volver a estar juntos',
    'En este jardin falta la flor mas bella. Vos',
    'Hoy celebro tu esfuerzo como estudiante y la belleza de la primavera que llevas con vos'
]



let $listaFlores = document.querySelectorAll('.flor');
let $cloud = document.querySelector('#cloudMsg');
// let $msg = document.querySelector('#msg');

console.log($listaFlores)
console.log($cloud)

$listaFlores.forEach(flor => {
    flor.addEventListener('click', e => {
        // let pos =
        // if ($cloud.classList.contains('visible')) {
        //     $cloud.classList.remove('visible')
        // }

        let i = Math.floor(Math.random() * (16));
        console.log(i)
        let msg = mensajes[i];
        console.log(msg)
        $cloud.classList.add('visible');

        setTimeout(() => {
            $cloud.classList.remove('visible')
        }, 4000);
        $cloud.innerText = msg;
        // $cloud.classList.remove('visible');
    })

})

// console.log(mensajes)
let mensajeDeFlor = (msg) => {

}

