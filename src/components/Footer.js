import React from "react";

const Footer = ({ links, copyright, socialIcons }) => (
  <footer className="flex justify-center relative" style={{ zIndex: 10 }}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-t-xl" style={{ filter: 'blur(1px)' }}></div>
    <div className="flex max-w-[960px] flex-1 flex-col relative z-10 p-6 rounded-t-xl">
      <div className="flex flex-col gap-6 px-5 py-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links && links.map((link, idx) => (
            <a key={idx} className="text-white text-base font-normal leading-normal min-w-40" href={link.href}>{link.label}</a>
          ))}
        </div>
        {socialIcons && <div className="flex justify-center gap-4">{socialIcons}</div>}
        <p className="text-white text-base font-normal leading-normal">{copyright}</p>
      </div>
    </div>
  </footer>
);

export default Footer; 