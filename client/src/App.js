import './App.css';
import {useRoutes} from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import {useHttp} from './hooks/http.hook';
import {useState, useEffect, useContext} from 'react';
import AuthContext from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';

function App() {
  const {token, login, logout, userId,isValid} = useAuth();
  const auth = useContext(AuthContext);
  const isAuthenticated = isValid
  const routes = useRoutes(isAuthenticated);
  return (
    <div className="wrapper">
      <AuthContext.Provider value={{
        token, login, logout, userId, isValid
      }}>
        <Router>
            {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
