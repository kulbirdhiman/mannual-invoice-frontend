"use client";
import React, { useState, useEffect } from 'react';
import AddUserModal from '@/components/users/AddUserModel'; // Import the AddUserModal
import { useGetallcustmourQuery } from '@/store/api/custmourApi';
// Define user type
interface User {
  _id: number;
  name: string;
  email: string;
  phone: string;
}

const UserPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, error, isLoading } = useGetallcustmourQuery({});
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-semibold">User Management</h1>
      
      {/* Add User Button */}
      <button 
        onClick={handleOpenModal} 
        className="bg-blue-600 float-end text-white p-2 rounded mb-4 hover:bg-blue-700 transition"
      >
        Add User
      </button>
      
      {/* Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 border border-gray-600">Name</th>
            <th className="px-4 py-2 border border-gray-600">Email</th>
            <th className="px-4 py-2 border border-gray-600">Status</th>
            <th className="px-4 py-2 border border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user:User) => (
            <tr key={user._id} className="hover:bg-gray-700 transition">
              <td className="px-4 py-2 border border-gray-600">{user.name}</td>
              <td className="px-4 py-2 border border-gray-600">{user.email}</td>
              <td className="px-4 py-2 border border-gray-600">{user.phone}</td>
              <td className="px-4 py-2 border border-gray-600">
                <button className="bg-yellow-500 text-white p-2 rounded mr-2 hover:bg-yellow-600 transition">
                  Edit
                </button>
                <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show Modal */}
      {showModal && (
        <AddUserModal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default UserPage;
