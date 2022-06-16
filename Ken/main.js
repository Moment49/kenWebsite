//Adding an event litsener to toggle the menu button
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

menuBtn.addEventListener('click', ()=>{
    console.log('button clicked');
    menuBtn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
})

/*Form Validation Variables*/
const form = document.getElementById('form');
const subjectInput = document.getElementById('subject');
const nameInput = document.getElementById('fullname')
const telInput = document.getElementById('tel')
const emailInput =document.getElementById('email')
const messageInput = document.getElementById('message')
const msg = document.getElementById('msg')

/*Form Validation */
form.addEventListener( 'submit', (e)=>{
    e.preventDefault();
    console.log('clicked')
    formValidate();
});

function formValidate(){
    if(emailInput.value === '' ){
        msg.innerHTML = 'Please fill all details'
        console.log('Please Fill all the details')
    }else{
        console.log('success')
        msg.innerHTML =" "

        
    }
}


