import React, {useState, createContext, useReducer} from 'react';
import authInitialState from './initialState/authInitialState';
import auth from './auth/reducers/auth';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  // const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [user, setUser] = useState({
    isLoggedIn: false,
    uid: null,
    name: null,
    email: null,
    photoUrl: null,
    token: null,
  });
  const [tabKey, setTabKey] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        tabKey,
        setTabKey,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
