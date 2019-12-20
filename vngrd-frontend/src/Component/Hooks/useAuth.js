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
  const login = async (e, username, password) => {
      e.preventDefault();
      var data = {username: username, password: password};
      const resp = await fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })

      if (resp.ok) {
          const json = await resp.json();
          console.log('good login');
          localStorage.setItem('token', json.token);
          localStorage.setItem('user', username);
          setUser(username);
      }
      else {
          console.log("bad login");
          setUser(false);
      }
  };



  const signup = async (e, email, username, password) => {
      e.preventDefault();
      var data = {email: email, username: username, password: password};
      const resp = await fetch('http://localhost:8000/api/users/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })

      if (resp.ok) {
          const json = await resp.json();
          console.log('good signup');
          localStorage.setItem('token', json.token);
          localStorage.setItem('user', username);
          setUser(username);
      }
      else {
          console.log('bad signup WEIRD');
          setUser(false); // probably unnecessary
      }
  };



  const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
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
      if (localStorage.getItem('token') != null) {
          setUser(localStorage.getItem('user'));
      }
      else {
          setUser(false);
      }
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
