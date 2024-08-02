import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import instance from "../api";
import { useAuth } from "../contexts/AuthContext";
import { User } from "../interfaces/User";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { loginSchema, registerSchema } from "../ultis/validation";

type Props = {
  isLogin?: boolean;
};

const AuthForm = ({ isLogin }: Props) => {
  const navigate = useNavigate();
  const { login: contextLogin } = useAuth();
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<User>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const onSubmit = async (data: User) => {
    try {
      if (isLogin) {
        const res = await instance.post(`/login`, data);
        contextLogin(res.data.accessToken, res.data.user);
      } else {
        await instance.post(`/register`, {
          email: data.email,
          password: data.password,
        });
        alert("Registration successful");
        navigate("/login");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.message || "An error occurred!");
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPass");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
          <Link to={"/"}>
            <IoIosCloseCircle className="text-xl ml-auto mb-4 cursor-pointer" aria-label="Close" />
          </Link>
          <h1
            className="text-center text-2xl font-bold mb-4"
            style={{ color: "#B88E2F" }}
          >
            {isLogin ? "Login" : "Register"}
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-yellow-700 text-sm font-bold mb-2"
                style={{ color: "#B88E2F" }}
              >
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-yellow-700 text-sm font-bold mb-2"
                style={{ color: "#B88E2F" }}
              >
                Password
              </label>
              <input
                type="password"
                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs italic">
                  {errors.password.message}
                </span>
              )}
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="confirmPass"
                  className="block text-yellow-700 text-sm font-bold mb-2"
                  style={{ color: "#B88E2F" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("confirmPass", {
                    required: "Confirm Password is required",
                    validate: value =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPass && (
                  <span className="text-red-500 text-xs italic">
                    {errors.confirmPass.message}
                  </span>
                )}
              </div>
            )}
            <div className="flex items-center justify-center mb-4">
              <button
                style={{ backgroundColor: "#F9F1E7" }}
                className="hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-2 md:space-y-0">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              type="button"
            >
              <i className="fab fa-facebook-f mr-2"></i>Facebook
            </button>
            <button
              className="bg-white border border-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
              type="button"
            >
              <i className="fab fa-google mr-2"></i>Google
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {isLogin ? (
              <Link to="/register" className="text-white-500 hover:underline">
                <button className="bg-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-lg">
                  Register
                </button>
              </Link>
            ) : (
              <Link to="/login" className="text-white-500 hover:underline">
                <button className="bg-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-lg">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
