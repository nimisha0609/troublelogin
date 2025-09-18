import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    ssn: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    // if (
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.email ||
    //   !formData.dob ||
    //   !formData.ssn
    // ) {
    //   setError("All fields are required.");
    //   return;
    // }

    // if (formData.ssn.length !== 5) {
    //   setError("SSN must be exactly 5 digits.");
    //   return;
    // }

    setError("");

    // Mock API call
    console.log("Submitting Forgot Password data:", formData);

    // Navigate to next step (e.g., OTP page)
    navigate("/verify-identity");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            {/* Small Button on Left */}
            <button
              onClick={() => navigate("/recovery-choice")}
              className="text-3xl text-gray-600 px-3 py-1 rounded hover:text-black"
            >
              ←
            </button>

            {/* Title in the Center */}
            <h1 className="text-2xl font-heading text-center flex-grow">
              Forgot Password
            </h1>

            {/* Spacer to keep title centered */}
            <div className="w-16" />
          </div>
          <p className="text-sm text-gray-600 text-center mb-6">
            For your security, please provide your account information below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              name="ssn"
              placeholder="Last Five Digits of SSN"
              value={formData.ssn}
              onChange={handleChange}
              maxLength={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Continue
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Need help?
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
