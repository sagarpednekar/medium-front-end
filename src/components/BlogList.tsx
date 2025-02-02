import BlogCard from "./BlogCard";
import Appbar from "./Appbar";
import useBlogs from "../hooks/useBlogs";
import { useNavigate } from "react-router-dom";
import BlogSkeleton from "./BlogSkeleton";

export default function BlogList() {
    const { blogs, loading } = useBlogs();
    const navigate = useNavigate();

    return (
        <div>
            <Appbar />
            <div>
                {loading ? (
                    <div className="flex justify-center">
                        <div className="max-w-screen-sm w-full">
                            <BlogSkeleton shimmerType="bloglisting" />
                            <BlogSkeleton shimmerType="bloglisting" />
                            <BlogSkeleton shimmerType="bloglisting" />
                            <BlogSkeleton shimmerType="bloglisting" />
                            <BlogSkeleton shimmerType="bloglisting" />

                        </div>
                    </div>
                ) : null}
            </div>
            {blogs.map((blog, index) => (
                <div key={index} className="flex justify-center pb-2">
                    <div className="max-w-screen-lg w-full" onClick={
                        () => {
                            console.log('Blog clicked');
                            navigate(`/blog/${blog.id}`);
                        }
                    }>
                        <BlogCard
                            title={blog.title}
                            content={blog.content}
                            authorName={blog.name || 'Anonymous'}
                            publishedDate="31st Jan,2025"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
