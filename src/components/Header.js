import React from "react";

// Add Pirata One font import to the document head if not already present
if (typeof document !== 'undefined' && !document.getElementById('pirataone-font')) {
  const link = document.createElement('link');
  link.id = 'pirataone-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Pirata+One&display=swap';
  document.head.appendChild(link);
}

const Header = ({ logo, title, navLinks, rightContent, transparent }) => (
  <header
    className={
      `flex items-center justify-between whitespace-nowrap px-10 py-3 `
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
    <div className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        {navLinks && navLinks.map((link, idx) => (
          <a key={idx} className="text-white text-sm font-medium leading-normal" href={link.href}>{link.label}</a>
        ))}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  </header>
);

export default Header; 