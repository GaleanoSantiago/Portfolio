/*--------------Barra de Navegacion--------------*/
const menu = document.getElementById("menu");
const itemInicio = document.getElementById("itemInicio");
const itemAbout = document.getElementById("itemAbout");
const itemSkills = document.getElementById("itemSkills");
const itemProjs = document.getElementById("itemProjects");
const itemContact = document.getElementById("itemContacto");
const itemsMenu = document.querySelectorAll(".nav-link");

/*---------------Modal---------------*/
const modal = document.querySelectorAll(".mdl");
// console.log(modal);

/*---------------Footer---------------*/
const contenedorIcons = document.querySelectorAll(".icon-container");
 


/*---------------Pantalla Preloader---------------*/

//  Load. No se pone el window
addEventListener("load",()=>{
   document.getElementById("loader").classList.toggle("loader2");
   document.querySelector(".btn-cv").classList.add("btn-animation");
})


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

/*--------------Prueba generar carousel-item dinamicamente--------------*/

modal.forEach(mdl => {
    const modalBody = document.querySelector(".modal-body");
    const modalHeader = document.querySelector(".modal-header");
    let valueMdl = mdl.value;
    let infoModales = [
    {
        titulo: `CoinCoders`,
        descripcion:`Sitio web realizado para una empresa 
        de desarrollo de software. Totalmente responsive 
        y con un formulario de contacto funcional. 
        Desarrollada con una mezcla de css, bootstrap y javascript.`,
        lenguajes: `HTML - CSS - JS`

    },
    {
        titulo:`Portafolio`,
        descripcion:`Incluyo este mismo portafolio como un proyecto 
        en mi galería debido al trabajo y esfuerzo que me tomó 
        desarrollarlo hasta el nivel en el que se encuentra ahora. 
        Este portafolio es completamente responsive y la mayoría de efectos 
        y animaciones fueron creados por mí.`,
        lenguajes: `HTML - CSS - JS`

    },
    {
        titulo:`Calculadora de Dias`,
        descripcion:`Sitio web interactivo, ingrese una fecha 
        cualquiera y el programa mostrará la cantidad de días 
        exactos que hay entre esa fecha y el presente. 
        Los procesos llevados a cabo por el programa son realizados en JavaScript.`,
        lenguajes: `HTML - CSS - JS`

    },
    {
        titulo:`Random User Generator`,
        descripcion:`
        Generador de usuario aleatorio creado con javascript y 
        mediante la utilizacion de una API para la informacion 
        de los usuarios. El color del background tambien cambia con cada usuario.`,
        lenguajes: `HTML - CSS - JS`
    },
    {
        titulo:`Sistema de Venta`,
        descripcion:`
        CRUD desarrollado para un negocio de mi ciudad, 
        el proyecto que se encuentra en el hosting es una versión 
        sin los detalles del negocio en cuestión, y con algunas diferencias leves.`,
        lenguajes: `HTML - CSS - JS - PHP - SQL`
    },
    {
        titulo:`Sistema de Venta y Control de Stock`,
        descripcion:`
        CRUD de venta y control de stock para pymes. 
        Una versión mucho más compleja y extensa que 
        el sistema visto anteriormente. <br>
        Usuarios: <br>
        -Administrador: admin - admin <br>
        -Cajero: Xpress - 12345        
        `,
        lenguajes: `HTML - CSS - JS - PHP - SQL`
    }
    ]
    mdl.addEventListener("click", ()=>{
        // console.log(valueMdl);
        // console.log(infoModales[valueMdl].titulo);
        // console.log(infoModales[valueMdl].descripcion);
        
        modalHeader.innerHTML = `
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${infoModales[valueMdl].titulo}</h1>
        <button type="button" class="bg-light btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        modalBody.innerHTML = `
        <p class="text-gray">${infoModales[valueMdl].descripcion}</p>
        <p>Lenguajes Utilizados: <span class="text-gray">${infoModales[valueMdl].lenguajes}</span></p>
        `;

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


/*--------------Prueba generar carousel-item dinamicamente--------------*/

let contenedorCarousel = document.querySelector(".carousel-item-js");

let fragmento = document.createDocumentFragment();
let pruebaDiv = document.createElement("DIV");
let pruebaDiv2 = document.createElement("DIV");
let imgPrueba = document.createElement("img");

// class Cards{
//     constructor
// }
let cards = [{
    number: "1",
    img: "../img/css-logo.webp",
    descripcion: "Sistema de ventas de stock"
}]

// new Cards = 

let alumnos=[{
    nombre:"Dolor Suffering",
    email: "dolor@pain.com",
    materia:"Fisica 3"
},{
    nombre:"Karina Guerrera",
    email: "kar@pain.com",
    materia:"Literatura"
},{
    nombre:"Jorge Ramirez",
    email: "the_george@pain.com",
    materia:"Matematica"
},{
    nombre:"Facundo Roberto",
    email: "facu@pain.com",
    materia:"Sexologia 2"
},{
    nombre:"Iron u u",
    email: "hierro@pain.com",
    materia:"Educacion fisica"
}];

// imgPrueba.src="./img/proyecto4.webp";
// pruebaDiv.classList.add("contenedor-cards");
// pruebaDiv2.classList.add("card-project");

// pruebaDiv2.appendChild(imgPrueba);
// pruebaDiv.appendChild(pruebaDiv2);
// fragmento.appendChild(pruebaDiv);

// contenedorCarousel.appendChild(fragmento);

// for(i=0;){

// }