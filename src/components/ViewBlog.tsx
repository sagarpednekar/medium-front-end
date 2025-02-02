import Appbar from "./Appbar";
import Blog from "./Blog";
import Avatar from "./Avatar";
import useBlog from "../hooks/useBlog";

export default function ViewBlog() {
  const { blog, loading } = useBlog();

  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 gap-5 w-full mt-4 p-4">
        <div className="col-span-8 ">
          <Blog blog={blog} loading={loading} />
        </div>
        <div className="col-span-4 ">
          <div className="flex flex-col items-start">
            <Avatar username="Sagar" />
            <div className="font-bold mt-2">Author Name</div>
            <div className="mt-3">
              Data Scientist & AI Researcher | Subscribe to my Newsletter: URL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
