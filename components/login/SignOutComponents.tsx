"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="p-8 rounded-lg shadow-2xl bg-gradient-to-r from-red-900 via-black to-gray-700 text-center max-w-md w-full">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
          Sign Out
        </h1>
        {/* Description */}
        <p className="mb-4 text-gray-300 leading-relaxed">
          We are sad to see you go. Click the button below to sign out.
        </p>
        {/* Sign-Out Button */}
        <button
          onClick={handleSignOut}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Sign Out
        </button>
        {/* Display Message */}
        {message && (
          <div className="mt-6 px-4 py-2 rounded-lg bg-green-800 text-green-300 text-sm shadow-md">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
