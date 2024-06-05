import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  console.log(newPostList);
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (title, content, userId, reactions, tags) => {
    console.log(`${title} ${content} ${userId} ${reactions} ${tags}`);
    const payload = {
      id: Date.now(),
      title: title,
      body: content,
      reactions: reactions,
      tags: tags,
      userId: userId,
    };
    dispatchPostList({
      type: "CREATE_POST",
      payload,
    });
  };

  const deletePost = (postId) => {
    console.log("delete post:" + postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hello Friends, I am going to mumbai... Hope to enjoy alot.",
    reactions: 10,
    tags: ["Mumbai", "Vacation", "Travel"],
    userId: "user-12",
  },
  {
    id: 2,
    title: "pass ho gaye",
    body: "Finally got pass ... mehnat safal",
    reactions: 15,
    tags: ["Graduation", "Btech", "Results"],
    userId: "user-6",
  },
];

export default PostListProvider;
