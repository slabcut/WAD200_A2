import "../styles/deletecomment.css";

import firebase from "firebase/compat/app";

import { ReactComponent as TrashSVG } from "../images/trash.svg";

function DeleteComment({ server, id }) {

  const firestore = firebase.firestore();
  const commentsRef = firestore.collection("comments");

  const deletePost = (e) => {
    commentsRef.doc(id).delete();
  };


  // On click - run a function called deletePost
  // Listen to that click event
  // Find the document(the instagram comment) with the right ID
  // Use firebase method called delete(); to remove a document from your collection

  return (
    <>
    
      {server ? (
        <button
          type="submit"
          className="deletebutton"
          onClick={(e) => deletePost(e.target.value)}
        >
          <TrashSVG className="deleteicon" />
          
        </button>
      ) : (
        ""
      )}
      
    </>
  );
}

export default DeleteComment;
