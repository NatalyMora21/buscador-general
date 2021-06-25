import readFile from '../../Data/readFile';
export const SEARCH_SUCCESS= 'SEARCH_SUCCESS';
export const SEARCH_ERROR= 'SEARCH_ERROR';

export const searchSucces=(info)=>{
    return {
        type:SEARCH_SUCCESS,
        payload:info
    }
}

//Acción principal que según la información a buscar realiza el filtro en la data
const searchGeneral= (value, option, date)=>{

    return async (dispatch)=>{

        const infoConciliaciones= await readFile("conciliaciones");
        const infoFuetnes= await readFile("fuetnes");
        const infoTableros= await readFile("tableros");
        const infoUsuarios= await readFile("usuarios");


        let searchConciliaciones;
        let searchFuetnes;
        let searchTableros;
        let searchInfoUsuarios;


        //Buscar info en campo según el tipo seleccionado por el usuario
        switch (option) {
            case "namedescription":
                searchConciliaciones = infoConciliaciones.filter(info => info.description.includes(value) || info.conciliationName.includes(value) );
                searchFuetnes = infoFuetnes.filter(info => info.description.includes(value) || info.name.includes(value));
                searchTableros = infoTableros.filter(info => info.description.includes(value) || info.dashboardName.includes(value));
                searchInfoUsuarios = infoUsuarios.filter(info => info.name.firstName.includes(value));
          
                break;

            case 'id':
                searchConciliaciones = infoConciliaciones.filter(info => info._id == value);
                searchFuetnes = infoFuetnes.filter(info => info._id == value);
                searchTableros = infoTableros.filter(info => info._id == value);
                searchInfoUsuarios = infoUsuarios.filter(info => info._id == value);
   
                break;

            case 'fecha':
                searchConciliaciones = infoConciliaciones.filter(info => info.timestamp.createdAt == date);
                searchFuetnes = infoFuetnes.filter(info => info.timestamp.createdAt == date);
                searchTableros = infoTableros.filter(info => info.timestamp.createdAt == date);
                searchInfoUsuarios = infoUsuarios.filter(info => info.createdAt == date);
        
                break;
        
            default:
                break;
        }

        dispatch(searchSucces([searchConciliaciones,searchFuetnes,searchTableros,searchInfoUsuarios]));

    }
}

export default searchGeneral;
