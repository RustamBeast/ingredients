import {createContext} from 'react'

function rofl() {}

const AuthContext = createContext({
    token: null,
    userId: null,
    login: rofl,
    logout: rofl,
    isAdmin: false,
    isValid: false
});

export default AuthContext;