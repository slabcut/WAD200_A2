import "../styles/navigation.css";

import { Link } from "react-router-dom";

import logo from "../images/logo.png";

import { ReactComponent as HomeSVG } from "../images/home.svg";
import { ReactComponent as InboxSVG } from "../images/inbox.svg";
import { ReactComponent as ExploreSVG } from "../images/explore.svg";
import { ReactComponent as LikeSVG } from "../images/like.svg";

function Navigation() {
   return (
      <div className="navigation">

         <img className="logo" src={logo} alt="logo" />

         <div className="menu">

            <HomeSVG className="icon" />
            <InboxSVG className="icon" />
            <ExploreSVG className="icon" />
            <LikeSVG className="icon" />

            <Link to="/myprofile">
               <p>My Profile</p>
            </Link>

         </div>

      </div>
   );
}

export default Navigation;
