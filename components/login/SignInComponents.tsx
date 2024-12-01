"use client"; // important for session components

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [message, setMessage] = useState("");

  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);
      setMessage(`Signing in with ${provider === "google" ? "Google" : "GitHub"}...`);
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-800 to-gray-900 text-white">
      <div className="p-8 rounded-lg shadow-lg bg-gradient-to-r from-slate-900 via-black to-gray-800 border-4 border-transparent bg-clip-border hover:border-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-green-500 transition-all duration-300">
        <h1 className="text-2xl mb-6 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Sign In
        </h1>
        <div className="space-y-4">
          <button
            onClick={() => handleSignIn("github")}
            className="w-full bg-gradient-to-r from-black to-slate-700 hover:from-gray-800 hover:to-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 border border-transparent hover:border-blue-500"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="w-full bg-gradient-to-r from-slate-700 to-black hover:from-black hover:to-slate-900 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 border border-transparent hover:border-red-500"
          >
            Sign in with Google
          </button>
        </div>
        {message && (
          <div className="mt-6 px-4 py-2 rounded-lg bg-green-800 text-green-300 text-sm shadow-md">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
