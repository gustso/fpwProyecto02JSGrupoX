// funciones

// funcion flecha
export const validarTexto = (t) =>{
if (t){
        alert("es una cadena válida");
    } else
        alert("Ingrese un texto válido");
};

export const contarCaracteres = (t) => {
    let contador = 0;
    
    const arrayCaracteres = t.split('');

    arrayCaracteres.forEach(c => {
        contador++;
    });

    console.log(arrayCaracteres);
    return (contador);
};

export const separarCaracteres = () => {

};
