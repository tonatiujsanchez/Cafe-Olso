const nav = document.querySelector('#nav');
const btnNav = document.querySelector('#btn-nav');


btnNav.addEventListener( 'click', ()=>{
    nav.classList.toggle('toggle-nav');
});
