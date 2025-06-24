import React from "react";
import NeonMusicBackground from "./NeonMusicBackground";

const Layout = ({ header, children, footer }) => (
  <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden" style={{ fontFamily: 'Be Vietnam Pro, Noto Sans, sans-serif', background: 'transparent' }}>
    <NeonMusicBackground />
    <div className="layout-container flex h-full grow flex-col">
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  </div>
);

export default Layout; 