import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import NotAuthUsersPage from "./Components/Content/NotAuthPage/NotAuthUsersPage";
import Profile from "./Components/Content/Profile/Profile";
import FoodNote from "./Components/Content/Food/FoodNote";
import Chat from "./Components/Content/Chat/Chat";
import GeneralChat from "./Components/Content/GeneralChat/GeneralChat";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/profile" exact>
                    <Profile />
                </Route>
                <Route path="/fit" exact>
                    <FoodNote />
                </Route>
                <Route path="/chat" exact>
                    <Chat />
                </Route>
                <Route path="/generalChat" exact>
                    <GeneralChat />
                </Route>
                <Redirect to="/profile" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <NotAuthUsersPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}