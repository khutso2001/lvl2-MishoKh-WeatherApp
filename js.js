const ulmenu=document.querySelector('.ul_menu');
const hamburger=document.querySelector('.hamburger');

hamburger.addEventListener('click',buegermenu);
function buegermenu(){
    hamburger.classList.toggle('active');
    ulmenu.classList.toggle('active');
}

const ullink = document.querySelectorAll(".ul_link");

ullink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    ul_menu.classList.remove("active");
}


const back=document.querySelector('.btn-danger.back');
console.log(back);

back.addEventListener('click',function(e){
    ulmenu.classList.remove("active");
    hamburger.classList.remove("active");
})

