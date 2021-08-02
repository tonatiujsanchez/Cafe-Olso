const nav = document.querySelector('#nav');
const btnNav = document.querySelector('#btn-nav');

btnNav.addEventListener( 'click', ()=>{
    nav.classList.toggle('toggle-nav');
});


window.addEventListener( 'scroll', ()=>{

    animationFade('fast');
    animationFade('medium');
    animationFade('slow');
});

const animationFade = ( speed )=>{
    const elements = document.querySelectorAll(`.animation-${speed}`);

    elements.forEach(element => {        
        const screenHeight = window.innerHeight;
        const distancia = element.getBoundingClientRect().top;
        // element.classList.add('traslation');
    
        if( distancia <= screenHeight ){
            element.classList.add(`traslation-${speed}`);
        }
    });
    
}