import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ViewBlog from "./components/ViewBlog";
import AddBlogPost from "./components/AddBlogPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<ViewBlog />} />
          <Route path="create-blog-post" element={<AddBlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
