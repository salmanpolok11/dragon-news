import { Link, NavLink } from "react-router-dom";
import userL from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
 const { user ,  logOut  } = useContext(AuthContext)
 const handleLogOut = ()=> {
 logOut()
 .then( res => {
   console.log(res.user);
   swal("Good job!", "Your Logout Successfull", "success");
 })
 .catch( error => console.error(error))
    
 }



  const navLinks = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
   {
       user?  <li><NavLink to="/career">Career</NavLink></li> :
       <li><NavLink to="/login">Login</NavLink></li>
   }
   </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
        </ul>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
         {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
        <div className=" mx-2">
            {
               user ?   <img className="w-12 rounded-badge"  src={user.photoURL} alt="" /> :
               <img className="w-10 rounded-full"  src={userL} alt="" />
            }
        </div>
       <Link>
           {
               user ?  <button onClick={handleLogOut} className=" btn ">Logout</button> :
               <Link to='/login' className=" btn ">Login</Link>
           }
        </Link>
    </div>
  </div>
  );
};

export default Navbar;