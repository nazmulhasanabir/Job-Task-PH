import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../page/Firebase.init";
const Navbar = () => {
  const handleGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
        
    // try {
      const result = await signInWithPopup(auth, provider);
      if(result.user){
        Swal.fire({
                title: "Success!",
                text: "Google sign-In successful!",
                icon: "success",
                confirmButtonText: "OK",
              });
      }
      console.log("Google sign-in successful:", result.user);

      
  };
  return (
    <div>
      <div className="navbar bg-purple-400 text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Task-Nation</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>
              
            <li>
              <p onClick={handleGoogle}>Log-In</p>
            </li>
            <li>
              <a>Log-Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
