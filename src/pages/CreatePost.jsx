import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BlogContext } from "../context/BlogContext";

function CreatePost() {

  const navigate = useNavigate();

  const { blogs, setBlogs } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {

    const newBlog = {
      id: Date.now(),
      title,
      category,
      image,
      content,
      description: content.slice(0, 100),
      author: "Sanmitraa",
      readTime: "5 min read",
    };

    setBlogs([newBlog, ...blogs]);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Create Blog
        </h1>

        <div className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-xl outline-none"
          />

          <input
            type="text"
            placeholder="Enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Paste image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none"
          />

          <textarea
            rows="12"
            placeholder="Write your blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none resize-none"
          ></textarea>

          <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-5">

            <h2 className="text-2xl font-bold mb-3 text-blue-400">
              ✨ AI Summary
            </h2>

            <p className="text-gray-300">
              {content
                ? content.slice(0, 120) + "..."
                : "AI-generated summary will appear here..."}
            </p>

          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Publish Blog
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreatePost;