import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const EnterOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next field
      if (value && index < 5) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);

    // 🔹 Mock API validation
    if (enteredOtp === "123456") {
      navigate("/change-password"); // example next page
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            {/* Small Button on Left */}
            <button
              onClick={() => navigate("/verify-identity")}
              className="text-3xl text-gray-600 px-3 py-1 rounded hover:text-black"
            >
              ←
            </button>

            {/* Title in the Center */}
            <h1 className="text-2xl font-heading text-center flex-grow">
              Enter Code
            </h1>

            {/* Spacer to keep title centered */}
            <div className="w-16" />
          </div>

          <p className="text-sm text-gray-600 text-center mb-6">
            Enter the 6-digit security code we sent you.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-between mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 text-center text-3xl font-bold border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none"
              />
            ))}
          </div>

          {/* Resend Link */}
          <p className="text-center text-sm text-blue-600 hover:underline cursor-pointer mb-6">
            Resend security code
          </p>

          {/* Continue Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default EnterOtp;
