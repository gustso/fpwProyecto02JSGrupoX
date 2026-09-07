// importaciones
import { contarCaracteres, validarTexto } from "../services/serviciosEjercicio03.js";


// constantes

// cuerpo del proceso
const textoIngresado = prompt("ingresar un texto");

// validar el texto
validarTexto(textoIngresado);

const numeroCaracteres = contarCaracteres(textoIngresado);

alert(`La cadena tiene ${numeroCaracteres} caracteres`);