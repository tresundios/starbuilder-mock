import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Explore", href: "#" },
  { label: "Library", href: "#" },
];

const footerLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const initialSongs = [
  {
    id: 1,
    name: "Shining Star",
    songwriter: "Alice Smith",
    year: 2023,
    performer: "Alice Smith",
    votes: [],
    listens: 0,
    reviewRequested: false,
    review: null,
  },
  {
    id: 2,
    name: "Dreamer's Road",
    songwriter: "Bob Jones",
    year: 2022,
    performer: "Chris Lee",
    votes: [],
    listens: 0,
    reviewRequested: false,
    review: null,
  },
];

const LISTEN_SECONDS = 60;

const SongList = () => {
  const [songs, setSongs] = useState(initialSongs);
  const [playing, setPlaying] = useState({});
  const [voteInputs, setVoteInputs] = useState({});
  const [showReview, setShowReview] = useState({ open: false, song: null });

  const handlePlay = (songId) => {
    if (playing[songId]) return;
    const timerId = setTimeout(() => {
      setSongs((prev) =>
        prev.map((s) =>
          s.id === songId ? { ...s, listens: s.listens + 1 } : s
        )
      );
      setPlaying((prev) => ({ ...prev, [songId]: null }));
    }, LISTEN_SECONDS * 1000);
    setPlaying((prev) => ({ ...prev, [songId]: timerId }));
  };

  const handleStop = (songId) => {
    if (playing[songId]) {
      clearTimeout(playing[songId]);
      setPlaying((prev) => ({ ...prev, [songId]: null }));
    }
  };

  const handleVoteChange = (songId, value) => {
    setVoteInputs((prev) => ({ ...prev, [songId]: value }));
  };

  const handleVote = (songId) => {
    const value = parseInt(voteInputs[songId], 10);
    if (!value || value < 1 || value > 100) return;
    setSongs((prev) =>
      prev.map((s) =>
        s.id === songId ? { ...s, votes: [...s.votes, value] } : s
      )
    );
    setVoteInputs((prev) => ({ ...prev, [songId]: "" }));
  };

  const handleRequestReview = (songId) => {
    setSongs((prev) =>
      prev.map((s) =>
        s.id === songId ? { ...s, reviewRequested: true } : s
      )
    );
    alert("Review request submitted! (Demo only, payment integration coming soon)");
  };

  const handleShowReview = (song) => {
    setShowReview({ open: true, song });
  };

  const handleCloseReview = () => {
    setShowReview({ open: false, song: null });
  };

  return (
    <Layout
      header={<Header navLinks={navLinks} title="Starbuilder Music" />}
      footer={<Footer links={footerLinks} copyright="© 2024 Starbuilder Music. All rights reserved." />}
    >
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-6">Song List</h1>
          {songs.map((song) => {
            const avgVote = song.votes.length
              ? (song.votes.reduce((a, b) => a + b, 0) / song.votes.length).toFixed(1)
              : "-";
            return (
              <div key={song.id} className="bg-[#1f272e] rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-white text-xl font-bold">{song.name}</h2>
                    <div className="text-[#9daebe] text-sm">By {song.songwriter} ({song.year})</div>
                    <div className="text-[#9daebe] text-sm">Performer: {song.performer}</div>
                  </div>
                  <div className="flex flex-col gap-2 md:items-end">
                    <div className="flex gap-2 items-center">
                      <button
                        className={`px-4 py-2 rounded ${playing[song.id] ? "bg-red-500" : "bg-blue-500"} text-white font-bold`}
                        onClick={() =>
                          playing[song.id] ? handleStop(song.id) : handlePlay(song.id)
                        }
                      >
                        {playing[song.id] ? "Stop" : "Play"}
                      </button>
                      <span className="text-[#9daebe] text-sm">Listens: {song.listens}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={voteInputs[song.id] || ""}
                        onChange={(e) => handleVoteChange(song.id, e.target.value)}
                        className="form-input w-20"
                        placeholder="Vote (1-100)"
                      />
                      <button
                        className="px-3 py-1 rounded bg-green-500 text-white font-bold"
                        onClick={() => handleVote(song.id)}
                      >
                        Vote
                      </button>
                      <span className="text-[#9daebe] text-sm">Votes: {song.votes.length} | Avg: {avgVote}</span>
                    </div>
                    {/* Review Request/Status/Link */}
                    <div className="flex gap-2 items-center mt-2">
                      {!song.reviewRequested && !song.review && (
                        <button
                          className="px-3 py-1 rounded bg-yellow-500 text-white font-bold"
                          onClick={() => handleRequestReview(song.id)}
                        >
                          Request Review
                        </button>
                      )}
                      {song.reviewRequested && !song.review && (
                        <span className="text-yellow-400 text-sm">Review Requested</span>
                      )}
                      {song.review && (
                        <button
                          className="px-3 py-1 rounded bg-purple-500 text-white font-bold"
                          onClick={() => handleShowReview(song)}
                        >
                          See Professional Reviews
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Review Modal */}
      {showReview.open && showReview.song && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-[#222b36] rounded-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleCloseReview}
            >
              &times;
            </button>
            <h2 className="text-white text-2xl font-bold mb-4">Professional Review</h2>
            <div className="text-white text-base mb-2">{showReview.song.review}</div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SongList; 