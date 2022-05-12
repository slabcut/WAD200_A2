
import { Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import ProfileScreen from "./screens/ProfileScreen";

firebase.initializeApp({
   apiKey: "AIzaSyDcDypp_4zV1H6ISVXEJ4u8zHTAYpfpF4s",
   authDomain: "instagram-app-ce1c9.firebaseapp.com",
   projectId: "instagram-app-ce1c9",
   storageBucket: "instagram-app-ce1c9.appspot.com",
   messagingSenderId: "577397544931",
   appId: "1:577397544931:web:c0deda1b72a5d57796b2d6",
   measurementId: "G-BZFFEHXSFC"
});

function App() {
   return (
      <>
        
         <Navigation />

         <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="myprofile" element={<ProfileScreen />} />
         </Routes>
         
         <Footer />

      </>
   );
}

export default App;
