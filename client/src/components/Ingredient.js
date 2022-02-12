import React, {useState, useMemo} from 'react';
import '../App.css';

function Ingredient({name, kcal}) {
    const [hover, setHover] = useState(false);

    const classHandler = useMemo(() => {
        return hover ? 'display' : 'hide'
    },[hover])
    
    return (
       <button type='button' className='ingredient' onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
           <div className={`${classHandler}`}>
                <span>{name}<br/>{kcal} ккал</span>
           </div>
       </button>
    );
}

export default Ingredient;