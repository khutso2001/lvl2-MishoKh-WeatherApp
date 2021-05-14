const closebutton=document.querySelector('.close_btn');
const openbutton=document.querySelector('.open_btn');
const modalcontainer=document.querySelector('.modal_container ');

openbutton.addEventListener('click',()=>{
    modalcontainer.classList.add('show');
});
closebutton.addEventListener('click',()=>{
    modalcontainer.classList.remove('show');
});