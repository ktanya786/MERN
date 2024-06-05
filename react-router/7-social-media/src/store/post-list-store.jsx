import { useState } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  console.log(currentPostList);
  console.log(action);
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "CREATE_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  console.log(newPostList);
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: post,
    });
  };

  const addinitialPost = (posts) => {
    const payload = {
      posts,
    };
    dispatchPostList({
      type: "CREATE_INITIAL_POSTS",
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
    <PostList.Provider
      value={{ postList, addPost, addinitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
