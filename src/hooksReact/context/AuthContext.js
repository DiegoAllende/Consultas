import React, { createContext, useReducer } from 'react'
import { DATAUSER } from '../../data/constantes/ui/constAuth';
import { AuthReducer } from '../reducer/AuthReducer';

export const AuthContext = createContext();

console.log("authContext");

let auxLogged = localStorage.getItem(DATAUSER) ? true : false;

const initialState = {
  uid: null,
  checking: true,
  logged: auxLogged,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  console.log("authProvaider");

  const [auhtState, authDispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ auhtState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}