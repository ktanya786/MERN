import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProposalDetails() {
  const { proposalId } = useParams();
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProposal = async () => {
      const response = await api.getProposal(proposalId);
      setProposal(response.data);
      setLoading(false);
    };

    if (proposalId) {
      fetchProposal();
    }
  }, [proposalId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{proposal.title}</h2>
          <p>Speaker: {proposal.speaker_name}</p>
          <p>Category: {proposal.category}</p>
          <p>Talk Description:</p>
          {proposal.description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <button>
            <Link to="/proposals">Back to Call for Papers</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProposalDetails;
