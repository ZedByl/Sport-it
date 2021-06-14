import React, {useEffect} from "react";
import _ from 'lodash'
import style from "./Food.module.scss"
import useFood from "./useFood";
import BreakFast from "./Components/BreakFast";
import Dinner from "./Components/Dinner";
import Supper from "./Components/Supper";
import Other from "./Components/Other";
import {connect} from "react-redux";
import {dialogsActions} from "../../Chat/redux/actions";
import socket from "../../Chat/core/socket";

const FoodNote = (props) => {
  const { foodHeader } = useFood()
  window.fetchDialogs = props.fetchDialogs

  useEffect(() => {
    props.fetchDialogs()
    socket.on("SERVER:DIALOG_CREATED", props.fetchDialogs)
    socket.on("SERVER:NEW_MESSAGE", props.fetchDialogs)
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", props.fetchDialogs)
      socket.removeListener("SERVER:NEW_MESSAGE", props.fetchDialogs)
    }
  }, [])

  window.scrollTo(0,document.body.scrollHeight);

  return (
      <div className={ style.main }>
        <div className={ style.header }>
          { _.map(foodHeader, (route) =>
            <div className={ style.items } key={ route.id }>
              { route.img }
              { route.name }
            </div>
          )}
        </div>
        <div className={ style.content }>
          <table className={ style.table }>
            <BreakFast/>
            <Dinner/>
            <Supper/>
            <Other/>
          </table>
        </div>
      </div>
  );
}
export default connect(({user, dialogs}) => ({
  user: user.data,
  dialogId: dialogs.items[0]
}),  dialogsActions)(FoodNote)
