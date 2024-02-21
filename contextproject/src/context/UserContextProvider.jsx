import React from "react";
import UserContext from "./UserContext";
// this is the provider method for the userContext we created earlier
// now imagine there are 10 components which you want to have access for this context
// we will wrap them using {children} prop value 

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
