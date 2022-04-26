import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { addPost } from "./postSlice";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);
  const titleValue = (e) => setTitle(e.target.value);
  const contentValue = (e) => setContent(e.target.value);
  const usersIdValue = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();
  

  const submitPost = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setContent("");
      setTitle("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="form-container">
      <h2>Add a new post</h2>
      <form action="" className="form">
        <label htmlFor="postTitle">Post Title: </label>
        <input onChange={titleValue} className="title-input" type="text" />
        <label htmlFor="postAuthor">Author:</label>
        <select value={userId} onChange={usersIdValue} id="postAuthor">
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          onChange={contentValue}
          className="content-input"
          type="text"
        />
        <button disabled={!canSave} onClick={submitPost}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
