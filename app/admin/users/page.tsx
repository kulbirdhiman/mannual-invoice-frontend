"use client";
import React, { useState, useEffect } from 'react';
import AddUserModal from '@/components/users/AddUserModel'; // Import the AddUserModal

// Define user type
interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Simulating fetching users from an API or database
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
        // Add more users as needed
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddUser = (data: { name: string; email: string; status: string }) => {
    const newUser = {
      id: users.length + 1,
      ...data,
    };
    setUsers([...users, newUser]); // Add the new user to the list
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
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
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-700 transition">
              <td className="px-4 py-2 border border-gray-600">{user.name}</td>
              <td className="px-4 py-2 border border-gray-600">{user.email}</td>
              <td className="px-4 py-2 border border-gray-600">{user.status}</td>
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
