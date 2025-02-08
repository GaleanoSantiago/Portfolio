/*--------------Barra de Navegacion--------------*/
const menu = document.getElementById("menu");
const itemInicio = document.getElementById("itemInicio");
const itemAbout = document.getElementById("itemAbout");
const itemSkills = document.getElementById("itemSkills");
const itemProjs = document.getElementById("itemProjects");
const itemContact = document.getElementById("itemContacto");
const itemsMenu = document.querySelectorAll(".nav-link");
/*---------------Timeline---------------*/
const timeline = document.getElementById("timeline");
const timelineContainer = document.querySelectorAll(".timeline-container");
// timeline.classList.add("animate");
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

addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = screen.height;
    let pixel = window.scrollY;
    
    if(pixel>heightScreen){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }

    // Seleccionamos todos los elementos con la clase "subrayado"
    let subrayados = document.querySelectorAll(".subrayado");
    let tamanoDePantalla = window.innerHeight;

    subrayados.forEach((sub) => {
        let posicion = sub.getBoundingClientRect().top;

        if (posicion < tamanoDePantalla - 200) {
            sub.style.animation = "fade-sub 2s ease";
            sub.style.opacity = 1;
        }
    });


    activarItemsMenu(tamanoDePantalla);
    // Animacion del timeline
    activarAnimacion(tamanoDePantalla);
})

