import React from 'react';
import AuthLayout from '../components/AuthLayout';
import {useState} from 'react';
import { useHttp } from '../hooks/http.hook';

function AuthPage() {
    const[form, setForm] = useState({email: "", password: ""});
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const{request} = useHttp();
    const loginHandler = async (event) => {
        event.preventDefault();
        const data = await request("/api/auth/signIn", "POST", form);
        localStorage.setItem("token", data.token);
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

                    <div>
                        <button type="submit">Войти</button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default AuthPage;