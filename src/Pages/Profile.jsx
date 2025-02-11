
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-3xl mt-28 mx-auto p-6 bg-white shadow-lg rounded-lg text-center">


      <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.name}!</h2>
      <div className="mt-6">
        <img
          src={user.image || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
        />
        <p className="text-lg font-medium mt-3">Name: {user.name}</p>
        <p className="text-lg font-medium">Email: {user.email}</p>
      </div>

      <button
        onClick={() => navigate("/updateProfile")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white btn rounded-lg hover:bg-blue-700"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
