import fetch from 'node-fetch';

const readFile= async(value)=>{
    let file;

    switch (value) {
        case 'conciliaciones':
            file= '/conciliaciones.json'
            break;
        
        case 'fuetnes':
            file= '/fuetnes.json'
            break;

        case 'tableros':
            file= '/tableros.json'
            break;

        case 'usuarios':
            file= '/usuarios.json'
            break;
        default:
            break;
    }

    const response= await fetch(file);
    const newres= await response.json();

    return  newres;

}

export default readFile;