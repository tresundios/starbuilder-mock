import React, { useState } from "react";

// Add Pirata One font import to the document head if not already present
if (typeof document !== 'undefined' && !document.getElementById('pirataone-font')) {
  const link = document.createElement('link');
  link.id = 'pirataone-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Pirata+One&display=swap';
  document.head.appendChild(link);
}

const Header = ({ logo, title, navLinks, rightContent, transparent }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={
        `flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3 relative`
      }
      style={{ boxShadow: 'none', background: 'transparent', border: 'none' }}
    >
      <div className="flex items-center gap-4 text-white">
        <div>{logo || <img src="/logo.png" alt="Starbuilder Logo" className="w-[120px] h-full object-contain" />}</div>
        <div>
          <h2 className="text-white font-bold leading-tight" style={{ fontFamily: 'Pirata One, cursive', fontSize: '2.0rem', lineHeight: 1.1, letterSpacing: '0.08em' }}>{title}</h2>
          <div style={{ fontSize: '0.85rem', color: '#c9d1d9', fontWeight: 400, marginTop: 2, letterSpacing: '0.04em' }}>For Music Lovers</div>
        </div>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks && navLinks.map((link, idx) => (
            <a key={idx} className="text-white text-sm font-medium leading-normal" href={link.href}>{link.label}</a>
          ))}
        </div>
        {rightContent && <div>{rightContent}</div>}
      </div>
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 z-30"
        aria-label="Open navigation menu"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile nav menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-20 flex flex-col items-end md:hidden">
          <div className="w-2/3 max-w-xs bg-[#161b22] h-full shadow-lg p-6 flex flex-col gap-6">
            <button
              className="self-end mb-4"
              aria-label="Close navigation menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks && navLinks.map((link, idx) => (
              <a
                key={idx}
                className="text-white text-lg font-medium py-2 px-2 rounded hover:bg-[#222b36] transition"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {rightContent && <div className="mt-4">{rightContent}</div>}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 