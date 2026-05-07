

// Comencé definiendo esta enumeración para los géneros de las películas
// porque me permite restringir los valores a categorías específicas,
// asegurando que no existan errores de escritura al asignar los datos.
enum GeneroPelicula {
    Accion = "Acción",
    Drama = "Drama",
    CienciaFiccion = "Ciencia Ficción",
    Comedia = "Comedia",
    Terror = "Terror",
    Documental = "Documental"
}

// De la misma manera establecí una enumeración para los países de origen,
// lo cual me ayuda a estandarizar la procedencia de cada film y facilita
// el manejo de la información geográfica dentro de mi programa.
enum PaisPelicula {
    Venezuela = "Venezuela",
    Espana = "España",
    EEUU = "Estados Unidos",
    Japon = "Japón",
    Argentina = "Argentina",
    Francia = "Francia"
}

// Aquí diseñé una interfaz que funciona como el contrato o estructura
// obligatoria para mis objetos, garantizando que cada película tenga
// siempre un título, un género y un país bien definidos.
interface PeliculaInfo {
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisPelicula;
}

// Desarrollé esta función con la intención de automatizar la salida de
// datos por consola, dándole un formato visualmente ordenado que
// incluya separadores y un encabezado claro para la cartelera.
function mostrarCartelera(peliculas: PeliculaInfo[]): void {
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
const misPeliculas: PeliculaInfo[] = [
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