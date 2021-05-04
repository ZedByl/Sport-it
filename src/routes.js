import React from "react"
import { Route, Switch, Redirect } from 'react-router-dom'
import NotAuthUsersPage from "./Components/Content/NotAuthPage/NotAuthUsersPage";
import Profile from "./Components/Content/Profile/Profile";
import FoodNote from "./Components/Content/Food/FoodNote";
import Chat from "./Components/Content/Chat/Chat";
import GeneralChat from "./Components/Content/GeneralChat/GeneralChat";
import AddFood from "./Components/Content/Food/Components/AddFood";

export const useRoutes = isAuthenticated => {
  if ( isAuthenticated ) {
    return (
      <Switch>
        <Route path="/profile" exact component={ Profile }/>
        <Route path="/fit" exact component={ FoodNote }/>
        <Route path="/chat" exact component={ Chat }/>
        <Route path='/chat/:id' exact component={ Chat }/>
        <Route path="/generalChat" exact component={ GeneralChat }/>
        <Route path='/fit/:name' exact component={AddFood}/>
        <Redirect to='/profile'/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <NotAuthUsersPage/>
      </Route>

    </Switch>
  )
}
