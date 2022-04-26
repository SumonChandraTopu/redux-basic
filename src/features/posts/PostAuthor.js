import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

function PostAuthor({ userId }) {
  console.log(userId);
  
  const users = useSelector(selectAllUsers);
  const author = users.find((user) =>   user.id === userId);
  return (
    <div>
      <p>by {author ? author.name : "Unknown author"}</p>
    </div>
  );
}

export default PostAuthor;
