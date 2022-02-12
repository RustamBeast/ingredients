import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
    //const{request} = useHttp();
    const[isValid, setIsValid] = useState(false);
    const[token, setToken] = useState(null);
    const[userId, setUserId] = useState(null);
    const[isAdmin, setIsAdmin] = useState(false);
    

    const login = useCallback((jwtToken, id, isAdmin) => {
        setToken(jwtToken);
        setUserId(id);
        setIsValid(true)
        setIsAdmin(isAdmin);

        localStorage.setItem("userData", JSON.stringify({userId: id, token: jwtToken, isAdmin: isAdmin}));
    }, []);

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setIsValid(false)
        setIsAdmin(false)
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
            login(data.token, data.userId, data.isAdmin);
        }
    }, [login]);

    return {login, logout, token, userId, isValid, isAdmin};
}