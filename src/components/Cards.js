import "../styles/cards.css";

import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Card from "./Card";

import { commentsOne, commentsTwo, commentsThree } from "../data";

function Cards() {

   const firestore = firebase.firestore();

   const commentsRef = firestore.collection("comments");
   const query = commentsRef.orderBy("id").limitToLast(10);
   const [comments] = useCollectionData(query, { idField: "id" });

   return (

      <div className="cards">

         <Card
            image="https://picsum.photos/800"
            likedByUser="SuperSolo"
            amoutOfLikes={131}
            comments={comments}
            hours={2}
            server={true}
         />

         <Card
            image="https://picsum.photos/800/1200"
            likedByUser="Harry"
            amoutOfLikes={21}
            comments={commentsTwo}
            hours={14}
            server={false}
         />

         <Card
            image="https://picsum.photos/800/900"

            likedByUser="BeerKing"
            amoutOfLikes={476}
            comments={commentsThree}
            hours={6}
            server={false}
         />

      </div>
   );
}

export default Cards;
