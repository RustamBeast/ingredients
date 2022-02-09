import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import KcalPage from './pages/KcalPage';
import CreateDishPage from './pages/CreateDishPage';
import TopDishesPage from './pages/TopDishesPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import CreateIngredientPage from './pages/CreateIngredientPage';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/top" element={<TopDishesPage/>}/>
                <Route exact path="/create" element={<CreateDishPage/>}/>
                <Route exact path="/kcal" element={<KcalPage/>}/>
                <Route exact path='/login' element={<Navigate to="/" />}/>
                <Route exact path='/user/:id' element={<UserPage />}/>
                <Route exact path='/create/ingredient' element={<CreateIngredientPage/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route exact path="/" element={<AuthPage/>}/>
            <Route exact path="/login" element={<AuthPage/>} />
            <Route exact path="/signup" element={<RegisterPage/>}/>
            <Route path="*" element={<AuthPage />}/>
        </Routes>
    )
}