import React from 'react';
import {useState, useEffect, useContext} from 'react';
import Ingredient from '../components/Ingredient';
import Layout from '../components/Layout';
import { useHttp } from '../hooks/http.hook';
import AuthContext from '../context/AuthContext';

function useInputValue(defaultValue='') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        value: () => value,
        clear: () => setValue('')
    }
}

function HomePage() {
    const {request} = useHttp();
    const auth = useContext(AuthContext);
    const[elements, setElements] = useState([]);
    useEffect(() => {
        getIngredientElements();
    }, []);
    async function getIngredientElements() {
        const data = await request("/api/foodsearch/ingList", "GET", null, {token: `Bearer ${auth.token}`, id: auth.userId});
        setElements(data);
        setFilteredElements(data);
        console.log(data);
    }
    const[filteredElements, setFilteredElements] = useState(elements);
    const input = useInputValue('');
    useEffect(() => {
        setFilteredElements(elements.filter(element => { 
            return element.name_ru.toLowerCase().includes(input.value().trim().toLowerCase());
        }));
    }, [input.value()]);
    return (
        <Layout>
           <h2>Выберите продукты, которые вы хотите использовать</h2>
           <h3>Поиск ингредиентов</h3>
           <form>
                <input {...input.bind} type="text" />
            </form>
            <div className='list_of_ingredients'>
                {filteredElements.length === 0 ? <h4>Ничего нет :(</h4> :
                    filteredElements.map((element) => {
                        return <Ingredient key={element._id} name={element.name_ru}></Ingredient>;
                    })
                }
            </div>
        </Layout>
    );
}

export default HomePage;