"use strict";
/**
 * EVALUACIÓN - UNETI
 * Unidad Curricular: Programación III
 * Ejercicio 2: Enumeraciones con TypeScript
 */
// 1. Definición de Enumeraciones para Géneros de Películas
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Terror"] = "Terror";
    GeneroPelicula["Documental"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));
// 2. Definición de Enumeraciones para Países de Origen
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["Venezuela"] = "Venezuela";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["EEUU"] = "Estados Unidos";
    PaisPelicula["Japon"] = "Jap\u00F3n";
    PaisPelicula["Argentina"] = "Argentina";
    PaisPelicula["Francia"] = "Francia";
})(PaisPelicula || (PaisPelicula = {}));
// 4. Función para mostrar los datos de forma atractiva
function mostrarCartelera(peliculas) {
    console.log("==========================================");
    console.log("       CARTELERA DE CINE - UNETI         ");
    console.log("==========================================");
    peliculas.forEach((peli, index) => {
        console.log(`${index + 1}. TÍTULO: ${peli.titulo}`);
        console.log(`   GÉNERO: ${peli.genero}`);
        console.log(`   PAÍS:   ${peli.pais}`);
        console.log("------------------------------------------");
    });
}
// 5. Creación de datos de ejemplo
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
// 6. Ejecución del programa
mostrarCartelera(misPeliculas);
