import React ,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {value} ) =>{

    const [count, setCount] = useState( value )

    const increase = () =>{
        setCount( count + 1 );
        //setCount( (c) =>  c +1 );
    }

    const decrease = () =>{
        (count > 0) && setCount( count - 1 );
    }

    const reset = () =>{
        setCount( value );
    }

    return <>
             <h1>Counter App</h1>
             <h2>{ value }</h2>
                <button onClick={ increase } > + </button>
                <button onClick={ decrease } > - </button>
                <button onClick={ reset } > reset </button>
             <p> {count} </p>
           </>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

Counter 


export default CounterApp;

