
//alert("Hola bienvenido a mi sitio web..");

let nombre1 = "Fabian";
var nombre2 = "Fabio";
const nombre3 = "Leonardo";
//nombre3 = "Fabia";

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

let contenidoTitulo = "Nombre";


// Funciones

let profes = "Ingeniero de Software";
let habilids = "la construccion de aplicaciones moviles";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(profes, habilids){
    let contenido = `Como ${profes} y diseñador UX/UI, mi principal objetivo es crear soluciones digitales atractivas y funcionales que mejoren la experiencia del usuario. Tengo habilidades en ${habilids}, así como en la implementación de estrategias de diseño centradas en el usuario. Soy apasionado por las nuevas tecnologías y me mantengo actualizado sobre las últimas tendencias y herramientas del mercado. Con una mentalidad orientada a los resultados, siempre busco formas de mejorar la calidad del producto y la satisfacción del usuario final`;

    return contenido;
};

parrafo.innerText = cambiarTexto(profes, habilids);