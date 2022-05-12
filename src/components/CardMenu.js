import "../styles/cardmenu.css";

import { useState } from "react";

import { ReactComponent as InboxSVG } from "../images/inbox.svg";
import { ReactComponent as CommentsSVG } from "../images/comments.svg";
import { ReactComponent as LikeSVG } from "../images/like.svg";
import { ReactComponent as LikeFillSVG } from "../images/likefill.svg";
import { ReactComponent as BookmarkSVG } from "../images/bookmark.svg";


function CardMenu() {
   
  const [likePost, setLikePost] = useState(false);

  return (
    <div className="cardmenu">
      <div className="interactions">
        <div onClick={() => setLikePost((prevState) => !prevState)}>
          {likePost ? (
            <LikeFillSVG className="icon" />
          ) : (
            <LikeSVG className="icon" />
          )}
        </div>
        <CommentsSVG className="icon" />
        <InboxSVG className="icon" />
      </div>
      <BookmarkSVG className="icon" />
    </div>
  );
}

export default CardMenu;
