import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SongUpload from "./pages/SongUpload";
import Admin from "./pages/Admin";
import Rewards from "./pages/Rewards";
import AdminReviews from "./pages/AdminReviews";
import AdminRewards from "./pages/AdminRewards";
// Placeholder imports for future pages
// import Admin from "./pages/Admin";
// import Rewards from "./pages/Rewards";
// import Reviews from "./pages/Reviews";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/register" },
  { label: "Login", href: "/login" },
  { label: "Song Upload", href: "/song-upload" },
  { label: "Admin", href: "/admin" },
  { label: "Rewards", href: "/rewards" },
];

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

function App() {
  return (
    <Router>
      <Layout
        header={<Header logo={<img src="/logo.png" alt="Starbuilder Logo" className="w-[120px] h-full object-contain" />} title="Starbuilder Music" navLinks={navLinks.map(l => ({...l, href: l.href}))} />}
        footer={<Footer links={footerLinks} copyright="© 2024 Starbuilder Music. All rights reserved." />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/song-upload" element={<SongUpload />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          <Route path="/admin/rewards" element={<AdminRewards />} />
          <Route path="/rewards" element={<Rewards />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/rewards" element={<Rewards />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 