
# Buscador creado en React

El buscador se realizó con React usando Redux 



## Ejecución 
```
1. Clonar el repositorio 
```

```
2.  Instarlar los módulos: 📋

    * npm i redux
    * npm i redux-react
    * npm i redux-devtools-extension
    * npm i node-fetch
```

```
3.  Correr la aplicación 🚀

    npm start 
```

## Estructura 

Carpetas:
  #### `Components: ` 
    Contienes los componentes Result y Buscador donde se encuentra el formulario para buscar la información y 
    la sección para mostrar los resultados clasificados por módulo.
    
  #### `Data: ` 
    Encuentra el archivo readFile donde se realiza la función para acceder a la información que se 
    encuentra en los archivos tipo json.
    
   #### `Redux: ` 
    Se encuentran las acciones, el reducer y el store donde se almacena en el estado de la aplicación cada vez que se realiza
    un solicitud de búsqueda.
   
   
## Cuestionario 📖

#### 1 . ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?

    Con js se puede manipular el Dom y manejo de peticiones de manera sencilla, con JQuery no.
	
#### 2 . ¿ Por qué usarías Hooks de las nuevas versiones de ReactJS, en lugar de class component ?

    Los Hooks permiten que los componentes funcionales puedan tener un ciclo de vida detallado y mantener 
    el estado de manera sencilla.
    
#### 3 . ¿ Qué es un archivo JSX ?

    JSX es una extensión de JavaScript que permite describir como se debe mostrar la interfaz a través de elementos de React.

#### 4. ¿ Qué diferencia hay entre una function y una arrow function de Javascript ?

    La syntaxis es más simple y se entiende de manera fácil.
    Arrow function hereda el contexto superior más no en el que se encuentra en su contexto, por lo tanto
    no vinculan sus propios this.

#### 5. ¿ Qué es Redux y cómo nos ayuda en los proyectos ?

    Redux es una librería JavaScript  que permite trabajar y almacenar el estado global de una aplicación, permitiendo 
    acceder desde cualquier componente a la información para consultar o interactuar con esta.

#### 6.	¿ Por qué usuarios pruebas unitarias en tu código ?

    Se usan las pruebas unitarias para poder comprobar que las funcionalidades implementadas en el código realicen el
    proceso y devuelvan el resultado esperado.
    Permite verificar el correcto funcionamiento del código.
    
#### 7.	¿ Qué nos permite hacer la siguiente declaración ?
![Cuestinario](https://user-images.githubusercontent.com/57692056/123438249-1fc8dc00-d596-11eb-9393-ea860cf4ec14.png)

    La función principal recibe el parámetro para_1 y retorna otra función que recibe como parámetro param_2 que retorna la 
    suma de los dos parámetros.
    

