import  { useContext } from 'react'
import AuthContext from './Authprovider';


export const useAuth = () => {
  return useContext( AuthContext);
}
export default useAuth
