import React from 'react';
import Layout from '../components/Layout';
import AuthContext from '../context/AuthContext';
import {useHttp} from '../hooks/http.hook';
import {useAuth} from '../hooks/auth.hook';
import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

function RegisterPage () {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const[form, setForm] = useState({name_en: "", name_ru: "", kcal: Number, type: ""});
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const{request} = useHttp();
    const createHandler = async (event) => {
        event.preventDefault();
        const data = await request("/api/admin/addIngredient", "POST", form, {token: `Bearer ${auth.token}`, id: auth.userId});
    };
    return (
        <Layout>
            <div className='createIngredientForm'>
                <h1>Регистрация</h1>
                <form onSubmit={(event) => createHandler(event)}>
                    <div>
                        <label>Название на английском</label>
                        <input name='name_en' type="text" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Название на русском</label>
                        <input name='name_ru' type="text" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Количество ккал</label>
                        <input name='kcal' type="number" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <label>Тип ингредиента</label>
                        <input name='type' type="text" onChange={(event) => changeHandler(event)}/>
                    </div>

                    <div>
                        <button type="submit">ОК</button>
                    </div>

                </form>
            </div>
        </Layout>
    );
}

export default RegisterPage;