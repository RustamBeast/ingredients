import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import user from '../img/Vector.svg';

function Header() {
    return (
       <nav>
           <ul className='flexed-header'>
               <li><Link className='link' to='/'><h1 className='logo'>Ingredients.</h1></Link></li>
               <li><Link className='link' to='/top'>ПОПУЛЯРНЫЕ БЛЮДА</Link></li>
               <li><Link className='link' to='/create'>СОБРАТЬ БЛЮДО</Link></li>
               <li><Link className='link' to='/kcal'>КАЛОРИЙНОСТЬ ПРОДУКТОВ</Link></li>
               <li className='userIcon'><Link className='link' to='/kcal'><img src={user} alt="" /></Link></li>
           </ul>
       </nav>
    );
}

export default Header;