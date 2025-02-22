import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./Firebase.init";
const Login = () => {
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
    
          // const newUser = {
          //   name: result.user.displayName,
          //   email: result.user.email,
          //   photoURL: result.user.photoURL,
          // };
    
          // Save Google user to database
          // const response = await fetch("https://assignment-server-side-eight.vercel.app/users", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify(newUser),
          // });
          // const data = await response.json();
    
          // if (data.insertedId) {
          //   Swal.fire({
          //     title: "Success!",
          //     text: "Google sign-In successful!",
          //     icon: "success",
          //     confirmButtonText: "OK",
          //   });
          //   navigate("/");
          // }
        // }
        //  catch (err) {
        //   console.error("Error during Google sign-in:", err);
        //   Swal.fire({
        //     title: "Error!",
        //     text: "An error occurred during Google sign-in. Please try again.",
        //     icon: "error",
        //     confirmButtonText: "OK",
        //   });
        // }
      };
    return (
        <div>
                <div className="form-control mt-6 flex ">
                <button className="btn btn-primary">Log-Out</button>
                <img
                  onClick={handleGoogle}
                  className="rounded-full cursor-pointer h-16 w-16 mx-auto"
                  src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                  alt="Google Sign-In"
                />
             
              </div>
        </div>
    );
};

export default Login;