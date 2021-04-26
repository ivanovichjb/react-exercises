import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('')

    const handleValue = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        //console.log("ready")
        if(inputValue.trim().length > 2){
            setCategories( newCategories => [ ...newCategories, inputValue]);
            setinputValue('');
        }
    
    }

    return (
        <form onSubmit={ handleSubmit }>
            Add Category: <input type="text"
                                 value = {inputValue}
                                 onChange = { handleValue }
                                 />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired 
}