import "../styles/profile.css";

function Profile({ iconSize }) {
   
   let profileImage = "https://i.pravatar.cc/150";
   let size = "profileicon "+ iconSize;

   return (
         <img
            className={size}
            src={profileImage}
            alt="profile"
         />      
   );
}

export default Profile;
