import React from "react";
import teamSvg from "../../Content/img/team.svg";
import editSvg from "../../Content/img/edit.svg";
import DialogsBased from "../containers/Dialogs";
import Modal from "../../Modal/Modal";
import SidebarModal from "../../Modal/SidebarModal/SidebarModal";


const Sidebar = ({
                   user,
                   visible,
                   onShow,
                   onClose,
                   inputValue,
                   messageText,
                   selectedUserId,
                   isLoading,
                   users,
                   onSearch,
                   onChangeInput,
                   onSelectUser,
                   onChangeTextArea,
                   onModalOk,
                 }) => {


  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <img src={teamSvg} alt="team"/>
          <span>Список диалогов</span>
        </div>
        <button
          onClick={onShow}
        >
          <img src={editSvg} alt="edit"/>
        </button>
      </div>
      <div className="chat__sidebar-dialogs">
        <DialogsBased userId={user && user._id}/>
      </div>
      {visible && <Modal isOpen={onClose} isClose={onClose}>
        <div>
          <SidebarModal
            user={user}
            inputValue={inputValue}
            messageText={messageText}
            selectedUserId={selectedUserId}
            isLoading={isLoading}
            users={users}
            onSearch={onSearch}
            onChangeInput={onChangeInput}
            onSelectUser={onSelectUser}
            onChangeTextArea={onChangeTextArea}
            onModalOk={onModalOk}
          />

        </div>
      </Modal>}
    </div>
)

}

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar