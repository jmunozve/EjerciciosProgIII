"use strict";
/*
 * EVALUACIÓN - UNETI
 * Unidad Curricular: Programación III
 * Ejercicio 2: Enumeraciones con TypeScript
 */
// Comencé definiendo esta enumeración para los géneros de las películas
// porque me permite restringir los valores a categorías específicas,
// asegurando que no existan errores de escritura al asignar los datos.
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Terror"] = "Terror";
    GeneroPelicula["Documental"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));
// De la misma manera establecí una enumeración para los países de origen,
// lo cual me ayuda a estandarizar la procedencia de cada film y facilita
// el manejo de la información geográfica dentro de mi programa.
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["Venezuela"] = "Venezuela";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["EEUU"] = "Estados Unidos";
    PaisPelicula["Japon"] = "Jap\u00F3n";
    PaisPelicula["Argentina"] = "Argentina";
    PaisPelicula["Francia"] = "Francia";
})(PaisPelicula || (PaisPelicula = {}));
// Desarrollé esta función con la intención de automatizar la salida de
// datos por consola, dándole un formato visualmente ordenado que
// incluye separadores y un encabezado claro para la cartelera.
function mostrarCartelera(peliculas) {
    console.log("==========================================");
    console.log("       CARTELERA DE CINE - UNETI          ");
    console.log("==========================================");
    // Implementé un ciclo que recorre el arreglo de películas para
    // mostrar cada propiedad junto con un índice incremental, permitiendo
    // una lectura más fluida de cada elemento registrado.
    peliculas.forEach((peli, index) => {
        console.log(`${index + 1}. TÍTULO: ${peli.titulo}`);
        console.log(`   GÉNERO: ${peli.genero}`);
        console.log(`   PAÍS:   ${peli.pais}`);
        console.log("------------------------------------------");
    });
}
// Para validar mi código creé este arreglo de prueba donde integré
// ejemplos variados, incluyendo una producción nacional y otras
// internacionales para comprobar que las enumeraciones responden bien.
const misPeliculas = [
    {
        titulo: "El Silbón",
        genero: GeneroPelicula.Terror,
        pais: PaisPelicula.Venezuela
    },
    {
        titulo: "Interstellar",
        genero: GeneroPelicula.CienciaFiccion,
        pais: PaisPelicula.EEUU
    },
    {
        titulo: "El Secreto de sus Ojos",
        genero: GeneroPelicula.Drama,
        pais: PaisPelicula.Argentina
    }
];
// Finalmente hago el llamado a la función pasando mi lista de películas
// para visualizar el resultado final de la ejecución en la terminal.
mostrarCartelera(misPeliculas);
