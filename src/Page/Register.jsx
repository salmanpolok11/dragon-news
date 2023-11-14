import {  NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {

const { createUser} = useContext(AuthContext)



  const handleRegister = e => {
    e.preventDefault()
    console.log( e.currentTarget);
    const form = new FormData( e.currentTarget)
    const name = form.get('name')
    const photoURL = form.get('image')
    const email = form.get('email')
    const password = form.get('password')
    console.log( name , photoURL , email , password);
  
    createUser( email , password)
    .then( res => {
      updateProfile ( res.user, {
        displayName: name,
        photoURL :  photoURL
      })

      sendEmailVerification(res.user)
      .then( () =>  {
       return  swal("Good job!", "Your Create Accaount Successfull , Please Veryfied Your Email Address", "success");
      })
     })
     .catch( error =>{
      swal("Error", "Your Registetion Faild", "error");
     })
  

 }

  return (
    <div className=" md:w-[700px] mx-auto min-h-screen">
    <Navbar/>
 
       <div className="hero-content">
         <div className=" flex-shrink-0 w-full   ">
           <form onSubmit={handleRegister}  className="card-body ">
             <h1 className=" font-bold text-4xl  underline mb-2">
               Please Register Now!
             </h1>
             
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-xl font-medium">
                   Name
                 </span>
               </label>
               <input
                 type="text"
                 placeholder="Your Name"
                 name="name"
                 className="input input-bordered"
                 required
               />
             </div>

             <div className="form-control">
               <label className="label">
                 <span className="label-text text-xl font-medium">
                   Photo URL
                 </span>
               </label>
               <input
                 type="url"
                 placeholder="Enter your photo Link"
                 name="image"
                 className="input input-bordered"
                
               />
             </div>

             <div className="form-control">
               <label className="label">
                 <span className="label-text text-xl font-medium">
                   Email
                 </span>
               </label>
               <input
                 type="email"
                 placeholder="Email"
                 name="email"
                 className="input input-bordered"
                 required
               />
             </div>


             <div className="form-control">
               <label className="label">
                 <span className="label-text  text-xl font-medium">
                   Password
                 </span>
               </label>
               <input
                 type="password"
                 placeholder="Password"
                 name="password"
                 className="input input-bordered"
                 required
               />
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Login</button>
             </div>
             <p className=" text-xl font-medium">
             Alredy Have Account? Please{" "}
               <NavLink to="/login" className=" text-blue-600">
                 Login
               </NavLink>
             </p>
           </form>
         </div>
       </div>
     </div>
  );
};

export default Register;