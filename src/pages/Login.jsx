import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {

    const response = login(email, password);

    if (!response.success) {
      setError(response.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-5">

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/40 border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black/40 border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;