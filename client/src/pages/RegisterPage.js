import React from 'react';
import AuthLayout from '../components/AuthLayout';

function RegisterPage () {
    return (
        <AuthLayout>
            <div className='loginForm'>
                <h1>Регистрация</h1>
                <form>
                    <div>
                        <label>Электронная почта</label>
                        <input name='email' type="text"/>
                    </div>

                    <div>
                        <label>Пароль</label>
                        <input name='password' type="password"/>
                    </div>

                    <div>
                        <label>Повторите пароль</label>
                        <input name='password' type="password"/>
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