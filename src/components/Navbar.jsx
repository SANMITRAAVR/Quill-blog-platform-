function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

      <h1 className="text-3xl font-bold text-blue-500">
        Quill
      </h1>

      <div className="flex gap-6 text-gray-300">
        <button className="hover:text-white">Home</button>
        <button className="hover:text-white">Blogs</button>
        <button className="hover:text-white">Login</button>
      </div>

    </nav>
  );
}

export default Navbar;