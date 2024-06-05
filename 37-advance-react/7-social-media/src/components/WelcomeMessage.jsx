const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <h3 className="welcome-msg"> No Post yet.. Please add new post</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Fetch Posts
      </button>
    </center>
  );
};

export default WelcomeMessage;
