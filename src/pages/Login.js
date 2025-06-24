import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const navLinks = [
  { label: "Premium", href: "#" },
  { label: "Support", href: "#" },
  { label: "Download", href: "#" },
];

const footerLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Placeholder for login logic (API call, etc.)
      alert("Login submitted! (Demo only)");
    }
  };

  return (
    <>
      <div className="px-40 flex flex-col lg:flex-row items-center lg:items-start justify-center py-10 gap-8 relative">
        {/* Left-aligned image */}
        <div className="flex-shrink-0 w-full max-w-xs lg:max-w-md mb-8 lg:mb-0 h-full lg:h-auto flex lg:block items-start relative">
          <span className="absolute inset-0 rounded-lg neon-gradient-overlay z-10"></span>
          <img src="/back.jpg" alt="Background Art" className="w-full h-full lg:h-[400px] rounded-lg shadow-lg object-cover object-top relative z-20" style={{ minWidth: 220, maxHeight: '100%', maxHeight: 400 }} />
        </div>
        {/* Login form content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative flex-1">
          <div className="absolute inset-0 rounded-xl bg-black/60 backdrop-blur-md z-0" style={{ filter: 'blur(2px)' }}></div>
          <div className="relative z-10 p-6 rounded-xl w-full">
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10">
              <h1 className="text-white text-3xl font-bold mb-6">Login to Starbuilder Music</h1>
              <form onSubmit={handleSubmit} className="bg-[#222b36] rounded-lg p-8 w-full max-w-md space-y-4">
                <div>
                  <label className="block text-white">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input w-full"
                    autoComplete="username"
                  />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                </div>
                <div>
                  <label className="block text-white">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-input w-full"
                    autoComplete="current-password"
                  />
                  {errors.password && <span className="text-red-400 text-xs">{errors.password}</span>}
                </div>
                <button type="submit" className="mt-4 w-full py-2 bg-[#0b80ee] text-white font-bold rounded-full hover:bg-[#0966b0] transition">Login</button>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span className="hover:underline cursor-pointer">Forgot password?</span>
                  <span className="hover:underline cursor-pointer">Register</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; 