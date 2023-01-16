import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        toast.success("Sign Up Successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email)
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.error(error);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 card p-10 shadow-xl">
        <h2 className="text-xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <span className="text-red-500 font-bold">
                This name field is required
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email Address must be added.",
              })}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500 font-bold">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                /* pattern: {
                  value: /(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~])/,
                  message: "Password must be strong",
                }, */
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs mt-4"
            value={"Sign Up"}
          />
          {signUpError && (
            <p className="text-red-500 font-medium">{signUpError}</p>
          )}
        </form>
        <p>
          Already have account{" "}
          <Link className="text-primary font-medium" to={"/login"}>
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full max-w-xs">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
