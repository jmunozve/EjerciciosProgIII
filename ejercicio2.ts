/**
 * EVALUACIÓN - UNETI
 * Unidad Curricular: Programación III
 * Ejercicio 2: Enumeraciones con TypeScript
 */

// 1. Definición de Enumeraciones para Géneros de Películas
enum GeneroPelicula {
    Accion = "Acción",
    Drama = "Drama",
    CienciaFiccion = "Ciencia Ficción",
    Comedia = "Comedia",
    Terror = "Terror",
    Documental = "Documental"
}

// 2. Definición de Enumeraciones para Países de Origen
enum PaisPelicula {
    Venezuela = "Venezuela",
    Espana = "España",
    EEUU = "Estados Unidos",
    Japon = "Japón",
    Argentina = "Argentina",
    Francia = "Francia"
}

// 3. Estructura para organizar la información (Interfaz)
interface PeliculaInfo {
    titulo: string;
    genero: GeneroPelicula;
    pais: PaisPelicula;
}

// 4. Función para mostrar los datos de forma atractiva
function mostrarCartelera(peliculas: PeliculaInfo[]): void {
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

// 6. Ejecución del programa
mostrarCartelera(misPeliculas);