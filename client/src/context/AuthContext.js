import {createContext} from 'react'

function rofl() {}

const AuthContext = createContext({
    token: null,
    userId: null,
    login: rofl,
    logout: rofl,
    isAuthenticated: false
});

export default AuthContext;