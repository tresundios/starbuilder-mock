import React from "react";
import { Link } from "react-router-dom";
import MusicNotesAnimation from "../components/MusicNotesAnimation";
import AshfallAnimation from "../components/AshfallAnimation";
import Header from "../components/Header";

const featuredMusic = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2wFFJnR0LDuB3vtwDb5hl6DQl-ynBrm3PO8O6eTcKd6OKY_5weS8k2-MepiRNNWW3GMwrSeh4IobaLnKYr_zYO3OWACwe_mEsiAnyzJLjpRLyr9_KAv03FMUxVoh0ESY2Xb4J0vgApct_YZ2czlZWo9EJ_4UEHfx3bs_KHo8deEKIVp23gh-E4PYZo4lI1rNCYOh1XPxeXmRajP4b7h_uGYkTuNiIj5PsrFnF_TqOojWD6MaBTe-7-ZGVPYEyVZfObeP4x5Q1b7AA",
    title: "New Album Release",
    desc: "Check out the latest album from your favorite artist."
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-XGscYYGF_eJQMPPtygzILkqIc_wWmcpa7-39_6FjLJERgWSHTnw4Fk6-n6KE1LlTxc85PtvnGR1Lw1wTA2GLFT_0U2x1jt8ZSgL_lSkd09h1vRpl5EcESm6PC_JjgcO6Y2iJiW21R1HH-pEoJ_1yN-ZQy9xEtooaDPc3EWxVKTr8bNsADrDxnBYzJYpvS0I0lQXIe2IIn9IMQAdZh7u1GyxSS2hnfw-EDm5XEqDxpYW8ZStST99vYGmBVChHgGdIalTMlhbHYtIZ",
    title: "Live Concert Highlights",
    desc: "Relive the best moments from recent live performances."
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPuL2Ig1EAGOPS--Fc_SqzoB4sOGei54JSE6grXWeoq2dzO3QRtZwI4HGqP5xYwVY96AmD5Xn3WsLyZs_5wV5IhCyraGgCOWb_DdmwhUQ3zM1bbvyKI55VbqSXX31GFAdn-f0BZEiSUiCF6PwcTRwS-YZvHLZvvCqPGn55LNNebGAs4DUggge-QhMRt1CBLndAxtzZWpQoZxiEO8Js02wq-5TsCOqhN2Yues-VLh93g2I2iLntk_BF1qfY9j0BT3nH5vw8vnRP5Kgx",
    title: "Behind the Scenes",
    desc: "Get an exclusive look at the making of new music."
  }
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/register" },
  { label: "Login", href: "/login" },
  { label: "Song Upload", href: "/song-upload" },
  { label: "Admin", href: "/admin" },
  { label: "Rewards", href: "/rewards" },
  { label: "Reviews", href: "/reviews" },
];

