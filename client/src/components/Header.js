import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import user from '../img/Vector.svg';
import AuthContext from '../context/AuthContext';
import {useContext} from 'react';

function Header() {
    const auth = useContext(AuthContext);
    return (
       <nav>
           <ul className='flexed-header'>
               <li><Link className='link' to='/'><h1 className='logo'>Ingredients.</h1></Link></li>
               <li><Link className='link' to='/top'>ПОПУЛЯРНЫЕ БЛЮДА</Link></li>
               <li><Link className='link' to='/create'>СОБРАТЬ БЛЮДО</Link></li>
               <li><Link className='link' to='/kcal'>КАЛОРИЙНОСТЬ ПРОДУКТОВ</Link></li>
               <li><Link className='link' to='/create/ingredient'>ДОБАВИТЬ ИНГРЕДИЕНТ</Link></li>
               <li className='userIcon'><Link className='link' to={'/user'}><img src={user} alt="" /></Link></li>
               <li><button onClick={auth.logout} className='link'>Выйти</button></li>
           </ul>
       </nav>
    );
}

export default Header;