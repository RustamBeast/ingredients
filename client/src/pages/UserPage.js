import React, {useContext} from 'react'
import Layout from '../components/Layout'
import {useHttp} from '../hooks/http.hook'
import AuthContext from '../context/AuthContext';

function UserPage() {

    const{request} = useHttp();
    const auth = useContext(AuthContext);

    async function deleteUser() {
        await request('api/auth/deleteUser', 'DELETE')
        auth.logout()
    }

    return (
        <Layout>
            <div>Email</div>
            <button onClick={deleteUser}>Удалить аккаунт</button>
        </Layout>
    );
}

export default UserPage;