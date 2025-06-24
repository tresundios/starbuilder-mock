import React, { useState } from "react";

const initialReviewRequests = [
  { id: 1, song: "Shining Star", requester: "Alice Smith", status: "Pending", reviewer: "", feedback: "" },
  { id: 2, song: "Dreamer's Road", requester: "Bob Jones", status: "Pending", reviewer: "", feedback: "" },
];

const AdminReviews = () => {
  const [requests, setRequests] = useState(initialReviewRequests);
  const [feedbackInputs, setFeedbackInputs] = useState({});

  const handleFeedbackChange = (id, value) => {
    setFeedbackInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitFeedback = (id) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "Completed", reviewer: "Admin", feedback: feedbackInputs[id] || "" }
          : r
      )
    );
    setFeedbackInputs((prev) => ({ ...prev, [id]: "" }));
    alert("Feedback submitted! (Demo only)");
  };

  return (
    <div className="flex flex-col items-center min-h-[60vh] px-4 py-10">
      <h1 className="text-white text-3xl font-bold mb-6">Admin: Manage Song Reviews</h1>
      <div className="w-full max-w-4xl bg-[#222b36] rounded-lg p-6">
        <table className="w-full text-left text-white">
          <thead>
            <tr className="border-b border-[#333]">
              <th className="py-2 px-3">Song</th>
              <th className="py-2 px-3">Requester</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Reviewer</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-[#333]">
                <td className="py-2 px-3">{req.song}</td>
                <td className="py-2 px-3">{req.requester}</td>
                <td className="py-2 px-3">{req.status}</td>
                <td className="py-2 px-3">{req.reviewer || <span className="text-gray-400">-</span>}</td>
                <td className="py-2 px-3 space-x-2">
                  {req.status === "Pending" && (
                    <div className="flex flex-col gap-2">
                      <textarea
                        className="form-input w-48 text-black"
                        placeholder="Enter feedback"
                        value={feedbackInputs[req.id] || ""}
                        onChange={(e) => handleFeedbackChange(req.id, e.target.value)}
                      />
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded text-xs"
                        onClick={() => handleSubmitFeedback(req.id)}
                      >
                        Submit Feedback
                      </button>
                    </div>
                  )}
                  {req.status === "Completed" && (
                    <span className="text-green-400 text-xs">Feedback Submitted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-xs text-gray-400 mt-4">(Review assignment and completion actions coming soon.)</div>
      </div>
    </div>
  );
};

export default AdminReviews; 