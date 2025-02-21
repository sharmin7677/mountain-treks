

import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, { displayName: name, photoURL: photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated Successfully!",
        timer: 2000,
        showConfirmButton: false,
      });

      // Redirect to profile after update
      navigate("/profile");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Everhike</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">
            Update Profile
          </h2>
          <form onSubmit={handleUpdate} className="flex flex-col">
            <label className="mb-2 font-semibold">Name</label>
            <input
              type="text"
              className="input input-bordered mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="mb-2 font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered mb-4"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />

            <button type="submit" className="btn bg-red-500 text-white">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
