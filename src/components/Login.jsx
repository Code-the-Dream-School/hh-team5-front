import React, { useState, useEffect } from "react";
import api from "../util";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ cancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [login, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleLoginStatus = () => {
    setLogin(true);
  };

  const toggleRegisterStatus = () => {
    setLogin(false);
  };

  const handleRegister = async (userInfo) => {
    try {
      console.log(userInfo);

      const { username, password } = userInfo;
      const res = await api.post(
        "/register",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      setLogin(true);
      setErrorMessage("");
      console.log("Function completed: ", res.data);
    } catch (error) {
      console.error("Failed to complete function", error);
      setErrorMessage(error.response?.data?.message); // || login ? 'Failed to Login' : 'Failed to Register')
    }
  };

  const handleLogin = async (userInfo) => {
    try {
      console.log("Log in Data", userInfo);

      const { username, password } = userInfo;
      const res = await api.post(
        "/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      setErrorMessage("");
      console.log("Login successful:: ", res.data);
      if (res.data.accessToken) {
        navigate("/favorites");
      }
    } catch (error) {
      console.error("Failed to complete function", error);
      setErrorMessage(error.response?.data?.message); // || login ? 'Failed to Login' : 'Failed to Register')
    }
  };

  return (
    <div
      className={`w-5/6 md:w-4/12 h-auto  bg-transparent absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}
    >
      <div className={`bg-white pb-5 rounded-md`}>
        <div className="flex flex-row mt-1 justify-evenly">
          <button
            onClick={toggleLoginStatus}
            className={`w-full rounded-tl-md ${
              login ? "bg-orange-400" : "bg-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={toggleRegisterStatus}
            className={`w-full rounded-tr-md ${
              !login ? "bg-orange-400" : "bg-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        <form
          onSubmit={handleSubmit(login ? handleLogin : handleRegister)}
          autoComplete="off"
          className={`flex flex-col w-3/5 m-auto mt-8`}
        >
          <label>Username:</label>
          <input
            {...register("username", {
              required: "Username is required",
              validate: (value) => {
                if (value.length < 3) {
                  return "Username must be at least 3 characters";
                }
                return true;
              },
            })}
            className={`bg-white rounded-md border-[1px] border-black pl-2 my-[5px]`}
            type="text"
            placeholder="Username"
          />
          {errors.username && (
            <span className={`text-red-600`}>{errors.username.message}</span>
          )}
          <label>Password:</label>
          <input
            {...register("password", {
              required: "Password is required",
              validate: (value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                return true;
              },
            })}
            className={`bg-white rounded-md border-[1px] border-black pl-2 my-[5px]`}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className={`text-red-600`}>{errors.password.message}</span>
          )}
          <button
            disabled={isSubmitting}
            className={`mt-14 bg-green-400 p-2 rounded-md`}
            type="submit"
          >
            {login ? "Login" : "Register"}
          </button>
          <button onClick={cancel}>Cancel</button>
          {errorMessage && (
            <span className="mt-2 text-center text-red-600">
              {errorMessage}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
