import './App.css';
import {useRoutes} from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import {useHttp} from './hooks/http.hook';
import {useState, useEffect} from 'react';

function App() {
  const{request} = useHttp();
  const[isValid, setIsValid] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function checkIfValidToken(token){
      const response = await request("/api/auth/checkToken", "GET", null, {token: `Bearer ${token}`});
      response.token != undefined ? setIsValid(true) : setIsValid(false);
    } 
    checkIfValidToken(token)
  }, [token]);
  const routes = useRoutes(isValid);
  return (
    <div className="wrapper">
      <Router>
          {routes}
      </Router>
    </div>
  );
}

export default App;
