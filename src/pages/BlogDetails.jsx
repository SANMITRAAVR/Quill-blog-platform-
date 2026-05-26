import { useContext, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import { BlogContext } from "../context/BlogContext";

function BlogDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { blogs, setBlogs } = useContext(BlogContext);

  const blog = blogs.find((item) => item.id == id);

  const [comment, setComment] = useState("");

  const [toxicWarning, setToxicWarning] = useState("");

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Blog Not Found
        </h1>
      </div>
    );
  }

  // Toxic Words
  const toxicWords = [
    "hate",
    "idiot",
    "stupid",
    "dumb",
    "ugly",
  ];

  // Add Comment
  const handleComment = () => {

    if (!comment.trim()) return;

    const lowerComment = comment.toLowerCase();

    const isToxic = toxicWords.some((word) =>
      lowerComment.includes(word)
    );

    if (isToxic) {

      setToxicWarning(
        "⚠️ Toxic language detected. Please be respectful."
      );

      return;
    }

    setToxicWarning("");

    const updatedBlogs = blogs.map((item) => {

      if (item.id == id) {

        return {
          ...item,
          comments: [
            ...(item.comments || []),
            {
              id: Date.now(),
              text: comment,
              user: "Sanmitraa",
            },
          ],
        };
      }

      return item;
    });

    setBlogs(updatedBlogs);

    setComment("");
  };

  // Like Blog
  const handleLike = () => {

    const updatedBlogs = blogs.map((item) => {

      if (item.id == id) {

        return {
          ...item,
          likes: (item.likes || 0) + 1,
        };
      }

      return item;
    });

    setBlogs(updatedBlogs);
  };

  // Bookmark Blog
  const handleBookmark = () => {

    const updatedBlogs = blogs.map((item) => {

      if (item.id == id) {

        return {
          ...item,
          bookmarked: !item.bookmarked,
        };
      }

      return item;
    });

    setBlogs(updatedBlogs);
  };

  // Delete Blog
  const handleDelete = () => {

    const updatedBlogs = blogs.filter(
      (item) => item.id != id
    );

    setBlogs(updatedBlogs);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-3xl mb-10"
        />

        {/* Category */}
        <p className="text-blue-500 text-sm mb-3">
          {blog.category}
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          {blog.title}
        </h1>

        {/* Author + Buttons */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-5">

          {/* Author */}
          <div className="flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/100"
              alt="author"
              className="w-14 h-14 rounded-full"
            />

            <div>

              <p className="font-semibold text-lg">
                {blog.author}
              </p>

              <p className="text-gray-500">
                Published • {blog.readTime}
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            {/* Like */}
            <button
              onClick={handleLike}
              className="bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-xl font-semibold transition"
            >
              ❤️ {blog.likes || 0}
            </button>

            {/* Bookmark */}
            <button
              onClick={handleBookmark}
              className={`px-5 py-3 rounded-xl font-semibold transition ${
                blog.bookmarked
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {blog.bookmarked
                ? "Bookmarked"
                : "Bookmark"}
            </button>

            {/* Edit */}
            <Link
              to={`/edit/${blog.id}`}
              className="bg-yellow-500 hover:bg-yellow-600 px-5 py-3 rounded-xl font-semibold transition"
            >
              Edit
            </Link>

            {/* Delete */}
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition"
            >
              Delete
            </button>

          </div>

        </div>

        {/* AI Summary */}
        <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-6 mb-10">

          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            ✨ AI Summary
          </h2>

          <p className="text-gray-300 leading-8">
            {blog.content.slice(0, 150)}...
          </p>

        </div>

        {/* Blog Content */}
        <div className="text-gray-300 leading-9 text-lg space-y-6">

          <p>
            {blog.content}
          </p>

        </div>

        {/* Comments */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-8">
            Comments
          </h2>

          {/* Comment Input */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 mb-8">

            <textarea
              rows="4"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none resize-none"
            ></textarea>

            {/* Toxic Warning */}
            {toxicWarning && (

              <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-xl mt-4">

                {toxicWarning}

              </div>

            )}

            <button
              onClick={handleComment}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl mt-4 font-semibold"
            >
              Post Comment
            </button>

          </div>

          {/* Display Comments */}
          <div className="space-y-5">

            {(blog.comments || []).map((item) => (

              <div
                key={item.id}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
              >

                <div className="flex items-center gap-4 mb-4">

                  <img
                    src="https://i.pravatar.cc/101"
                    alt="user"
                    className="w-12 h-12 rounded-full"
                  />

                  <div>

                    <p className="font-semibold">
                      {item.user}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Just now
                    </p>

                  </div>

                </div>

                <p className="text-gray-300">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default BlogDetails;