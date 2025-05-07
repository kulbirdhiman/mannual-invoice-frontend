"use client";
import Image from "next/image";
import { useState } from "react";
import {useCreateUserMutation} from "@/store/api/userApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "client",
  });
  const [createUser , {isLoading}] = useCreateUserMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await  createUser(formData).unwrap();
       toast.success("User registered successfully!");
      router.push("/");
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <Image
        height={800}
        width={800}
          src="/auth.png" // Update with your image path
          alt="Register"
          className="w-3/4 h-auto object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
              <option value="sales">Sales</option>
              <option value="accountant">Accountant</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              { isLoading ? "Loading.." :"Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
