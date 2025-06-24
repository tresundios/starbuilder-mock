import React from "react";

const Sidebar = ({ menuItems }) => (
  <aside className="layout-content-container flex flex-col w-80">
    <div className="flex h-full min-h-[700px] flex-col justify-between p-4" style={{ background: '#161b22', borderRight: '1px solid #24292e' }}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-base font-medium leading-normal" style={{ color: '#c9d1d9' }}>Starbuilder Music</h1>
          <p className="text-sm font-normal leading-normal" style={{ color: '#8b949e' }}>Admin</p>
        </div>
        <div className="flex flex-col gap-2">
          {menuItems && menuItems.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 px-3 py-2 rounded-full ${item.active ? '' : ''}`} style={item.active ? { background: '#21262d' } : {}}>
              <div style={{ color: '#c9d1d9' }}>{item.icon}</div>
              <p className="text-sm font-medium leading-normal" style={{ color: '#c9d1d9' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar; 