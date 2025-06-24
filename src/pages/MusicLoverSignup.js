import React from "react";
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

const MusicLoverSignup = () => (
  <Layout
    header={<Header logo={<img src="/starbuilder-white-logo.png" alt="Starbuilder Logo" className="w-[120px] h-full object-contain" />} title="Starbuilder Music" navLinks={navLinks} />}
    footer={<Footer links={footerLinks} copyright="© 2024 Starbuilder Music. All rights reserved." />}
  >
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Music Lover Signup</h1>
        <p className="text-white text-base font-normal leading-normal mt-4">This is a placeholder for the Music Lover Signup page content.</p>
      </div>
    </div>
  </Layout>
);

export default MusicLoverSignup; 