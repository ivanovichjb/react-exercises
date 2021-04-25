// Functional Components before Stateless Functional Componenets
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
// Functional Components before Stateless Functional Componenets


const PrimerApp = ( {saludo , otra, subtitle} ) => {

    const saludos = {
        age : 2
    } ;

    const hola = "Hola mundo";

    console.log(saludo)

//console.log(saludos)

    return <div>
            {/* <pre> { JSON.stringify(saludos,null,3) } </pre> */}
            <h1>{ saludo }</h1>
            <p> { subtitle } </p>
           </div>
}

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    subtitle : "Soy un subtitle"
}

export default PrimerApp;

