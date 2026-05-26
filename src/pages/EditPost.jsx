import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BlogContext } from "../context/BlogContext";

function EditPost() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { blogs, setBlogs } = useContext(BlogContext);

  const existingBlog = blogs.find(
    (item) => item.id == id
  );

  const [title, setTitle] = useState(existingBlog.title);

  const [category, setCategory] = useState(existingBlog.category);

  const [image, setImage] = useState(existingBlog.image);

  const [content, setContent] = useState(existingBlog.content);

  // Update Blog
  const handleUpdate = () => {

    const updatedBlogs = blogs.map((item) => {

      if (item.id == id) {

        return {
          ...item,
          title,
          category,
          image,
          content,
          description: content.slice(0, 100),
        };
      }

      return item;
    });

    setBlogs(updatedBlogs);

    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Edit Blog
        </h1>

        <div className="flex flex-col gap-6">

          {/* Title */}
          <input
            type="text"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 text-xl outline-none"
          />

          {/* Category */}
          <input
            type="text"
            placeholder="Enter category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none"
          />

          {/* Image */}
          <input
            type="text"
            placeholder="Paste image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none"
          />

          {/* Content */}
          <textarea
            rows="12"
            placeholder="Write your blog content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-2xl px-5 py-4 outline-none resize-none"
          ></textarea>

          {/* AI Summary */}
          <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-5">

            <h2 className="text-2xl font-bold mb-3 text-blue-400">
              ✨ AI Summary
            </h2>

            <p className="text-gray-300">
              {content.slice(0, 120)}...
            </p>

          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 py-4 rounded-2xl text-lg font-semibold transition"
          >
            Update Blog
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditPost;