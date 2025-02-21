import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Login | Everhike</title>
      </Helmet>
      <div className="max-w-3xl mt-28 mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.displayName}!
        </h2>
        <div className="mt-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
          />
          <p className="text-lg font-medium mt-3">Name: {user?.displayName}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
        </div>

        <button
          onClick={() => navigate("/updateProfile")}
          className="mt-6 px-6 py-2 btn bg-red-500 text-white"
        >
          Update Profile
        </button>
      </div>
    </>
  );
};

export default Profile;
