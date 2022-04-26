import React from "react";
import "./Posts.css";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import PostAuthor from "./PostAuthor";

function PostLists() {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((post) => (
   
    <article className="post-container" key={post.id}>
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <small className="post-author">
        <PostAuthor userId={post.userId} />
      </small>
    </article>
  ));

  return (
    <div>
      <h1>hello World</h1>
      {renderedPosts}
    </div>
  );
}

export default PostLists;
