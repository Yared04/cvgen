import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import supabase from "@/utils/supabaseClient";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [signupError, setSignupError] = useState("");
  const router = useRouter();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (email && password && confirmPassword && password === confirmPassword) {
      try {
        try {
          const response = await supabase.auth.signUp({ email, password });

          router.push("/login");
        } catch (error) {
          setSignupError("Error signing up");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-slate-50 h-screen flex justify-center">
      <div className="bg-white self-center shadow-md p-12 rounded-md">
        <p className="text-primary text-4xl font-extrabold mb-10 text-center">
          Sign Up
        </p>
        <div className="flex flex-col gap-4 place-items-center">
          <input
            className="bg-gray-100 h-12 rounded-md pl-3 focus:bg-white focus:outline-gray-200"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setSignupError("");
            }}
            onBlur={validateEmail}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}

          <input
            className="bg-gray-100 h-12 rounded-md pl-3 focus:bg-white focus:outline-gray-200"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
              setSignupError("");
            }}
            onBlur={validatePassword}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}

          <input
            className="bg-gray-100 h-12 rounded-md pl-3 focus:bg-white focus:outline-gray-200"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
              setSignupError("");
            }}
            onBlur={validateConfirmPassword}
          />
          {confirmPasswordError && (
            <p className="text-red-500">{confirmPasswordError}</p>
          )}

          {signupError && <p className="text-red-500">{signupError}</p>}

          <div onClick={handleSubmit}>
            <button className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
              Sign Up
            </button>
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <Link className="text-primary" href="login">
              Log In
            </Link>
          </p>

          {/* <Image
            width={100}
            height={10}
            src="/sign-in-with-google-icon-3.jpg"
            alt="google sign in"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
