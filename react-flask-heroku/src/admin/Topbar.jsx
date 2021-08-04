import React from "react";
import {User} from "../auth/UserContext";
import "./topbar.css";
import {Link} from "react-router-dom";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = props => {
    
    const {user} = React.useContext(User);
    
    return (
    <div className="topbar">
            <div className="topbarWrapper">
                
                <div className="topLeft">
                    <Link to="/">
                    <span className="logo">Holistic Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    
                     <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    
                     <div className="topbarIconContainer">
                        <Settings/>
                        </div>
                         <img src="https://www.thebookseller.com/sites/default/files/uploads/wltb-import/uploads/legacy/shutterstock_8008522.jpg" alt="" className="topAvatar"/>
                   
                </div>
                
            </div>
            
    </div>
    
    );
};
export default Topbar;