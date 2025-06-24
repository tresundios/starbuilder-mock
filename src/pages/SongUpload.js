import React, { useState } from "react";

const initialState = {
  songName: "",
  songwriterName: "",
  yearWritten: "",
  performerName: "",
  video: null,
};

const SongUpload = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [videoError, setVideoError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "video") {
      const file = files[0];
      if (file) {
        // Placeholder: In a real app, check video duration after upload
        if (file.size > 200 * 1024 * 1024) {
          setVideoError("Video file too large (max 200MB)");
        } else {
          setVideoError("");
        }
        setForm((prev) => ({ ...prev, video: file }));
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.songName) errs.songName = "Song name is required";
    if (!form.songwriterName) errs.songwriterName = "Songwriter name is required";
    if (!form.yearWritten) errs.yearWritten = "Year written is required";
    // Performer name is optional unless not songwriter
    // Video is optional for now
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0 && !videoError) {
      // Placeholder for upload logic (API call, payment, etc.)
      alert("Song uploaded! (Demo only)");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10">
      <h1 className="text-white text-3xl font-bold mb-6">Upload a Song</h1>
      <form onSubmit={handleSubmit} className="bg-[#222b36] rounded-lg p-8 w-full max-w-xl space-y-4">
        <div>
          <label className="block text-white">Song Name</label>
          <input name="songName" value={form.songName} onChange={handleChange} className="form-input w-full" />
          {errors.songName && <span className="text-red-400 text-xs">{errors.songName}</span>}
        </div>
        <div>
          <label className="block text-white">Songwriter Name</label>
          <input name="songwriterName" value={form.songwriterName} onChange={handleChange} className="form-input w-full" />
          {errors.songwriterName && <span className="text-red-400 text-xs">{errors.songwriterName}</span>}
        </div>
        <div>
          <label className="block text-white">Year Written</label>
          <input name="yearWritten" value={form.yearWritten} onChange={handleChange} className="form-input w-full" type="number" />
          {errors.yearWritten && <span className="text-red-400 text-xs">{errors.yearWritten}</span>}
        </div>
        <div>
          <label className="block text-white">Performer Name (if not songwriter)</label>
          <input name="performerName" value={form.performerName} onChange={handleChange} className="form-input w-full" />
        </div>
        <div>
          <label className="block text-white">Upload Video (max 6 min, ideally 2.5-4 min)</label>
          <input name="video" type="file" accept="video/*" onChange={handleChange} className="form-input w-full" />
          {videoError && <span className="text-red-400 text-xs">{videoError}</span>}
          <span className="text-xs text-gray-400">(Video duration check coming soon)</span>
        </div>
        <button type="submit" className="mt-6 w-full py-2 bg-[#0b80ee] text-white font-bold rounded-full hover:bg-[#0966b0] transition">Upload Song</button>
        <div className="text-xs text-gray-400 mt-2">Payment, review request, and advanced features coming soon.</div>
      </form>
    </div>
  );
};

export default SongUpload; 