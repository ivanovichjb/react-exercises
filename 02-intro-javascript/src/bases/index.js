///////////////EXPORTS IMPORTS
import heroes , {owners}  from '../data/heroes';


// variables y constantes

const nombre = "fernando";
let apellidos = "app"

let valorDado = 5
valorDado = 4;

const nombreCompleto = `Nombre y apellido
 ${nombre} 
 ${apellidos}
 ${valorDado}`;

function getText(){
    return "Hola ";
}

console.log(nombreCompleto)

console.log(`esto es un texto ${getText()}`)

//////////

const persona = {
    nombre : "Tony",
    apellido : "Starck",
    age : 20,
    direccion : {
        ciudad : "New York",
        zip: 247800,
        lat: 14.33,
        lng: 123
    }
}


//console.log( {...persona} )

const arreglo = [1,2,3,4];

const arreglo2 =[... arreglo , 5];


const arreglo3 =  arreglo2.map( x => x *2 )


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

///////////////

const saludar = function (nombre){
    return `Hola ${nombre}`;
}


const saludar2 = nombre => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;
const saludar4 = () => 'Hola mundo '


//saludar = "Esto es un saludo";

console.log(saludar2);


const getUser = () => ({
      uid: 'ABCD1',
      userName : 'Ivan'
    });


console.log(getUser())

//Tarea
//1 Transforme a una funcion de flecha
//2 Tiene que retirnar a un objeto implicito
//3 pruebe

const getUsiarioActivo = nombre =>  
        ({uid : 'ABCD1',
          username: nombre 
        })

const usuarioActivo = getUsiarioActivo('Alejandro');
console.log(usuarioActivo);

//Destructuring Objcts//////////////////////////////////////////////////////////

//TODO!//

const person = {
    nombre : 'Tony',
    edad : 34,
    clave : 'Iroman'
}

console.log(person.nombre);
console.log(person.edad);
console.log(person.clave);

const {nombre : nombre2, edad, clave } = person;

console.log(nombre2, edad, clave);

const userContext = ({nombre,edad,clave, rango = 'Capitan'}) =>{
   // return `Dentro de la => ${nombre} , ${edad} ,${clave} ,${rango}`;
   return {
       nombreClave : clave,
       anios : edad,
       latlong : {
           lat : 123.345,
           long :  234
       }  
   }
}

//console.log(retornoPerson(person));

const avanger = userContext(person);

const { nombreClave , anios , latlong : {lat,long}} = avanger

console.log(nombreClave , anios , lat, long);


/////////////////////////////////////////////////////////////////////////

//Destructurin arrays

const personajes = ["Goku", "Vegeta" , "Trunks"] 

const [ , , p3] = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABCD',123]
}

const [ id, num] = retornaArreglo ()

console.log(id,num)

const usesState = (valor) => {
    return [
        valor , () => {console.log("Hola Mundo")}
    ]
}

const [nomb , setNombre ] = usesState('ivan')

setNombre();


////////////////////

const getHeroeById = id => heroes.find( heroe => heroe.id === id);

console.log(getHeroeById(2));

const getHeroeByOwner = owner => heroes.filter( heroe => heroe.owner === owner);

console.log(getHeroeByOwner('Marvel'));

////////////////////// PROMISES

// const promesa = new Promise( (resolve, reject) =>{
//     setTimeout(() => {
//         //importar  getHeroeById
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject('No se puso encontrar un heroe')
//     }, 2000);
// });

// promesa.then( (heroe) =>{
//     console.log(heroe)
// }).catch( err => console.warn(err));

const getHeroByIdAsync = (id) =>{
return new Promise( (resolve, reject) =>{
    setTimeout(() => {
        //importar  getHeroeById
        const heroe = getHeroeById( id);
        if( !heroe ){
            reject('No se puso encontrar un heroe')
        }else{
            resolve(heroe);
        }
        //reject('No se puso encontrar un heroe')
    }, 2000);

});

}

getHeroByIdAsync(10)
    .then( console.log)
    .catch( console.warn );

///////////////////////////////////////

/// FETCH API 

const apiKey = 'heBvPQrvx7ItmWpUzohNNc3Ac160MD8j';

const httpCall = fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// httpCall
//     .then( resp => resp.json())
//     .then( ({ data }) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src=url;

//         document.body.append(img);
//     })
//     .catch( console.war );

//////////////////////////////////////////

const getImage = async() => {


    try{
    const resp = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    const  { data } = await resp.json();

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src=url;

    document.body.append(img);
    }catch( error){
        console.error(error)
    }

}

getImage();

/////////////////////////////////////////////////////

///Ternariao 

const activo = true;

// const mensaje = (!activo) ? 'Hola' : 'error' ;

// console.log(mensaje)


const response =  (!activo) && 'Activo';

console.log(response);
