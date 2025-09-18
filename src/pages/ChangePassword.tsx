import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Validation rules
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    match: password === confirmPassword && password.length > 0,
  };

  const isValid =
    rules.length &&
    rules.uppercase &&
    rules.lowercase &&
    rules.number &&
    rules.match;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    // console.log("Password reset to:", password);

    // Replace with API call to update password
    navigate("/success");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-heading text-center mb-4">
            Reset Password
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please create a new password that meets the requirements below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* New Password */}
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Validation Rules */}
            <ul className="text-sm text-gray-600 space-y-1">
              <li className={rules.length ? "text-green-600" : "text-red-500"}>
                • At least 8 characters
              </li>
              <li
                className={rules.uppercase ? "text-green-600" : "text-red-500"}
              >
                • At least one uppercase letter
              </li>
              <li
                className={rules.lowercase ? "text-green-600" : "text-red-500"}
              >
                • At least one lowercase letter
              </li>
              <li className={rules.number ? "text-green-600" : "text-red-500"}>
                • At least one number
              </li>
              <li className={rules.match ? "text-green-600" : "text-red-500"}>
                • Passwords must match
              </li>

              <li className="text-black-600">
                • Must be different from your last 5 passwords
              </li>
              <li className="text-black-600">
                • Cannot include your First Name, Middle Name, Last Name or user
                ID
              </li>
              <li className="text-black-600">
                • May Include Special Characters such as @ % * $ # ! ^ etc.
              </li>
            </ul>

            {/* Continue Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-2 rounded-md transition ${
                isValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
