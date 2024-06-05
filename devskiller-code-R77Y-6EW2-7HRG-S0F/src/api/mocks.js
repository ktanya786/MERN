export const mockConferenceTalk = (overrides = {}) => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  ...overrides,
});

export const mockConferenceTalkProposal = (overrides = {}) => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  status: "accepted",
  ...overrides,
});

export const mockConferenceTalkDetails = (overrides = {}) => ({
  id: "any-id",
  title: "Any Title",
  speaker: "Any Speaker",
  category: "any category",
  description: "any description",
  ...overrides,
});

export const mockCallForPapers = (overrides = { byTalkId: {} }) => overrides;

export const createProposal = (props = {}) => {
  return {
    id: props.id || 1,
    title: props.title || "Sample Proposal",
    speaker_name: props.speaker_name || "John Doe",
    category: props.category || "Web Development",
    description: props.description || "This is a sample proposal description.",
    ...props,
  };
};

export const createProposalStatus = (props = {}) => {
  return {
    proposal_id: props.proposal_id || 1,
    status: props.status || "to be decided",
    ...props,
  };
};
