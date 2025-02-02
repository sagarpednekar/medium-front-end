import axios from "axios";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function AddBlogForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const titleRef = useRef<HTMLInputElement>(null);
    const postRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    const publishPost = async () => {
        try {
            setIsSubmitting(true);
            const payload = {
                title: titleRef.current?.value,
                content: postRef.current?.value,
                published: true,
            };
            const token = localStorage.getItem("token");

            await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                { ...payload },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            navigate("/");
        } catch (error) {
            console.error("error while creating post", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="flex justify-center mt-4">
            <div className="max-w-screen-sm w-full">
                <div className="mb-4">
                    <label
                        htmlFor="large-input"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="large-input"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Enter Blog Title!!"
                        ref={titleRef}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                        ref={postRef}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={publishPost}
                    disabled={isSubmitting}
                >
                    {isSubmitting ?
                        <Spinner /> : null}
                    Publish post
                </button>
            </div>
        </div>
    );
}
