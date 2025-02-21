import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-5xl font-semibold mt-4">Not Found Page</p>
      <Link to="/" className="btn bg-red-500 text-white mt-6">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
