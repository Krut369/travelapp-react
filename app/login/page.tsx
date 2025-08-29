"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo credentials
    if (username === "user" && password === "pass") {
      setError("");
      router.push("/#hero-section");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-10">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="bold-32 text-center mb-2">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="btn_green rounded-full mt-2 w-full text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
} 