/*AUTOPLAY*/

var video = document.querySelector('video');

var promise = video.play();

if (promise === undefined) {
    console.log('Promisified video play() not supported');
} else {
    promise.then(function() {
        console.log('Video playback successfully initiated, returning a promise');
    }).catch(function(error) {
        console.log('Error initiating video playback: ', error);
    });
}

video.onloadedmetadata = function() {
    var fileName = this.currentSrc.replace(/^.*[\\/]/, '');
    document.querySelector('#videoSrc').innerHTML = 'Playing video: ' + fileName;
};



/*TOGGLE ICON DA NAVBAR*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*ALTERAÇÃO NA SELEÇÃO DE SESSÕES*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*STICKY NAVBAR*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    /* REMOVER TOGGLE ICON QUANDO CLICAR*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*SCROLL REVEAL*/

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.home-vid, .sobre-img, .sobre-content, .projetos-container, .conhecimentos ul, .contato form', { origin: 'bottom' });


/*EFEITO DIGITAR*/

const typed =new Typed('.texto-multiplo',{
    strings:['Backend Developer', 'Frontend Developer', 'Analista de Sistemas'],
    typeSpeed: 20,
    backSpeed: 20,
    backDelay: 1000,
    loop:true
});

