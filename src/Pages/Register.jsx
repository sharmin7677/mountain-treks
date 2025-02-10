import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

// create user
    createUser(email, password)
    .then (result =>{
        const user = result.user

          // Update user profile
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              console.log("User profile updated:", user);
            })
            .catch((err) => {
              console.log("Error updating profile:", err.message);
              setError("Failed to update profile");
            });
  
          console.log("User created:", user);
    })
    .catch(err =>{
        console.log('ERROR', err.message)
    })

    

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center p-4">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="form-control mt-6 text-center">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Already have an account? Please{" "}
            <Link className="text-blue-500" to={"/login"}>
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
