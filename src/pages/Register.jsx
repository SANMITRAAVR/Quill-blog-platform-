function Register() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-gray-900 p-10 rounded-2xl w-[400px] border border-gray-800">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Register
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter username"
            className="bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Enter email"
            className="bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none"
          />

          <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold">
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}

export default Register;