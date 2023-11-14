import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
const {user,loding } = useContext(AuthContext)
 const location = useLocation()
if(loding){
   return <span className=" w-40 loading loading-spinner text-error"></span>
}

  if(user ){
     return children ;
  }

  return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;