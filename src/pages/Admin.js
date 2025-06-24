import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const adminSections = [
  {
    name: "Financial Reporting",
    desc: "View and export financial reports, including payments, revenue, and transactions related to song uploads, reviews, and events."
  },
  {
    name: "Songwriter Members",
    desc: "Manage all registered songwriter members, view their profiles, uploaded songs, and activity."
  },
  {
    name: "Users' Songs",
    desc: "Browse, search, and manage all songs uploaded by users. Edit metadata, moderate content, and track song status."
  },
  {
    name: "Orders",
    desc: "View and manage all orders, including event tickets, merchandise, and paid services."
  },
  {
    name: "Songs Report",
    desc: "Generate and view detailed reports on songs, including votes, listens, reviews, and top charts."
  },
  {
    name: "Genre",
    desc: "Manage music genres, add new genres, and organize songs by genre."
  },
  {
    name: "Music Lovers",
    desc: "Manage all registered music lover members, view their activity, and reward status."
  },
  {
    name: "Reward Programme",
    desc: "Configure and monitor the reward programme, issue coupons, and track reward usage."
  },
  {
    name: "Listens and Ratings",
    desc: "Analyze song listens and ratings, including time-based and user-based statistics."
  },
  {
    name: "CMS",
    desc: "Edit and update site content, including homepage text, legal agreements, and informational pages."
  },
  {
    name: "Logout",
    desc: "Sign out of the admin dashboard."
  },
];

const demoSongs = [
  {
    id: 1,
    name: "Shining Star",
    songwriter: "Alice Smith",
    year: 2023,
    performer: "Alice Smith",
    votes: [90, 80, 100],
    listens: 5,
  },
  {
    id: 2,
    name: "Dreamer's Road",
    songwriter: "Bob Jones",
    year: 2022,
    performer: "Chris Lee",
    votes: [70, 85],
    listens: 3,
  },
];

const Admin = () => (
  <div className="flex flex-col items-center min-h-[60vh] px-4 py-10">
    <h1 className="text-white text-3xl font-bold mb-8">Starbuilder Admin Dashboard</h1>
    <div className="flex gap-4 mb-8">
      <Link to="/admin/reviews" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Manage Reviews</Link>
      <Link to="/admin/rewards" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Manage Rewards</Link>
    </div>
    <div className="w-full max-w-3xl space-y-6">
      {adminSections.map((section) => (
        <div key={section.name} className="bg-[#222b36] rounded-lg p-6 shadow">
          <h2 className="text-white text-xl font-semibold mb-2">{section.name}</h2>
          <div className="text-[#9daebe] text-base">{section.desc}</div>
        </div>
      ))}
    </div>
    {/* Songs Analytics Table */}
    <div className="w-full max-w-3xl mt-10">
      <h2 className="text-white text-xl font-bold mb-4">Songs Analytics</h2>
      <table className="w-full text-left text-white bg-[#1f272e] rounded-lg">
        <thead>
          <tr className="border-b border-[#333]">
            <th className="py-2 px-3">Song</th>
            <th className="py-2 px-3">Songwriter</th>
            <th className="py-2 px-3">Year</th>
            <th className="py-2 px-3">Performer</th>
            <th className="py-2 px-3">Votes</th>
            <th className="py-2 px-3">Avg Vote</th>
            <th className="py-2 px-3">Listens</th>
          </tr>
        </thead>
        <tbody>
          {demoSongs.map((song) => (
            <tr key={song.id} className="border-b border-[#333]">
              <td className="py-2 px-3">{song.name}</td>
              <td className="py-2 px-3">{song.songwriter}</td>
              <td className="py-2 px-3">{song.year}</td>
              <td className="py-2 px-3">{song.performer}</td>
              <td className="py-2 px-3">{song.votes.length}</td>
              <td className="py-2 px-3">{song.votes.length ? (song.votes.reduce((a, b) => a + b, 0) / song.votes.length).toFixed(1) : '-'}</td>
              <td className="py-2 px-3">{song.listens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Admin; 