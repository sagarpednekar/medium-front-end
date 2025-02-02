import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

export default function Appbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div
        className="text-2xl font-bold"
        onClick={() => {
          navigate("/");
        }}
      >
        Medium
      </div>

      <div className="flex items-center">
        <div>
          {location.pathname !== "/create-blog-post" ? (
            <Button
              variant="green"
              onClickHandler={() => {
                navigate("/create-blog-post");
              }}
              label="Add Blog"
            />
          ) : null}
        </div>
        <div>
          <Button
            variant="light"
            onClickHandler={() => {
              if (isAuthenticated) {
                localStorage.removeItem("token");
              }
              navigate("/signin");
            }}
            label={isAuthenticated ? "Sign Out" : "Login"}
          />
        </div>
      </div>
    </div>
  );
}
