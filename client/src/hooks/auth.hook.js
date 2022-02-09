import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
    //const{request} = useHttp();
    const[isValid, setIsValid] = useState(false);
    const[token, setToken] = useState(null);
    const[userId, setUserId] = useState(null);

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem("userData", JSON.stringify({userId: id, token: jwtToken}));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);

        localStorage.removeItem("userData");
    }, []);

    /*useEffect((token) => {
    async function checkIfValidToken(token){
        const response = await request("/api/auth/checkToken", "GET", null, {token: `Bearer ${token}`});
        console.log('aa');
        response.token ? setIsValid(true) : setIsValid(false);
    } 
    checkIfValidToken(token)
    }, [auth.token]);*/

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data && data.token) {
            login(data.token, data.userId);
        }
    }, [login]);

    return {login, logout, token, userId};
}