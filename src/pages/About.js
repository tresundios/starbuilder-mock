import React from "react";

const About = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10 text-center max-w-3xl mx-auto relative">
    <div className="absolute inset-0 rounded-xl bg-black/60 backdrop-blur-md z-0" style={{ filter: 'blur(2px)' }}></div>
    <div className="relative z-10 p-6 rounded-xl">
      <h1 className="text-white text-3xl font-bold mb-6">About Starbuilder Music</h1>
      <div className="text-white text-base font-normal leading-normal space-y-4 text-left">
        <p>Discover, Create, and Manage Music</p>
        <p>Starbuilder Music is your all-in-one platform for music lovers, songwriters, and administrators. Explore new music, write your own songs, and manage your music library with ease.</p>
        <p>Efficiently Manage Your Music</p>
        <p>Streamline your music management tasks with our comprehensive admin tools.</p>
        <p>Manage Music Library: Easily manage your music library and metadata.</p>
        <p>Admin Tools: Access a suite of tools for managing users and content.</p>
        <p>Join Starbuilder Music Today: Get started with Starbuilder Music and experience the future of music discovery, creation, and management.</p>
        <p>© 2024 Starbuilder Music. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default About; 