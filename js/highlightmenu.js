var menu = document.querySelectorAll("#tiny > li > a");
var currentUrl = window.location.href;
var url = currentUrl.split('/');
var laststring = url[url.length -1];

console.log(laststring)

switch (laststring) {
    case "index.html":
        removeClass();
        menu[0].classList.add('active');
        break;
    case "aboutus.html":
        removeClass();
        menu[1].classList.add('active');
        break;
    case "features.html":
        removeClass();
        menu[3].classList.add('active');
        break;
    case "contactus.html":
        removeClass();
        menu[5].classList.add('active');
        break;

    default:
        break;
}

menu.forEach(link =>{
   console.log(link)
})


function removeClass(){
    menu.forEach(link =>{
            link.classList.remove('active');
        })

}




