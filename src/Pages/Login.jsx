import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // signIn with email and password
    signInUser(email, password)
      .then(() => {
        // alert
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state?.from);
      })
      .catch((err) => {
        setError("Invalid-credintial", err.message);
      });
  };

  // Google login
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    signInGoogle()
      .then((result) => {
      
        // alert
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <Helmet>
        <title>Login | Everhike</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center p-4">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6 text-center">
                <button className="btn bg-red-500 text-white">Login</button>
              </div>
              <div className="divider">OR</div>
              <div className="text-center">
                <button onClick={handleGoogleLogIn} className="text-lg btn">
                  <FcGoogle /> Login with Google
                </button>
              </div>
            </form>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <p className="text-center mb-4">
              New user?{" "}
              <Link to={"/register"} className="text-blue-500">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
