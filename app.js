
//set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//close links
const menu = document.getElementById('mobile-menu');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    
});

menu.addEventListener('click',function(){
    linksContainer.classList.toggle("show-links");
})
