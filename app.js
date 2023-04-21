const togglebtn=document.querySelector(".icons");
const togglebtnicon=document.querySelector(".icons i");
const dropdownmenu=document.querySelector(".dropdown-menu");
togglebtn.onclick=function(){
    dropdownmenu.classList.toggle('open')
    const isOpen=dropdownmenu.classList.contains('open')

    
}