var menu = document.querySelectorAll("#tiny > li > a");
menu.forEach(link =>{
    link.classList.remove('active');
})

menu[2].classList.add('active');

localStorage.removeItem('index');


