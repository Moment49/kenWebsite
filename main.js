//Adding an event litsener to toggle the menu button
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

menuBtn.addEventListener('click', ()=>{
    console.log('button clicked');
    menuBtn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
})