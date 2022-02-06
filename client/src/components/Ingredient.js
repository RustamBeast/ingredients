import React from 'react';
import '../App.css';

function Ingredient({name}) {
    return (
       <button type='button' className='ingredient'>
           {name}
       </button>
    );
}

export default Ingredient;