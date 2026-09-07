// importaciones
// constantes
const PI = Math.PI;

// definen las funciones
function calcularArea(radio){
    resultado = PI * Math.pow(radio,2);
    return resultado;
};


/* PM lider crear el repositorio remoto
luego crea la carpeta de trabajo en local
sube la carpeta al remoto, el proyecto vacio

TIENE COMPARTIR EL REPO 

Despues, cada uno clona el repo remoto en su compu 
inicializa el repo en local
crea su rama de trabajo
hace cambios
commits por los cambios
y luego push, desde el branch de cada uno

El lider revisar los PR y realiza el merge correspondiente  */


// Area del circulo
//const PI = 3.14;

//let radio = 2;

const ingresoRadio = prompt("Ingresar el Radio del Circulo");
// validación
//alert("El tipo de dato ingresado es " + typeof(ingresoRadio));

const radio = Number(ingresoRadio);


// proceso de cálculo
// const circulo = PI * Math.pow(radio,2);

alert(`Area del Circulo = ${calcularArea(radio)} m^2`);
//console.log(`Area del Circulo = ${circulo} m^2`);

console.log(calcularArea(radio));