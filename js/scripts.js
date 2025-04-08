const menuBtn = document.querySelector('#menu');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-sidebar');
const darkModeBtn = document.querySelector('#modo-escuro');

menuBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("open");
});

darkModeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.sidebar').classList.toggle('dark-mode');

    if(darkModeBtn.textContent === 'dark_mode'){
        darkModeBtn.textContent = 'light_mode';
    } else{
        darkModeBtn.textContent = 'dark_mode';
    }
});