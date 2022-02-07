import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import KcalPage from './pages/KcalPage';
import CreateDishPage from './pages/CreateDishPage';
import TopDishesPage from './pages/TopDishesPage';
import RegisterPage from './pages/RegisterPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/top" element={<TopDishesPage/>}/>
                <Route exact path="/create" element={<CreateDishPage/>}/>
                <Route exact path="/kcal" element={<KcalPage/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route exact path="/" element={<AuthPage/>}/>
            <Route exact path="/signup" element={<RegisterPage/>}/>
        </Routes>
    )
}