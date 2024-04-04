import { createContext, useState } from "react";
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("no user");
  return (
    <div>
      <authContext.Provider value={user}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
