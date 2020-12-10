import { createContext, useContext } from 'react';

const userContext = createContext();
const useUserData = () => useContext(userContext);

export { userContext, useUserData };
