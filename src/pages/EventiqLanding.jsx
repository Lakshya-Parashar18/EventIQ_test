import React from "react";
import heroImg from "../assets/Images/logo.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center px-4">
      {/* Header Section */}
      <header className="text-center mt-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-pink-500">EventiQ</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          The ultimate AI-powered event platform to organize, manage, and elevate your events like never before.
        </p>
      </header>

      {/* Hero Image */}
      <div className="mt-12">
        <img
          src={heroImg}
          alt="EventiQ Logo"
          className="w-60 md:w-72 rounded-xl shadow-lg border-4 border-pink-400"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-semibold text-white transition-all">
          🚀 Get Started
        </button>
        <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full font-semibold transition-all">
          💡 Learn More
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-20 max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">⚡ Automated Check-ins</h3>
          <p className="text-gray-400">Fast QR & facial recognition for smooth and secure entry.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">🤖 Smart Staff Coordination</h3>
          <p className="text-gray-400">AI-based task assignment keeps your event running like clockwork.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-2">📦 Live Inventory Tracking</h3>
          <p className="text-gray-400">Stay updated with real-time inventory alerts and status.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-10">💬 Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <p className="italic">
              “EventiQ made our college fest a breeze. We loved the smart features!”
            </p>
            <p className="text-right mt-4 font-semibold">- Aditi, Student Coordinator</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <p className="italic">
              “Flawless coordination and smooth check-ins! Highly recommended.”
            </p>
            <p className="text-right mt-4 font-semibold">- Karan, Event Head</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-sm text-gray-400">
        © 2025 EventiQ. Crafted with ❤️ for event professionals.
      </footer>
    </div>
  );
};

export default LandingPage;
