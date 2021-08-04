import React from "react";
import {User} from "../../auth/UserContext";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import {userData} from "../../data/dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = props => {
    
    const {user} = React.useContext(User);
    
    return (
    <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                 <WidgetLg/>
            
            </div>
    </div>
    
    );
};
export default Home;