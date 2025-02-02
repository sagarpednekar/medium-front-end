import useBlog from "../hooks/useBlog";
import { IBlogCardProps } from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";
interface IBlogProps {
    blog: IBlogCardProps | null;
    loading: boolean
}

export default function Blog({ blog, loading }: IBlogProps) {
    // const { blog, loading } = useBlog();
    if (loading) {
        return <div><BlogSkeleton shimmerType="blog" /></div>;
    }
    return (
        <div>
            <div className="text-3xl pb-2">
                {blog?.title} 13 SQL Statements for 90% of Your Data Science Tasks
            </div>
            <div className="text-gray-400 text-sm">Posted on 2nd December 2023</div>
            <div className="mt-3">
                {blog?.content} SQL is a powerful tool that can be used to perform a
                wide variety of data manipulation tasks, including filtering, sorting,
                grouping, and aggregating data. In this article, we will cover 13
                essential SQL statements that will help you perform 90% of your data
                science tasks. These statements are easy to understand and implement and
                will provide you with a solid foundation for working with SQL.
            </div>
        </div>
    );
}
