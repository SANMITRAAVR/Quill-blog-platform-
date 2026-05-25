import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import BlogCard from "../components/BlogCard";

import { BlogContext } from "../context/BlogContext";

function Home() {

  const { blogs } = useContext(BlogContext);

  const [search, setSearch] = useState("");

  // Filter Blogs
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition">

      <Navbar />

      <Hero />

      <Features />

      {/* Search Section */}
      <section className="px-10 mb-16">

        <div className="max-w-2xl mx-auto">

          <input
            type="text"
            placeholder="Search blogs by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl px-6 py-4 outline-none text-lg"
          />

        </div>

      </section>

      {/* Trending Blogs */}
      <section className="px-10 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl font-bold">
            Trending Blogs
          </h1>

          <button className="text-blue-500 hover:text-blue-400">
            View All
          </button>

        </div>

        {/* No Blogs */}
        {filteredBlogs.length === 0 && (

          <div className="text-center text-gray-500 text-2xl py-20">

            No blogs found 😔

          </div>

        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {filteredBlogs.map((blog) => (

            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
            >

              <BlogCard
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                readTime={blog.readTime}
              />

            </Link>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;