import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const RecoveryChoice = () => {
  const navigate = useNavigate();
  const [choice, setChoice] = useState<"userid" | "password" | null>(null);

  const handleContinue = () => {
    if (choice === "userid") {
      navigate("/forgot-userid");
    } else if (choice === "password") {
      navigate("/forgot-password");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Small Button on Left */}
            <button
              onClick={() => navigate("/")}
              className="text-3xl text-gray-600 px-3 py-1 rounded hover:text-black"
            >
              ←
            </button>

            {/* Title in the Center */}
            <h1 className="text-2xl font-heading text-center flex-grow">
              Trouble Logging In?
            </h1>

            {/* Spacer to keep title centered */}
            <div className="w-16" />
          </div>
          <p className="text-center text-gray-600 mb-6">
            Select an option to continue
          </p>

          {/* Radio group */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="recovery"
                value="userid"
                checked={choice === "userid"}
                onChange={() => setChoice("userid")}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>Forgot User ID</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="recovery"
                value="password"
                checked={choice === "password"}
                onChange={() => setChoice("password")}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span>Forgot Password</span>
            </label>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!choice}
            className={`w-full mt-6 py-2 rounded-md transition ${
              choice
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default RecoveryChoice;
