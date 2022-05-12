import { Link } from "react-router-dom";

function ProfileScreen() {
   return (
      <>
         <h2>This is a new page</h2>
         <p>
            Take me <Link to="/">Home</Link>
         </p>
      </>
   );
}

export default ProfileScreen;
