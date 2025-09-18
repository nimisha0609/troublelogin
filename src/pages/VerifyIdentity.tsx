import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { PhoneIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const VerifyIdentity = () => {
  const navigate = useNavigate();

  const handleChoice = (method: "sms" | "call") => {
    console.log("Chosen method:", method);
    // 🔹 Mock API call to send OTP
    navigate("/enter-otp"); // Navigate to OTP entry page
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            {/* Small Button on Left */}
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-3xl text-gray-600 px-3 py-1 rounded hover:text-black"
            >
              ←
            </button>

            {/* Title in the Center */}
            <h1 className="text-2xl font-heading text-center flex-grow">
              Verify Your Identity
            </h1>

            {/* Spacer to keep title centered */}
            <div className="w-16" />
          </div>

          <p className="text-sm text-gray-600 text-center mb-6">
            Choose your preferred contact method to receive your one-time
            passcode.
          </p>

          {/* Masked phone number */}
          <div className="text-center mb-6 text-gray-700">
            Deliver my code to <strong>(•••) •••-5555</strong>
          </div>

          {/* Option Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => handleChoice("sms")}
              className="flex items-center justify-center w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-blue-600 hover:text-white transition"
            >
              <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
              Text Me
            </button>

            <button
              onClick={() => handleChoice("call")}
              className="flex items-center justify-center w-full py-3 px-4 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-blue-600 hover:text-white transition"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Me
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyIdentity;
