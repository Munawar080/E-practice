const menu = document.querySelectorAll("#tiny > li > a");
menu.forEach(m => {
    
    m.addEventListener('click' ,  function(e) {
        e.preventDefault();
        e.stopPropagation();
        menu.forEach(m => {
            m.classList.remove('active')
        })
        m.classList.add('active')
        console.log(m)
    })
})