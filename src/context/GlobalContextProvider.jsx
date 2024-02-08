import {useState} from 'react';
import GlobalContext from './globalContext';

const GlobalContextProvider = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <GlobalContext.Provider value={{loggedInUser, setLoggedInUser}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
