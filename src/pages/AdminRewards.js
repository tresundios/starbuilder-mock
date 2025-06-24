import React, { useState } from "react";

const issuedRewards = [
  { user: "Alice Smith", reward: "10% Off Event", date: "2024-06-01", status: "Active", id: 1 },
  { user: "Bob Jones", reward: "$20 Voucher", date: "2024-06-02", status: "Redeemed", id: 2 },
  { user: "Chris Lee", reward: "Free T-shirt", date: "2024-06-03", status: "Active", id: 3 },
];

const AdminRewards = () => {
  const [form, setForm] = useState({ user: "", reward: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for issuing reward logic
    alert("Reward issued! (Demo only)");
    setForm({ user: "", reward: "" });
  };

  return (
    <div className="flex flex-col items-center min-h-[60vh] px-4 py-10">
      <h1 className="text-white text-3xl font-bold mb-6">Admin: Manage Rewards</h1>
      <div className="w-full max-w-4xl bg-[#222b36] rounded-lg p-6 mb-8">
        <h2 className="text-white text-lg font-semibold mb-4">Issue New Reward</h2>
        <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
          <input name="user" value={form.user} onChange={handleChange} placeholder="User Name" className="form-input flex-1" />
          <input name="reward" value={form.reward} onChange={handleChange} placeholder="Reward" className="form-input flex-1" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Issue</button>
        </form>
        <div className="text-xs text-gray-400">(Reward issuing logic coming soon.)</div>
      </div>
      <div className="w-full max-w-4xl bg-[#222b36] rounded-lg p-6">
        <h2 className="text-white text-lg font-semibold mb-4">Issued Rewards</h2>
        <table className="w-full text-left text-white">
          <thead>
            <tr className="border-b border-[#333]">
              <th className="py-2 px-3">User</th>
              <th className="py-2 px-3">Reward</th>
              <th className="py-2 px-3">Date Issued</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issuedRewards.map((reward) => (
              <tr key={reward.id} className="border-b border-[#333]">
                <td className="py-2 px-3">{reward.user}</td>
                <td className="py-2 px-3">{reward.reward}</td>
                <td className="py-2 px-3">{reward.date}</td>
                <td className="py-2 px-3">{reward.status}</td>
                <td className="py-2 px-3 space-x-2">
                  {reward.status === "Active" && <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">Mark Redeemed</button>}
                  {reward.status === "Redeemed" && <span className="text-green-400 text-xs">Redeemed</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRewards; 