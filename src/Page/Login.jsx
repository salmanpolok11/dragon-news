
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";


const Login = () => {
const {userLogin } = useContext(AuthContext)
const navigate = useNavigate()


  const handleLogin = e => {
     e.preventDefault()
     console.log( e.currentTarget);
     const form = new FormData( e.currentTarget)
     const email =  form.get("email")
     const password =  form.get("password")
     console.log(email , password);

     userLogin( email , password)
     .then( res => {
      console.log(res.user);
     swal("Thank you!", "Your Login Successfull", "success");
      navigate( location.state ? location.state : '/')
   })
   .catch( error =>{
    swal("Error", "Your Login Faild", "error");
   })



  }

  return (
    <div className=" md:w-[700px] mx-auto min-h-screen">
   <Navbar/>

      <div className="hero-content">
        <div className=" flex-shrink-0 w-full   ">
          <form onSubmit={handleLogin}  className="card-body ">
            <h1 className=" font-bold text-4xl  underline mb-2">
              Please Login Now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover  text-xl font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className=" text-xl font-medium">
              You are New Here? Please{" "}
              <NavLink to="/register" className=" text-blue-600">
                Regitetion
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;