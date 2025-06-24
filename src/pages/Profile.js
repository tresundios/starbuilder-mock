import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "My Music", href: "#" },
  { label: "My Profile", href: "#" },
];

const footerLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const Profile = () => (
  <Layout
    header={<Header logo={<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path></svg>} title="Starbuilder" navLinks={navLinks} />}
    footer={<Footer links={footerLinks} copyright="© 2024 Starbuilder Music. All rights reserved." />}
  >
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Profile</h1>
        <p className="text-white text-base font-normal leading-normal mt-4">This is a placeholder for the Profile page content.</p>
      </div>
    </div>
  </Layout>
);

export default Profile; 