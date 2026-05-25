import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-6xl font-bold">
          Welcome to Quill 🚀
        </h1>
      </div>
    </div>
  );
}

export default Home;