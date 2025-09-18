import { useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);

  const handleLogin = () => {
    if (locked) return;

    // Mock API response
    const success = username === "demo" && password === "password123";

    if (success) {
      setError("");
      alert("Logged in successfully!");
    } else {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);

      if (nextAttempts >= 5) {
        setLocked(true);
        setError("Too many failed attempts. Your account is locked.");
      } else {
        setError("Invalid username or password.");
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        {/* Card */}
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Log In
          </h1>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="User ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={locked}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={locked}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Remember Me */}
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={locked}
                className="h-4 w-4"
              />
              <span>Remember User ID</span>
            </label>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={locked}
              className={`w-full py-2 rounded-md font-semibold transition 
                ${
                  locked
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {locked ? "Locked" : "Log In"}
            </button>

            {/* Links */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              <a
                href="/recovery-choice"
                className="text-sm text-blue-600 hover:underline"
              >
                Trouble logging in?
              </a>
              <a
                href="/register"
                className="text-sm text-blue-600 hover:underline"
              >
                Register for Online Banking
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
