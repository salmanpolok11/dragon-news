import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../assets/qZone1.png' 
import qzone2 from '../assets/qZone2.png' 
import qzone3 from '../assets/qZone3.png' 
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';

const RightSideNav = () => {
const { googleLogin }  = useContext(AuthContext)

 const handleGoogleLog = ( ) => {
  googleLogin()
  .then( res => {
    console.log(res.user);
   swal("Thank you!", "Your Login Successfull", "success");
 })
 .catch( error => console.error(error))

 }


  return (
    <div>
      <div  className=' space-y-3 mb-5'>
        <h1 className="  text-2xl font-semibold"> Login With</h1>
        <button onClick={handleGoogleLog} className="btn btn-outline   btn-success w-full">
           <FaGoogle/>
          Login With Google</button>
        <button className="btn btn-outline btn-warning w-full">
           <FaGithub/>
           Login With GitHub</button>
      </div>
       
      <div  className=' mb-5'>
        <h1 className="  text-2xl font-semibold mb-2">Find Us On</h1>
        <a href="" className=' flex items-center p-4 rounded-t-lg border  gap-2'> 
          <FaFacebook/>
            Facebook
          </a>
     
        <a href="" className=' flex items-center p-4  border-x  gap-2'> 
           <FaInstagram/>
            Instagram
          </a>
     
        <a href="" className=' flex items-center p-4 rounded-b-lg border  gap-2'> 
          <FaTwitter/>
          Twitter
          </a>
      </div>

      {/* QZone */}

      <div  className=' space-y-3 mb-10'>
        <h1 className="  text-2xl font-semibold"> QZone</h1>
        <img className=' mx-auto' src={qzone1} alt="" />
        <img className=' mx-auto' src={qzone2} alt="" />
        <img className=' mx-auto' src={qzone3} alt="" />

      </div>
    </div>
  );
};

export default RightSideNav;
