"use client";

import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your API call
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-800">
        <img
          src="/login-side.jpg" // Replace with your image path
          alt="Login"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-black">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Email Input */}
            <div className="my-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
            
            {/* Password Input */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right mt-2">
              <a href="/forgot-password" className="text-blue-400 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>

          {/* Don't have an account? Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-400 hover:underline">
                Create one here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
