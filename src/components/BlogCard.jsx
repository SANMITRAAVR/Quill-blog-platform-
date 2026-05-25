function BlogCard({ image, category, title, description, author, readTime }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition hover:-translate-y-2 duration-300">

      <img
        src={image}
        alt="blog"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <p className="text-blue-500 text-sm mb-3">
          {category}
        </p>

        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-gray-400 mb-5">
          {description}
        </p>

        <div className="flex items-center justify-between">

          <div>
            <p className="font-semibold">
              {author}
            </p>

            <p className="text-sm text-gray-500">
              {readTime}
            </p>
          </div>

          <button className="text-blue-500 hover:text-blue-400">
            Read More →
          </button>

        </div>
      </div>
    </div>
  );
}

export default BlogCard;