// Animacion del timeline
const activarAnimacion = (tamanoDePantalla)=>{
    let posicionTimeline = timeline.getBoundingClientRect().top;
    // console.log(posicionTimeline);
    if(posicionTimeline < tamanoDePantalla-200){
        timeline.classList.add("animate");
        timelineContainer.forEach(box => {
            box.classList.add("animate");
        })
    }
}

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
        proyecto:`https://nodejs-crud-tasks-production.up.railway.app/`,
        codigo:`https://github.com/GaleanoSantiago/nodejs-crud-tasks`
    },
    {
        titulo:"Catalogo Web de Productos",
        descripcion:`
        Catalogo web para empresa Famago, funciona con un crud en PHP y SQL. Utiliza una
        API en JS para mostrar los productos dinamicamente en la pagina principal.
        El codigo Backend se encuentra privado.`,
        lenguajes: `HTML - CSS - JS - SQL - PHP`,
        proyecto:`https://galeanosantiago.github.io/famago-demo/`,
        codigo:`https://github.com/GaleanoSantiago/famago-demo`
    },
    {
        titulo:"Aplicación de Tareas Python Flask",
        descripcion:`
        Aplicación web de tareas hecho con python flask y Sqlite. Se ejecuta el 
        app.py de /backend primero y despues se abre el /frontend/index.html 
        desde un servidor, que puede ser local o no. Funciona por medio de una 
        API que envia la información de la bd desde el backend al frontend.`,
        lenguajes: `HTML - CSS - JS - Python - Flask - Sqlite`,
        proyecto:`#`,
        codigo:`https://github.com/GaleanoSantiago/python-crud-flask-tasks`
    },
    {
        titulo:"Pagina Web para Dulceria Humaya",
        descripcion:`
        Pagina web de una dulceria en la que incluye sus productos, 
        recetas, información de sus locales en tiempo real y un formulario
        de contacto funcional.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/humaya-CaC-ReactJS/`,
        codigo:`https://github.com/GaleanoSantiago/humaya-CaC-ReactJS`
    },
    {
        titulo:"Exposición Web - Almacenamiento en Disco",
        descripcion:`
        Pagina web creada para ser utilizada como una presentación informativa sobre 
        el almacenamiento en disco, su definición, clasificación, seguridad de datos y 
        evolución a lo largo del tiempo. Fue creada con html, css, bootstrap y javascript
        con un diseño moderno, llamativo y estetico, utilizando animaciones suaves y efectos 
        dinamicos interactivos para dar vida al tema que se presenta.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/expo-disco/`,
        codigo:`https://github.com/GaleanoSantiago/expo-disco`
    },
    {
        titulo:"Tecnicatura Superior en Desarrollo de Software - Pagina Web",
        descripcion:`
        Pagina web informativa sobre la tecnicatura superior en desarrollo de software ofrecida 
        en el Instituto Superor de Formación Docente Continua y Tecnica "Felix Atilio Cabrera".
        En ella se detalla información acerca de la carrera y el instituto donde se dicta. Es completamente
        responsive y cuenta con un diseño estetico y moderno, con atractivas animaciones y efectos dinamicos.
        También posee un boton para solicitar la inscripción a la carrera.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/pagina-software/`,
        codigo:`https://github.com/GaleanoSantiago/pagina-software`
    },
    {
        titulo:"Pagina Web del ISFDCyT 'Felix Atilio Cabrera'",
        descripcion:`
        Sitio Web del Instituto Superor de Formación Docente Continua y Tecnica "Felix Atilio Cabrera" ubicado en Formosa 
        Capital, ofrece información sobre todas las carreras disponibles asi como tambien del instituto mismo 
        y sus metodos de contacto. La infomación de todas las carreras se obtiene de un archivo json que trae 
        los datos con js y lo muestra en el archivo html, por lo que es completamente dinamico. Ofrece un boton para 
        inscribirse en las carreras vigentes.`,
        lenguajes: `HTML - CSS - JS`,
        proyecto:`https://galeanosantiago.github.io/FaC/`,
        codigo:`https://github.com/GaleanoSantiago/FaC`
    },
    {
        titulo:"Sitio Web de EcoIngenio + Lienzo de Canva para Diseñar Vasos",
        descripcion:`
        Sitio Web creado con Laravel para empresa de Resistencia "EcoIngenio" que comercializa vasos ecologicos, el sitio web
        continua en desarrollo pero posee un lienzo de diseño de vasos creado con canva y la biblioteca fabricJS ya finalizado y en uso por los clientes, dicho lienzo 
        posee una gran cantidad de opciones de diseño tales como agregar textos con tipografia personalizable, carga de elementos, 
        un sistema de colores para los elementos y el lienzo, un medidor para los tipos de vasos y la opcion de subir imagenes, las 
        cuales primero pasan por un conversor que lo convierte al tipo de imagen SVG, lo que permite su personalización total. Este 
        cnversor funciona puramente con javascript y es bastante potente. Posee también funciones complejas como descargar el diseño 
        en PDF y poder visualizar un modelo 3D del ecovaso con su diseño personalizado. Crear este proyecto fue un reto ya que tuve
        que aprender laravel desde cero y familiarizarme con la biblioteca de fabricjs en relativo poco tiempo debido al periodo de entrega.
        Es 100% responsive y posee una serie de CRUDS del lado del administrador para que los empleados de la empresa puedan cargar los 
        colores, imagenes, tipografias y medidores disponibles. Por motivos de confidencialidad y seguridad, el codigo fuente no se encuentra disponible.`,
        lenguajes: `HTML - CSS - JS - FabricJS  - PHP - SQL - Laravel`,
        proyecto:`https://prueba.ecoingenio.com.ar/disenio`,
        codigo:`https://prueba.ecoingenio.com.ar/disenio`
    }
    ]

    // Para agregar el titulo a las cards de los proyecto
    const h3 = mdl.closest(".contenedor-btn-glass").previousElementSibling;
    h3.textContent=infoModales[valueMdl].titulo;

    // Para cargar la informacion dentro del modal
    mdl.addEventListener("click", ()=>{
        
        modalHeader.innerHTML = `
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${infoModales[valueMdl].titulo}</h1>
        <button type="button" class="bg-light btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        modalBody.innerHTML = `
        <p class="text-gray">${infoModales[valueMdl].descripcion}</p>
        <p>Tecnologias Utilizadas: <span class="text-gray">${infoModales[valueMdl].lenguajes}</span></p>
        `;
        let proyecto;
        let target;
        // Para el proyecto del portafolio
        if(valueMdl==1 || valueMdl==10){
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

/*-------------- Para activar los iconos del menu --------------*/

const activarItemsMenu = (tamanoDePantalla)=>{
    
    // Seleccionamos todas las secciones y los items del menú automáticamente
    const secciones = document.querySelectorAll(".page-section"); 
    const itemsMenu = document.querySelectorAll(".nav-link"); 

    let indiceActivo = secciones.length - 1; // Por defecto, seleccionamos la última sección

    secciones.forEach((seccion, index) => {
        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < tamanoDePantalla - 300) {
            indiceActivo = index;
        }
    });

    // Removemos la clase activa de todos y la añadimos solo al correspondiente
    itemsMenu.forEach((item, index) => {
        item.classList.toggle("active-item", index === indiceActivo);
    });

}

const copyButton = document.getElementById("copyButton");
const email = "galeanosantiago10@gmail.com";

copyButton.addEventListener("click", () => {
  // Crear un elemento de texto temporal
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);

  // Seleccionar el texto dentro del elemento temporal
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto seleccionado al portapapeles
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(tempInput);

  // Mostrar mensaje de éxito
 
  // Ejecutamos SweetAlert
     Swal.fire({
        icon: "success",
        text: "¡Correo copiado al portapapeles!",
        timer: 700, // <- Ocultar dentro de 0.7 segundos
    });
});


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

//======================== Para el carrusel infinito de logos de clientes ========================

// Selecciona todos los elementos .cliente-box
let clienteBoxes = document.querySelectorAll(".logos-slide .cliente-box");

// Convierte el NodeList en un array y duplica los elementos
let duplicatedBoxes = [...clienteBoxes, ...clienteBoxes];

// Recorre el array duplicado y clona los elementos
duplicatedBoxes.forEach(box => {
    let clone = box.cloneNode(true);
    document.querySelector(".logos-slide").appendChild(clone);
});