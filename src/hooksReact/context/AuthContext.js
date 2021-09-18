import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = (dataLogin) => {
    setAuth({
      uid: null,
      checking: false,
      logged: true,
      name: dataLogin.user,
      email: dataLogin.pass,
    });
    localStorage.setItem('dataUSer', JSON.stringify(dataLogin));
    return true;
  }

  const logout = () => {
    localStorage.removeItem('dataUSer');
    setAuth(initialState);
}

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
        { children }
    </AuthContext.Provider>
)
}