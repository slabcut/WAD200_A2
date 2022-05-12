import "../styles/comment.css";

import DeleteComment from "./DeleteComment";

function Comment({ commentName, commentText, server, id }) {

  return (
    <div className="commentcontainer">
      <div className="commentname">{commentName}</div>
      <div className="commenttext">{commentText}</div>
      <DeleteComment server={server} id={id} />
    </div>
  );
}

export default Comment;
