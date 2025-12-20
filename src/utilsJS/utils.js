// Función para formatear el input del searchbar y que se acomode a la convención de artist_name
// en "The Audio DB API, p.ej., /search.php?s=foo_fighters"

export const formatSearchQuery = (str) => {
    //Primero limpiamos el string de cualquier signo de puntuación
    const cleanStr = str.replace(/[^a-zA-z0-9\s]/g, " ");

    //Cortamos espacios al principio y final del string
    const trimStr = cleanStr.trim();

    //Después separamos el string en un array de palabras
    const splitStr = trimStr.split(" ");

    // En casos de doble espacio entre palabras quitamos esos espacios para que
    // el output no sea foo__fighters
    const filterStr = splitStr.filter((str) => str.trim().length > 0);

    //Luego unimos las palabras con guión bajo "_"
    const joinStr = filterStr.join("_");

    //Por último hacemos todas minúsculas
    return joinStr.toLowerCase();
};

export const formatDuration = (miliseconds) => {
    if (isNaN(miliseconds) || miliseconds < 0) {
        return "0:00";
    }

    //Conversión de ms a segundos
    const totalSeconds = Math.floor(miliseconds / 1000);

    //Calcular mins
    const minutes = Math.floor(totalSeconds / 60);

    //Calcular segundos restantes
    const seconds = totalSeconds % 60;

    //Dos dígitos después de los mins
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
};
