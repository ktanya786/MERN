import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const postId = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const postuserId = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    addPost(
      postTitle.current.value,
      postContent.current.value,
      postuserId.current.value,
      postReactions.current.value,
      postTags.current.value.split(",")
    );
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <img
        className="mb-4"
        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="title"
          ref={postTitle}
        />
        <label htmlFor="floatingInput">Title</label>
      </div>
      <div className="form-floating">
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          ref={postContent}
        ></textarea>
        <label htmlFor="floatingInput">Post Content</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="User Id "
          ref={postuserId}
        />
        <label htmlFor="floatingInput">User Id </label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Reactions"
          ref={postReactions}
        />
        <label htmlFor="floatingPassword">Reactions </label>
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Tags"
          ref={postTags}
        />
        <label htmlFor="floatingPassword">Tags </label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Save
      </button>
    </form>
  );
};

export default CreatePost;
