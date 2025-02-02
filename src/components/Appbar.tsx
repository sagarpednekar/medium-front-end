import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

export default function Appbar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <div className="text-2xl font-bold" onClick={() => {
                navigate("/")
            }} >Medium</div>

            <div className="flex">
                <div>
                    {location.pathname !== "/create-blog-post" ?
                        <button
                            type="button"
                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => {
                                navigate("/create-blog-post")

                            }}
                        >
                            Add Blog
                        </button> : null
                    }

                </div>
                <Avatar username="Sagar Pednekar" />
            </div>
        </div>
    );
}
