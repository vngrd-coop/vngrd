import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();


// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {

  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;

}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {

  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const login = (e, username, password) => {
      e.preventDefault();
      var data = {username: username, password: password};
      console.log("before fetch");
      fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(json => localStorage.setItem('token', json.token));
      console.log("before setUser");
      setUser(username);
  };



  const signup = (email, username, password) => {
      var data = {email: email, username: username, password: password};
      fetch('http://localhost:8000/api/users/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(json => localStorage.setItem('token', json.token));
      setUser(username)
  };



  const logout = () => {
      localStorage.removeItem('token');
      setUser(false);
  };



  const sendPasswordResetEmail = email => {
      // API
  };



  const confirmPasswordReset = (code, password) => {
      // API
  };


  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {

    const unsubscribe = (user => {
        // if the user has a JWT, then set the userset
        if (localStorage.getItem('token')) {
            setUser(user);
        }
        else {
            setUser(false);
        }
    });


    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  

  // Return the user object and auth methods
  return {
    user,
    login,
    signup,
    logout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
