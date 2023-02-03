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

/*--------------Prueba generar los proyectos dinamicamente--------------*/

modal.forEach(mdl => {
    const modalBody = document.querySelector(".modal-body");
    const modalHeader = document.querySelector(".modal-header");
    const modalFooter = document.querySelector(".modal-footer");
    let valueMdl = mdl.value;
    let infoModales = [
    {
        titulo: `CoinCoders`,
        descripcion:`Sitio web realizado para una empresa 
        de desarrollo de software. Totalmente responsive 
        y con un formulario de contacto funcional. 
        Desarrollada con una mezcla de css, bootstrap y javascript.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/coincoders/`,
        codigo:`https://github.com/GaleanoSantiago/coincoders`

    },
    {
        titulo:`Portafolio`,
        descripcion:`Incluyo este mismo portafolio como un proyecto 
        en mi galería debido al trabajo y esfuerzo que me tomó 
        desarrollarlo hasta el nivel en el que se encuentra ahora. 
        Este portafolio es completamente responsive y la mayoría de efectos 
        y animaciones fueron creados por mí.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`#`,
        codigo:`https://github.com/GaleanoSantiago/Portfolio`
    },
    {
        titulo:`Calculadora de Dias`,
        descripcion:`Sitio web interactivo, ingrese una fecha 
        cualquiera y el programa mostrará la cantidad de días 
        exactos que hay entre esa fecha y el presente. 
        Los procesos llevados a cabo por el programa son realizados en JavaScript.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/DaysOfOurLife_js/`,
        codigo:`https://github.com/GaleanoSantiago/DaysOfOurLife_js`

    },
    {
        titulo:`Random User Generator`,
        descripcion:`
        Generador de usuario aleatorio creado con javascript y 
        mediante la utilizacion de una API para la informacion 
        de los usuarios. El color del background tambien cambia con cada usuario.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/randomUser/`,
        codigo:`https://github.com/GaleanoSantiago/randomUser`
    },
    {
        titulo:`Sistema de Venta`,
        descripcion:`
        CRUD desarrollado para un negocio de mi ciudad, 
        el proyecto que se encuentra en el hosting es una versión 
        sin los detalles del negocio en cuestión, y con algunas diferencias leves.`,
        lenguajes: `HTML - CSS - JS - PHP - SQL`,
        proyecto:`https://crud-galeano.000webhostapp.com/app/Registro_Local/index.php`,
        codigo:`https://github.com/GaleanoSantiago/RegistroLocal`
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
        lenguajes: `HTML - CSS - JS - PHP - SQL`,
        proyecto:`http://crudpro-galeano.epizy.com/Polirrubro/index.php`,
        codigo:`https://github.com/GaleanoSantiago/systemCRUD`
    },
    {
        titulo:`Pagina Web ConstruCom`,
        descripcion:`
        Página web creada para una constructora local, 
        en conjunto con el equipo de trabajo de <a href="http://n7softwares.github.io/" class="text-primary" target="_blank">N7softwares</a>.
        `,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://constructoracomercialsrl.com.ar/`,
        codigo:`https://github.com/GaleanoSantiago/construcom.git`
    },
    {
        titulo:"Catalogo de Productos",
        descripcion:`
        Catalogo de productos generado dinamicamente con javascript, con ventanas modal para la información
        de los productos, y opción de preguntar precio por Whatsapp. El sitio es 100% responsive y los mensajes son 
        personalizadas para cada producto. 
        `,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/catalogo-productos/`,
        codigo:`https://github.com/GaleanoSantiago/catalogo-productos/`
    },
    {
        titulo:"Web App de Tareas con NodeJS y Express",
        descripcion:`
        CRUD de tareas desarrollado con NodeJs y Express. Utilizando SQL para 
        la conexión con la bd y handlebars para las vistas.`,
        lenguajes: `HTML - CSS - JS - Node JS - Express JS - SQL`,
        proyecto:`#proyectos`,
        codigo:`https://github.com/GaleanoSantiago/nodejs-crud-tasks`
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
        let proyecto;
        let target;
        if(valueMdl==1 || valueMdl==8 ){
            proyecto = "#proyectos";
            target = "";
        }else{
            proyecto = infoModales[valueMdl].proyecto;
            target = "_blank";
        }
        modalFooter.innerHTML = `
        <div class="contenedor-btn-glass">
            <a href="${proyecto}" target="${target}" class="">
                <div class="btn-glass btn-glass-inverso">Ver Proyecto</div>
            </a>
        </div>
        <div class="contenedor-btn-glass">
            <a href="${infoModales[valueMdl].codigo}" target="_blank">
            <div class="btn-glass btn-glass-inverso">
                <svg class="svg-git" viewBox="0 0 64 64" id="i-github" xmlns="http://www.w3.org/2000/svg">
                <path stroke-width="0" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
                </svg> Ver Código</div>
            </a>
        </div>
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


//------------ Para Activar SweetAlert al enviar el correo ------------  

const $form = document.querySelector('#contactform');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
            'Accept': 'application/json'
    }
        });
        // Si funciona
    if (response.ok) {
    this.reset();
     // Ejecutamos SweetAlert
     Swal.fire({
        icon: "success",
        text: "Email Enviado",
        timer: 700, // <- Ocultar dentro de 0.7 segundos
    });
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