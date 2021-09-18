import React, { createContext, useReducer, useState } from 'react'
import { AuthReducer } from '../reducer/AuthReducer';

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auhtState, authDispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider value={{ auhtState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}