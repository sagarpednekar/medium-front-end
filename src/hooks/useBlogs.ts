import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface IBlog{
    title: string;
    content: string;
    name?: string;
    publishedDate?: string;
    id: string;
}
export default function useBlogs() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    async function fetchBlogs() {
        // fetch blogs from the backend
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/all`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        setBlogs(response.data.data);
    }
    useEffect(() => {
        fetchBlogs()
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { blogs, loading, error };
}