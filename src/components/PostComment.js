import "../styles/postcomment.css";

import firebase from "firebase/compat/app";

import { useState } from "react";

function PostComment({ comments,server }) {
   
  const firestore = firebase.firestore();
  const commentsRef = firestore.collection("comments");
  const [commentValue, setCommentValue] = useState("");

  const commentOnPost = async (e) => {
   
   e.preventDefault();

    await commentsRef.add({
      user: "Dave Ghrol",
      text: commentValue,
      id: comments.length + 1,
    });

    setCommentValue("");
  };

  return (
   
    <form className="postcommentform" onSubmit={commentOnPost}>
      <input
        disabled = {!server}
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="Add a comment..."
      />
      
      <button type="submit" disabled={!commentValue}>
        Post
      </button>
      
    </form>
    
  );
}

export default PostComment;
