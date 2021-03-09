import React from "react";
import {Route} from "react-router-dom";
import Profile from "../Content/Profile/Profile";
import FoodNote from "../Content/Food/FoodNote";
import Chat from "../Content/Chat/Chat";
import GeneralChat from "../Content/GeneralChat/GeneralChat";


const RoutePage = () => {
    return (
        <div >
            <Route path={"/profile"} component={Profile}/>
            <Route path={"/fit"} component={FoodNote}/>
            <Route path={"/chat"} component={Chat}/>
            <Route path={"/generalChat"} component={GeneralChat}/>
        </div>
    )
}

export default RoutePage