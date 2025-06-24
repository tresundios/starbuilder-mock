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

const PlaySong = () => (
  <Layout
    header={<Header logo={<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path></svg>} title="Starbuilder Music" navLinks={navLinks} />}
    footer={<Footer links={footerLinks} copyright="© 2024 Starbuilder Music. All rights reserved." />}
  >
    <div className="px-40 flex flex-1 justify-center py-5 relative">
      <div className="absolute inset-0 rounded-xl bg-black/60 backdrop-blur-md z-0" style={{ filter: 'blur(2px)' }}></div>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 relative z-10 p-6 rounded-xl">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Play Song</h1>
        <p className="text-white text-base font-normal leading-normal mt-4">This is a placeholder for the Play Song page content.</p>
      </div>
    </div>
  </Layout>
);

export default PlaySong; 