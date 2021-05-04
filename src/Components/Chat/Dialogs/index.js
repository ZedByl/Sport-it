import React from "react"
import DialogItem from "../Dialogitem";
import orderBy from 'lodash/orderBy'

import "./Dialogs.scss"



const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId, onSelectDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <input
        id="name"
        type="text"
        name="name"
        placeholder={"Поиск среди контактов"}
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy (items, ["created_at"], ["desc"]).map( item => (
        <DialogItem
          onSelect={onSelectDialog}
          key={item._id}
          isMe={item.author._id === userId}
          сurrentDialogId={currentDialogId}
          {...item}
          userId={userId}
          item={item}
        />
    ))
    ) : (
      <p className="dialogs__search-null">Ничего не найдено</p>
    )}
  </div>
);



Dialogs.propTypes = {

};

export default Dialogs;