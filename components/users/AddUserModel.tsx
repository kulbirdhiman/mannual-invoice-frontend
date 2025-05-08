"use client"
import React, { useState } from 'react';
import { useCreatecustomerMutation} from "@/store/api/custmourApi";
interface UserFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const AddUserModal: React.FC<{ onClose: () => void;  }> = ({ onClose }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
const [createcustome , {isLoading}] = useCreatecustomerMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
        await createcustome(formData).unwrap()
        onClose(); 
    } catch (error) {
        console.log(error)
    }
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50 backdrop-blur-lg">
      <div className="bg-gray-900 w-5/11 p-5 text-white  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New User</h2>
        <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full p-3 bg-gray-800 text-white border border-gray-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center mt-6 col-span-2">
            <button
              type="button"
              className="text-gray-400 hover:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
