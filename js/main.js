/*--------------Barra de Navegacion--------------*/
const menu = document.getElementById("menu");
const itemInicio = document.getElementById("itemInicio");
const itemAbout = document.getElementById("itemAbout");
const itemSkills = document.getElementById("itemSkills");
const itemProjs = document.getElementById("itemProjects");
const itemContact = document.getElementById("itemContacto");
const itemsMenu = document.querySelectorAll(".nav-link");

/*---------------Footer---------------*/
const contenedorIcons = document.querySelectorAll(".icon-container");
 

// Inicializacion de Vanilla-tilt.js

// VanillaTilt.init(document.querySelector(".box"), {
//     max: 25,
//     speed: 400
// });

            //Para saber la resolucion de pantalla
// console.log("La altura de tu pantalla es de " + screen.height);
// console.log("La ancho de tu pantalla es de " + screen.width); 

//          Prueba fallida para automatizar el proceso de seleccion de items del navbar
// itemsMenu.forEach((item)=>{

//     console.log(item.id);
//     addEventListener("scroll",()=>{
//         let tamanoDePantalla=window.innerHeight;

//         let itemMenu = document.getElementById(item.id);
//         let posicionItem=itemMenu.getBoundingClientRect().top;

//         if(posicionItem<(tamanoDePantalla/3.2)){
//                 itemAbout.classList.add("text-danger");
//             }
//     })
// })


addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = screen.height;
    let pixel = window.scrollY;
    
    if(pixel>heightScreen){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }

    //Prueba animacion subrayados al hacer scroll

    let subrayado = document.getElementById("subrayado");
    let subrayado2=document.getElementById("subrayado-2");
    let subrayado3 = document.getElementById("subrayado-3");
    let subrayado4 =document.getElementById("subrayado-4");
    let posicionObjt1 = subrayado.getBoundingClientRect().top;
    let posicionObjt2 = subrayado2.getBoundingClientRect().top;
    let posicionObjt3 = subrayado3.getBoundingClientRect().top;
    let posicionObjt4 = subrayado4.getBoundingClientRect().top;
    // console.log(posicionObjt3);
    let tamanoDePantalla=window.innerHeight;
    // console.log("Tamaño de pantalla", (tamanoDePantalla - 100));

    if(posicionObjt1 < tamanoDePantalla){
        subrayado.style.animation = "fade-sub 2s ease";
    }
    if(posicionObjt2 < tamanoDePantalla){
        subrayado2.style.animation = "fade-sub 2s ease";
    }
    if(posicionObjt3 < tamanoDePantalla){
        subrayado3.style.animation = "fade-sub 2s ease";
    }
    if(posicionObjt4 < tamanoDePantalla){
        subrayado4.style.animation = "fade-sub 2s ease";
    }
    
    activarItemsMenu(tamanoDePantalla);

})


contenedorIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        let ico=icon.childNodes[0].nextElementSibling;
        
        icon.style.zIndex=2;
        ico.style.boxShadow="2px 15px 20px 1px rgba(0,0,0,0.53)";
        
        // icon.classList.add("efecto");

    });
    icon.addEventListener('mouseout', () => {
        let ico=icon.childNodes[0].nextElementSibling;
        ico.style.transition=".5s";         /*Para que la sombra y el zindex desaparezcan a la par*/
        ico.style.boxShadow="0px 0px 0px 0px rgba(0,0,0,0)";
        icon.style.zIndex=0;

        // icon.style.animation="icons-pop-out .5s ease";
        // icon.classList.remove
        // console.log(icon);
    });
});


const activarItemsMenu = (tamanoDePantalla)=>{
    const inicio = document.getElementById("inicio");
    const sobreMi = document.getElementById("sobre-mi");
    const habilidades = document.getElementById("habilidades");
    const proyectos = document.getElementById("proyectos");
    const contacto = document.getElementById("contacto");



    let posicionInicio=inicio.getBoundingClientRect().top;
    let posicionAbout=sobreMi.getBoundingClientRect().top;
    let posicionSkills=habilidades.getBoundingClientRect().top;
    let posicionProjects=proyectos.getBoundingClientRect().top;
    let posicionContact=contacto.getBoundingClientRect().top;



    if(posicionInicio<(tamanoDePantalla/3) && posicionAbout>(tamanoDePantalla/3.2)){
        itemInicio.classList.add("active-item");
    }else{
        itemInicio.classList.remove("active-item");

    }
    if(posicionAbout<(tamanoDePantalla/3.2) && posicionSkills>(tamanoDePantalla/5)){
        itemAbout.classList.add("active-item");
    }else{
        itemAbout.classList.remove("active-item");
        
    }
    if(posicionSkills<(tamanoDePantalla/5) && posicionProjects>(tamanoDePantalla/5)){
        itemSkills.classList.add("active-item");
    }else{
        itemSkills.classList.remove("active-item");
    }
    if(posicionProjects<(tamanoDePantalla/5) && posicionContact>(tamanoDePantalla/5)){
        itemProjs.classList.add("active-item");
    }else{
        itemProjs.classList.remove("active-item");
    }
    if(posicionContact<(tamanoDePantalla/5)){
        itemContact.classList.add("active-item");
    }else{
        itemContact.classList.remove("active-item");
    }
}
