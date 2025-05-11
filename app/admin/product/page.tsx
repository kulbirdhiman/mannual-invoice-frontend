"use client";
import React, { useState } from "react";
import InvoiceItemModal from "@/components/layout/admin/ProductAdd";

interface InvoiceItem {
  name: string;
  description: string;
  quantity: number;
  rate: number;
  total: number;
  createdBy: string;
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<InvoiceItem[]>([]);

  const handleCreate = (data: InvoiceItem) => {
    setItems((prev) => [...prev, data]);
    console.log("Invoice created", data);
  };

  return (
    <div className="p-10">
      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Add Invoice Item
      </button>

      {/* Modal */}
      <InvoiceItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreate}
      />

      {/* Table of items */}
      {items.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded shadow">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Rate (₹)</th>
                <th className="px-4 py-2 border-b">Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="text-sm text-gray-800">
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.description}</td>
                  <td className="px-4 py-2 border-b">{item.quantity}</td>
                  <td className="px-4 py-2 border-b">₹{item.rate}</td>
                  <td className="px-4 py-2 border-b font-medium">₹{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No invoice items added yet.</p>
      )}
    </div>
  );
};

export default Page;
