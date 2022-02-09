import React from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthContext from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {useAuth} from '../hooks/auth.hook';
import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

function RegisterPage () {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const[form, setForm] = useState({email: "", password: ""});
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const{request} = useHttp();
    const loginHandler = async (event) => {
        event.preventDefault();
        console.log(form.password);
        if (form.password === form.confirmPassword) {
            const data = await request("/api/auth/signUp", "POST", form);
            if (data.status)
                navigate('/login');
        }
    };
    return (
        <AuthLayout>
            <div className='loginForm'>
                <h1>Регистрация</h1>
                <form onSubmit={(event) => loginHandler(event)}>
                    <div>
                        <label>Электронная почта</label>
                        <input name='email' type="text" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Пароль</label>
                        <input name='password' type="password" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Повторите пароль</label>
                        <input name='confirmPassword' type="password" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <button type="submit">ОК</button>
                    </div>

                </form>
            </div>
        </AuthLayout>
    );
}

export default RegisterPage;