import {createContext} from 'react'

function rofl() {}

const AuthContext = createContext({
    token: null,
    userId: null,
    login: rofl,
    logout: rofl,
    isValid: false
});

export default AuthContext;