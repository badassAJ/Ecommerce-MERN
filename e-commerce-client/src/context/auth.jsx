import { useState, useEffect, useContext, createContext } from "react";

// Create the Auth context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(()=>{
    const data = localStorage.getItem('auth');
    if(data){
        const parseData = JSON.parse(data);
        setAuth(
            {
                ...auth,
                user: parseData.user,
                token:parseData.token
            }
        )
    }
  },[]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth context
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
