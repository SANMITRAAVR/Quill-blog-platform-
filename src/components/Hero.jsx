function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-6">

      <h1 className="text-6xl font-extrabold leading-tight max-w-4xl">
        AI Powered <span className="text-blue-500">Blogging</span> Platform
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-2xl">
        Write smarter, discover better content, and interact with
        AI-powered blogging tools using Quill.
      </p>

      <div className="flex gap-4 mt-10">

        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">
          Start Writing
        </button>

        <button className="border border-gray-700 hover:border-white px-6 py-3 rounded-xl transition">
          Explore Blogs
        </button>

      </div>

    </section>
  );
}

export default Hero;