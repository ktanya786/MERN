import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

function ProposalsList() {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProposals = async () => {
      const response = await api.getProposals();
      const proposalStatuses = await api.getProposalStatuses();
      const proposalsWithStatus = response.data.proposals.map((proposal) => {
        const status = proposalStatuses.data_statuses.find(
          (status) => status.proposal_id === proposal.id
        );
        const statusDescription = status ? status.status : "(unknown)";
        const statusColor =
          statusDescription === "accepted"
            ? "green"
            : statusDescription === "rejected"
            ? "red"
            : "neutral";
        return { ...proposal, status: statusDescription, statusColor };
      });
      setProposals(proposalsWithStatus);
      setLoading(false);
    };
    fetchProposals();
  }, []);

  const handleAccept = async (proposalId) => {
    await api.updateProposalStatus(proposalId, "accepted");
    const updatedProposals = proposals.map((proposal) => {
      if (proposal.id === proposalId) {
        return { ...proposal, status: "accepted", statusColor: "green" };
      }
      return proposal;
    });
    setProposals(updatedProposals);
  };

  const handleReject = async (proposalId) => {
    await api.updateProposalStatus(proposalId, "rejected");
    const updatedProposals = proposals.map((proposal) => {
      if (proposal.id === proposalId) {
        return { ...proposal, status: "rejected", statusColor: "red" };
      }
      return proposal;
    });
    setProposals(updatedProposals);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {proposals.map((proposal) => (
            <li
              id={`proposal-id-${proposal.id}`}
              key={proposal.id}
              className={`ProposalRow--${proposal.statusColor}`}
            >
              <Link to={`/proposals/${proposal.id}`}>
                <h1>{proposal.title}</h1>
                <p>{proposal.speaker_name}</p>
                <p>Category: {proposal.category}</p>
                <p>Status: {proposal.status}</p>
              </Link>
              {proposal.status !== "accepted" && (
                <button
                  className="accept-button"
                  onClick={() => handleAccept(proposal.id)}
                >
                  Accept
                </button>
              )}
              {proposal.status !== "rejected" && (
                <button
                  className="reject-button"
                  onClick={() => handleReject(proposal.id)}
                >
                  Reject
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProposalsList;
