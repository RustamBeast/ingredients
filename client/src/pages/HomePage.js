import React from 'react';
import {useState, useEffect} from 'react';
import Ingredient from '../components/Ingredient';
import Layout from '../components/Layout';

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
    const elements = [
        {id: 1, name: 'apple'},
        {id: 2, name: 'orange'},
        {id: 3, name: 'qiwi'},
        {id: 4, name: 'chicken'},
        {id: 5, name: 'beef'},
        {id: 6, name: 'pork'},
        {id: 7, name: 'mango'},
        {id: 8, name: 'cocos'},
        {id: 9, name: 'peanut'},
        {id: 10, name: 'lemon'},
        {id: 11, name: 'carrot'},
        {id: 12, name: 'tomato'},
        {id: 13, name: 'banana'}
    ];
    const[filteredElements, setFilteredElements] = useState(elements);
    const input = useInputValue('');
    useEffect(() => {
        setFilteredElements(elements.filter(element => { 
            return element.name.toLowerCase().includes(input.value().trim().toLowerCase());
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
                        return <Ingredient key={element.id} name={element.name}></Ingredient>;
                    })
                }
            </div>
        </Layout>
    );
}

export default HomePage;