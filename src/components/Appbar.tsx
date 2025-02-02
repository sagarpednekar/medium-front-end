import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Appbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useAuth()

    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <div className="text-2xl font-bold" onClick={() => {
                navigate("/")
            }} >Medium</div>

            <div className="flex items-center">
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
                <div>
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
                        onClick={() => {
                            if (isAuthenticated) {
                                localStorage.removeItem("token")
                            }
                            navigate("/signin")
                        }}
                    >
                        {isAuthenticated ? "Sign Out" : "Login"}
                    </button>

                </div>

            </div>
        </div>
    );
}
