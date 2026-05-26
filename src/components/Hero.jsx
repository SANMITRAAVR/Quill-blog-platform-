function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-5xl text-white">

          The Future of
          <span className="text-blue-500"> AI Blogging</span>

        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto leading-9">

          Create smarter blogs, interact with AI-powered tools,
          and experience the next generation of content creation
          using Quill.

        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-lg shadow-blue-500/30">

            Start Writing

          </button>

          <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-2xl text-lg transition text-white">

            Explore Blogs

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;