import { Form } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="post-form">
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
          name="title"
        />
        <label htmlFor="floatingInput">Title</label>
      </div>
      <div className="form-floating">
        <textarea id="w3review" rows="4" cols="50" name="body"></textarea>
        <label htmlFor="floatingInput">Post Content</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="User Id "
          name="userId"
        />
        <label htmlFor="floatingInput">User Id </label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Reactions"
          name="reactions"
        />
        <label htmlFor="floatingPassword">Reactions </label>
      </div>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Tags"
          name="tags"
        />
        <label htmlFor="floatingPassword">Tags </label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Save
      </button>
    </Form>
  );
};

export async function actionCreatePost(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log("add post called");
      addPost(post);
      redirect("/");
    });
}

export default CreatePost;
