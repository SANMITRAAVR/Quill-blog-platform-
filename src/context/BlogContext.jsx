import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

function BlogProvider({ children }) {

  const [blogs, setBlogs] = useState(() => {

    const savedBlogs = localStorage.getItem("quillBlogs");

    return savedBlogs
      ? JSON.parse(savedBlogs)
      : [
          {
            id: 1,
            title: "The Future of AI in Content Creation",
            category: "AI • Technology",
            image:
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            description:
              "Explore how artificial intelligence is transforming modern blogging.",
            content:
              "Artificial intelligence is transforming content creation through automation and smart recommendations.",
            author: "Sanmitraa",
            readTime: "5 min read",
            likes: 0,
            bookmarked: false,
            comments: [],
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "quillBlogs",
      JSON.stringify(blogs)
    );
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;