import "../styles/card.css";

import Profile from "./Profile";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import PostComment from "./PostComment";

import { ReactComponent as MoreSVG } from "../images/more.svg";

function Card({ image, likedByUser, amoutOfLikes, comments, hours, server }) {
   
   return (

      <div className="card">

         <div className="cardheader">
         
            <Profile iconSize="medium" />
            
            <MoreSVG />
            
         </div>

         <img className="cardimage" src={image} alt="card" />

         <CardMenu />
         
         <div className="likedby">
         
            <Profile iconSize="small" />
            
            <p>
               Liked by <strong>{likedByUser}</strong> and{" "}
               <strong>{amoutOfLikes} others</strong>
            </p>
            
         </div>
         
         <div className="comments">
         
            { comments && comments.map((comment) => (
                  <Comment
                     commentName={comment.user}
                     commentText={comment.text}
                     server={server}
                     id={comment.id}
                  />
               ))}
               
         </div>
         
         <div className="timeposted">{hours} HOURS AGO</div>
         
         <PostComment 
            comments={comments} 
            server = {server}
         />
 
      </div>
   );
}

export default Card;
