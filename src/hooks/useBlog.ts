import { useEffect, useState } from "react";
import { IBlogCardProps } from "../components/BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";

export default function useBlog() {
    const [blog, setBlog] = useState<IBlogCardProps | null>(null);

    const blogId = useParams<{ id: string }>().id ?? "";

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);


    const fetchBlogById = async (id: string) => {
        try {
            // fetch blog by id from the backend
            const token = localStorage.getItem("token");
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log(response.data);

            setBlog(response.data.data);

            return response.data.data;
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {
        fetchBlogById(blogId);
    }, []);


    return {
        blog, loading, error
    }
}