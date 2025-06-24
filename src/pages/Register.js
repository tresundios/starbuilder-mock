import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const footerLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  yearBorn: "",
  monthRegistered: "",
  yearRegistered: "",
  city: "",
  region: "",
  country: "",
  email: "",
  bankDetails: "",
  subCategory: "musiclover",
  songs: [""],
  video: "",
  agree: false,
};

const Register = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSongChange = (idx, value) => {
    const newSongs = [...form.songs];
    newSongs[idx] = value;
    setForm((prev) => ({ ...prev, songs: newSongs }));
  };

  const addSong = () => setForm((prev) => ({ ...prev, songs: [...prev.songs, ""] }));
  const removeSong = (idx) => setForm((prev) => ({ ...prev, songs: prev.songs.filter((_, i) => i !== idx) }));

  const validate = () => {
    const errs = {};
    if (!form.firstName) errs.firstName = "Required";
    if (!form.lastName) errs.lastName = "Required";
    if (!form.gender) errs.gender = "Required";
    if (!form.yearBorn) errs.yearBorn = "Required";
    if (!form.monthRegistered) errs.monthRegistered = "Required";
    if (!form.yearRegistered) errs.yearRegistered = "Required";
    if (!form.city) errs.city = "Required";
    if (!form.region) errs.region = "Required";
    if (!form.country) errs.country = "Required";
    if (!form.email) errs.email = "Required";
    if (!form.bankDetails) errs.bankDetails = "Required";
    if (!form.agree) errs.agree = "You must agree to the terms";
    if (form.subCategory === "songwriter" && (!form.songs.length || form.songs.some((s) => !s))) {
      errs.songs = "Songwriters must upload at least one song";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Placeholder for submit logic (e.g., API call, Stripe integration)
      alert("Registration submitted! (Demo only)");
    }
  };

  return (
    <>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Register</h1>
          <p className="text-white text-base font-normal leading-normal mt-4">This is a placeholder for the Register page content.</p>
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10">
            <h1 className="text-white text-3xl font-bold mb-6">Register as a Starbuilder Member</h1>
            <form onSubmit={handleSubmit} className="bg-[#222b36] rounded-lg p-8 w-full max-w-xl space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white">First Name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} className="form-input w-full" />
                  {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName}</span>}
                </div>
                <div className="flex-1">
                  <label className="block text-white">Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} className="form-input w-full" />
                  {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName}</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white">Gender</label>
                  <select name="gender" value={form.gender} onChange={handleChange} className="form-select w-full">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="text-red-400 text-xs">{errors.gender}</span>}
                </div>
                <div className="flex-1">
                  <label className="block text-white">Year Born</label>
                  <input name="yearBorn" value={form.yearBorn} onChange={handleChange} className="form-input w-full" type="number" />
                  {errors.yearBorn && <span className="text-red-400 text-xs">{errors.yearBorn}</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white">Month Registered</label>
                  <input name="monthRegistered" value={form.monthRegistered} onChange={handleChange} className="form-input w-full" />
                  {errors.monthRegistered && <span className="text-red-400 text-xs">{errors.monthRegistered}</span>}
                </div>
                <div className="flex-1">
                  <label className="block text-white">Year Registered</label>
                  <input name="yearRegistered" value={form.yearRegistered} onChange={handleChange} className="form-input w-full" type="number" />
                  {errors.yearRegistered && <span className="text-red-400 text-xs">{errors.yearRegistered}</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white">Town/City</label>
                  <input name="city" value={form.city} onChange={handleChange} className="form-input w-full" />
                  {errors.city && <span className="text-red-400 text-xs">{errors.city}</span>}
                </div>
                <div className="flex-1">
                  <label className="block text-white">Region/County</label>
                  <input name="region" value={form.region} onChange={handleChange} className="form-input w-full" />
                  {errors.region && <span className="text-red-400 text-xs">{errors.region}</span>}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-white">Country of Residence</label>
                  <input name="country" value={form.country} onChange={handleChange} className="form-input w-full" />
                  {errors.country && <span className="text-red-400 text-xs">{errors.country}</span>}
                </div>
                <div className="flex-1">
                  <label className="block text-white">Email Address</label>
                  <input name="email" value={form.email} onChange={handleChange} className="form-input w-full" type="email" />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                </div>
              </div>
              <div>
                <label className="block text-white">Bank Details (for payment if invited to perform)</label>
                <input name="bankDetails" value={form.bankDetails} onChange={handleChange} className="form-input w-full" />
                {errors.bankDetails && <span className="text-red-400 text-xs">{errors.bankDetails}</span>}
              </div>
              <div>
                <label className="block text-white">Register as:</label>
                <div className="flex gap-4 mt-2">
                  <label className="text-white">
                    <input type="radio" name="subCategory" value="songwriter" checked={form.subCategory === "songwriter"} onChange={handleChange} /> Songwriter
                  </label>
                  <label className="text-white">
                    <input type="radio" name="subCategory" value="musiclover" checked={form.subCategory === "musiclover"} onChange={handleChange} /> Music Lover
                  </label>
                </div>
              </div>
              {form.subCategory === "songwriter" && (
                <div className="bg-[#1a222b] p-4 rounded-lg mt-4">
                  <label className="block text-white mb-2">Upload Song(s) <span className="text-xs">(at least one required)</span></label>
                  {form.songs.map((song, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        className="form-input flex-1"
                        placeholder={`Song Title #${idx + 1}`}
                        value={song}
                        onChange={e => handleSongChange(idx, e.target.value)}
                      />
                      {form.songs.length > 1 && (
                        <button type="button" className="text-red-400" onClick={() => removeSong(idx)}>-</button>
                      )}
                    </div>
                  ))}
                  <button type="button" className="text-blue-400 mt-2" onClick={addSong}>+ Add another song</button>
                  {errors.songs && <span className="text-red-400 text-xs block mt-2">{errors.songs}</span>}
                  <div className="mt-4">
                    <label className="block text-white">Upload Video (optional, max 6 min)</label>
                    <input type="file" name="video" accept="video/*" className="form-input w-full" disabled />
                    <span className="text-xs text-gray-400">(Video upload coming soon)</span>
                  </div>
                </div>
              )}
              <div className="flex items-center mt-4">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mr-2" />
                <span className="text-white text-sm">I agree to the terms and conditions (legal agreements will be editable in CMS)</span>
              </div>
              {errors.agree && <span className="text-red-400 text-xs block">{errors.agree}</span>}
              <button type="submit" className="mt-6 w-full py-2 bg-[#0b80ee] text-white font-bold rounded-full hover:bg-[#0966b0] transition">Register</button>
              <div className="text-xs text-gray-400 mt-2">Payment integration (Stripe) and further options coming soon.</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register; 