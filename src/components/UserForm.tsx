import { signupInput } from "@sagarpednekar/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import Button from "./Button";

interface ISignupProps {
  formType: "signin" | "signup";
}

export default function SignupForm({ formType }: ISignupProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitForm() {
    setIsSubmitting(true)
    try {
      console.log(formData);
      if (formType === "signup") {
        console.log("Login");
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
          ...formData,
        });
        console.log("response", response);
        alert("Sign Up Successful");
        debugger;
        navigate("/signin");
      } else {
        const payload = { email: formData.email, password: formData.password };
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
          ...payload,
        });
        console.log("response", response);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        console.log("Sign In");
      }
    } catch (error) {
      alert("Sign Up Failed");
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="px-10 text-center">
            <h1 className="text-2xl font-bold">
              {formType === "signin"
                ? "Login to Your Account"
                : "Create an account"}
            </h1>
            <p className="text-slate-400 text-sm">
              {formType === "signin" ? (
                <>
                  Don't have an account? {<Link to={"/signup"}>Sign Up</Link>}
                </>
              ) : (
                <>
                  Already have an account ? {<Link to={"/signin"}>Login</Link>}
                </>
              )}
            </p>
          </div>
          <div className="mt-4">
            {formType === "signup" ? (
              <div className="mt-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Name"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  name="name"
                />
              </div>
            ) : null}

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="m@example.com"
                name="email"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Password!!"
                required
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>

            <div className="mt-2">
              <Button
                variant="primary"
                loading={isSubmitting}
                onClickHandler={submitForm}
                label={formType === "signin" ? "Login" : "Sign Up"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
