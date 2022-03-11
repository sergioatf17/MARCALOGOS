var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Manizales, Caldas')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Contactanos al 606 871 74 09')
    .pauseFor(2500)
    .deleteChars(7)
   /* .typeString('<strong>Y todo Colombia!</strong>')*/
    .pauseFor(2500)
    .start();