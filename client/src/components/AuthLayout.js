import React from 'react';
import '../App.css';

const AuthLayout = ({children}) =>{
    return(
        <>
        <main className="centerAll">{children}</main>
        </>
    )
}

export default AuthLayout;