const Home = () => (
  <>
  {/* Music Notes Animation Background */}
  <div className="relative flex flex-col min-h-screen overflow-x-hidden" style={{ fontFamily: 'Be Vietnam Pro, Noto Sans, sans-serif', background: 'transparent' }}>
    <div className="layout-container flex flex-col grow" style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero/Header Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center py-10 px-4 gap-8">
        {/* Left-aligned image */}
        <div className="hidden md:block w-full max-w-xs lg:max-w-md mb-8 lg:mb-0 h-full lg:h-auto flex lg:block items-start relative">
          {/* Animated neon gradient overlay */}
          <span className="absolute inset-0 rounded-lg neon-gradient-overlay z-10"></span>
          <img src="/back.jpg" alt="Background Art" className="w-full h-full lg:h-[480px] rounded-lg shadow-lg object-cover object-top relative z-20" style={{ minWidth: 220, maxHeight: '100%', maxHeight: 480, opacity: 0.6 }} />
        </div>
        {/* Central text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative">
          <div className="absolute inset-0 rounded-xl bg-black/60 backdrop-blur-md z-0" style={{ filter: 'blur(2px)' }}></div>
          <div className="relative z-10 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="hidden md:block w-full max-w-xs lg:max-w-md mb-8 lg:mb-0 h-full lg:h-auto flex lg:block items-start relative">
                <img src="/logo.png" alt="Starbuilder Logo" className="w-[220px] h-full object-contain" />
              </div>
            </div>
            <h1 className="font-black leading-tight tracking-[-0.033em] mb-2" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>You Can Become a Star</h1>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>Are you a songwriter?</p>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>If you are you love music as do many people around the world.</p>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>Starbuilder Music has been created to give extensive support and encouragement to songwriters.</p>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>Songwriters upload songs and music lovers vote on them, a high average mark indicating the potential for unpublished songs. Many of those in the top ten each month will be invited to perform at events we organise.</p>
            <p className="mb-2" style={{ color: '#FFFFFF' }}>There is no charge to upload your songs. Music lover voters and will be rewarded with significant discount vouchers for events, products and services and other benefits.</p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
              <Link to="/register" className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4" style={{ background: '#58a6ff', color: '#0d1117', fontWeight: 700 }}>Sign Up Songwriter</Link>
              <Link to="/register" className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4" style={{ background: '#58a6ff', color: '#0d1117', fontWeight: 700 }}>Sign Up Musiclover</Link>
              <Link to="/login" className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4" style={{ background: '#21262d', color: '#c9d1d9', fontWeight: 700 }}>Login</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar Section */}
      <div className="flex justify-center mb-10">
        <div className="flex w-full max-w-xl items-stretch rounded-xl h-12" style={{ background: '#161b22' }}>
          <div className="flex items-center justify-center pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <input placeholder="Search for music, artists, or genres" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl focus:outline-0 focus:ring-0 border-none focus:border-none h-full placeholder:text-[#8b949e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" style={{ color: '#c9d1d9', background: '#161b22' }} />
          <button className="flex items-center justify-center rounded-r-xl h-12 px-5" style={{ background: '#238636', color: '#fff', fontWeight: 700 }}>Search</button>
        </div>
      </div>
      {/* Featured Music Section */}
      <div className="px-4 md:px-40">
        <h2 className="font-bold leading-tight tracking-[-0.015em] pb-3" style={{ color: '#FFFFFF', fontSize: '1.375rem' }}>Featured Music</h2>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {featuredMusic.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 rounded-lg min-w-[240px] p-4" style={{ background: '#161b22', border: '1px solid #24292e' }}>
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url('${item.image}')` }}></div>
              <div>
                <p className="text-base font-medium leading-normal" style={{ color: '#c9d1d9' }}>{item.title}</p>
                <p className="text-sm font-normal leading-normal" style={{ color: '#8b949e' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Info Section for Music Lovers */}
      <div className="flex flex-col gap-10 px-4 py-10 md:px-40">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold leading-tight max-w-[720px]" style={{ color: '#FFFFFF', fontSize: '2rem' }}>Explore the World of Music</h1>
          <p className="text-base font-normal leading-normal max-w-[720px]" style={{ color: '#FFFFFF' }}>Find your next favorite song or artist with our extensive music library and personalized recommendations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-1 gap-3 rounded-lg p-4 flex-col" style={{ background: '#161b22', border: '1px solid #24292e' }}>
            <div className="mb-2" style={{ color: '#58a6ff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V98.75l69.7,20.91A8,8,0,0,0,216,112V64A8,8,0,0,0,210.3,56.34ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216ZM200,101.25l-64-19.2V50.75L200,70Z"></path></svg>
            </div>
            <h2 className="text-base font-bold leading-tight" style={{ color: '#c9d1d9' }}>Music Library</h2>
            <p className="text-sm font-normal leading-normal" style={{ color: '#8b949e' }}>Browse thousands of songs and discover new favorites.</p>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg p-4 flex-col" style={{ background: '#161b22', border: '1px solid #24292e' }}>
            <div className="mb-2" style={{ color: '#58a6ff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path></svg>
            </div>
            <h2 className="text-base font-bold leading-tight" style={{ color: '#c9d1d9' }}>Personalized Recommendations</h2>
            <p className="text-sm font-normal leading-normal" style={{ color: '#8b949e' }}>Get suggestions based on your listening habits and preferences.</p>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg p-4 flex-col" style={{ background: '#161b22', border: '1px solid #24292e' }}>
            <div className="mb-2" style={{ color: '#58a6ff' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path></svg>
            </div>
            <h2 className="text-base font-bold leading-tight" style={{ color: '#c9d1d9' }}>Events & Rewards</h2>
            <p className="text-sm font-normal leading-normal" style={{ color: '#8b949e' }}>Participate in events and earn rewards for your engagement.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </> 
);

export default Home; 