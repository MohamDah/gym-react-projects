/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

interface UserType {
  name: string;
  email: string;
  age: number;
};

interface ContextType {
  user: UserType | undefined;
  login: () => void;
  logout: () => void;
}
export const UserContext = createContext<ContextType|null>(null);



export function UserContextProvider({ children }: { children: React.ReactNode; }) {
  const [user, setUser] = useState<UserType>();
  function login() {
    setUser({
      name: "John Doe",
      email: "example@gmail.com",
      age: 25
    })
  }

  function logout() {
    setUser(undefined)
  }

  const value = {
    user,
    login,
    logout
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}


export const useUserContext = () => useContext(UserContext)