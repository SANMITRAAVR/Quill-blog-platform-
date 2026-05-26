function BlogCard({
  image,
  category,
  title,
  description,
  author,
  readTime,
}) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] hover:border-blue-500 transition duration-300 shadow-lg">

      {/* Image */}
      <img
        src={image}
        alt="blog"
        className="h-52 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <p className="text-blue-400 text-sm mb-3">
          {category}
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-5">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">

          <div>

            <p className="font-semibold text-white">
              {author}
            </p>

            <p className="text-sm text-gray-500">
              {readTime}
            </p>

          </div>

          <button className="text-blue-400 hover:text-blue-300 transition">
            Read More →
          </button>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;