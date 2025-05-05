"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Professional Invoices in Seconds</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">Fast. Simple. Free to start. Empower your billing process today.</p>
        <div className="space-x-4">
          <Link
            href="/create-invoice"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg"
          >
            Create Invoice
          </Link>
          <Link
            href="/login"
            className="border border-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-gray-900 transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose InvoiceApp?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ["Customizable Templates", "Create invoices that match your brand."],
            ["Instant PDF Exports", "Download or email invoices with one click."],
            ["Client & Product Management", "Save time by reusing client and item info."],
            ["Tax & Discount Support", "Automatically calculate taxes and discounts."],
            ["Multi-Currency", "Bill clients across countries with ease."],
            ["Recurring Billing", "Set it and forget it with auto-billing."],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            ["Add Client & Items", "Fill in client and item details quickly."],
            ["Customize Invoice", "Add your logo, change colors, set due dates."],
            ["Send or Download", "Email directly or download as PDF."],
          ].map(([step, desc], i) => (
            <div key={step} className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
              <div className="text-blue-500 text-3xl font-bold mb-2">0{i + 1}</div>
              <h4 className="text-xl font-semibold mb-2">{step}</h4>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Invoicing in Under 1 Minute</h2>
        <p className="text-lg mb-6">No credit card needed. Just sign up and go!</p>
        <Link
          href="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
        >
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-6 px-4 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} InvoiceApp. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
