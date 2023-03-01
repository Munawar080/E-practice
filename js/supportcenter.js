var menu = document.querySelectorAll("#tiny > li > a");

menu.forEach(link =>{
    link.classList.remove('active');
})

menu[4].classList.add('active');

