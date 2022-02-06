import React from 'react';
import Header from '../components/Header'

const Layout =({children}) =>{
    return(
        <>
        <header>
            <Header />
        </header>
        <main className="container">{children}</main>
        </>
    )
}

export default Layout;