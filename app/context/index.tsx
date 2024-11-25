import React, { createContext, useState } from "react";
import { useEffect } from "react";

interface User {
  name: string;
  role: string;
  is_active: boolean;
  token: string;
  user_id: string;
  id?: string;
  first_name: string;
  last_name: string;
}

interface MyContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const MyContext = createContext<MyContextProps>({
  user: null,
  setUser: () => {},
});

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextKey = "CultureLancerUser";
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(contextKey);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(contextKey, JSON.stringify(user));
  }, [user]);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { ContextProvider, MyContext };
