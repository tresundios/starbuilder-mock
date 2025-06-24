import React from "react";

const rewardPartners = [
  "Event Organisers",
  "Musical Instrument Suppliers",
  "Restaurants",
  "Clothing (T-shirts, caps, etc. with Starbuilder logos)",
  "Other partners to be announced"
];

const Rewards = () => (
  <div className="flex flex-col items-center min-h-[60vh] px-4 py-10">
    <h1 className="text-white text-3xl font-bold mb-6">Starbuilder Reward Programme</h1>
    <div className="bg-[#222b36] rounded-lg p-8 w-full max-w-2xl text-white">
      <p className="mb-4">Music lovers earn coupons and discount vouchers based on their activity on Starbuilder Music. The more you listen to songs and vote, the more rewards you can earn!</p>
      <p className="mb-4">Potential reward partners include:</p>
      <ul className="list-disc list-inside mb-4 text-[#9daebe]">
        {rewardPartners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
      <p className="mb-2 text-[#9daebe]">More details and reward tracking features coming soon.</p>
    </div>
  </div>
);

export default Rewards; 