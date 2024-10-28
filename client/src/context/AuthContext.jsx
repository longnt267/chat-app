import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children, initialState }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <AuthContext.Provider value={{ user, registerInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
