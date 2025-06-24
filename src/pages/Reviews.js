import React from "react";

const sampleReviews = [
  {
    song: "Shining Star",
    reviewer: "Jane Doe (Music Professional)",
    text: "A beautifully composed song with strong lyrics and a memorable melody.",
  },
  {
    song: "Dreamer's Road",
    reviewer: "John Smith (Industry Judge)",
    text: "Great potential for radio play. The chorus is especially catchy.",
  },
];

const Reviews = () => (
  <div className="flex flex-col items-center min-h-[60vh] px-4 py-10">
    <h1 className="text-white text-3xl font-bold mb-6">Song Reviews</h1>
    <div className="bg-[#222b36] rounded-lg p-8 w-full max-w-2xl text-white mb-8">
      <p className="mb-4">Songwriters can request professional reviews for their songs. Reviews, including reviewer information and feedback, will be displayed here. You will also receive an email notification when a review is completed.</p>
      <p className="mb-4">To see reviews for a specific song, look for the <span className="font-bold">See Professional Reviews</span> link or box next to your song in your dashboard or song list.</p>
      <p className="text-[#9daebe]">(Review request and management features coming soon.)</p>
    </div>
    <div className="w-full max-w-2xl space-y-6">
      {sampleReviews.map((review, idx) => (
        <div key={idx} className="bg-[#1a222b] rounded-lg p-6 shadow">
          <h2 className="text-white text-lg font-semibold mb-2">{review.song}</h2>
          <div className="text-[#9daebe] text-sm mb-1">Reviewed by: {review.reviewer}</div>
          <div className="text-white text-base">{review.text}</div>
          <div className="mt-2">
            <span className="inline-block bg-[#0b80ee] text-white text-xs px-3 py-1 rounded-full">See Professional Reviews</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Reviews; 