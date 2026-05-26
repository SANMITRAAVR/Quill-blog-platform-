import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import BlogDetails from "./pages/BlogDetails";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/create" element={<CreatePost />} />

      <Route path="/blog/:id" element={<BlogDetails />} />

      <Route path="/edit/:id" element={<EditPost />} />

    </Routes>
  );
}

export default App;