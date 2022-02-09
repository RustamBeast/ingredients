import React from 'react';
import AuthLayout from '../components/AuthLayout';
import {useState, useContext} from 'react';
import { useHttp } from '../hooks/http.hook';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

function AuthPage() {
    const auth = useContext(AuthContext);
    const[form, setForm] = useState({email: "", password: ""});
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const{request} = useHttp();
    const loginHandler = async (event) => {
        event.preventDefault();
        const data = await request("/api/auth/signIn", "POST", form);
        auth.login(data.token, data.userId);  
        console.log(auth)
    };
    return (
        <AuthLayout>
            <div className='loginForm'>
                <h1>Логин</h1>
                <form onSubmit={event => loginHandler(event)}>
                    <div>
                        <label>Электронная почта</label>
                        <input name='email' type="text" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Пароль</label>
                        <input name='password' type="password" onChange={(event) => changeHandler(event)} />
                    </div>

                    <div className='buttonInForm'>
                        <button type="submit">Войти</button>
                        <span>Нет аккаунта?&nbsp; <Link className='link' to='/signup'>Зарегистрируйтесь</Link></span>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default AuthPage;