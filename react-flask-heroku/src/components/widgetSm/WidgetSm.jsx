import React from "react";
import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";

export default function WidgetSm(props){

    
    
    return (
    
    <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                
                <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/originals/aa/f3/10/aaf310d49ada94d872038ef3284466f0.png" 
                    alt="no image..." className="widgetSmImg"/>
                <div className="widgerSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle"> Software Engineer</span>
                </div>
                    
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                
                
                <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/originals/aa/f3/10/aaf310d49ada94d872038ef3284466f0.png" 
                    alt="no image..." className="widgetSmImg"/>
                <div className="widgerSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle"> Software Engineer</span>
                </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                
                
                
                <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/originals/aa/f3/10/aaf310d49ada94d872038ef3284466f0.png" 
                    alt="no image..." className="widgetSmImg"/>
                <div className="widgerSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle"> Software Engineer</span>
                </div>
                    
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                
                
                <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/originals/aa/f3/10/aaf310d49ada94d872038ef3284466f0.png" 
                    alt="no image..." className="widgetSmImg"/>
                <div className="widgerSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle"> Software Engineer</span>
                </div>
                    
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                
                
                
            </ul>
    
    
    </div>
    );
};