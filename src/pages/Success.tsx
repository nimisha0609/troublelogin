import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
        <p className="text-gray-700">
          Your password has been updated successfully!
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-xl text-blue-500 px-3 py-1 rounded hover:text-blue-800"
        >
          Click Here to Login
        </button>
      </div>
    </div>
  );
};

export default Success;
