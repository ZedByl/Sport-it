import React from 'react'

import {Button, Select, Input} from "antd"

import "./Sidebar.scss"

const {Option} = Select;
const {TextArea} = Input;


const SidebarModal = ({
                        inputValue,
                        messageText,
                        selectedUserId,
                        isLoading,
                        users,
                        onSearch,
                        onChangeInput,
                        onSelectUser,
                        onChangeTextArea,
                        onModalOk
                      }) => {

  const options = users.map(user => <Option value={user._id} key={user._id}>{user.fullname}</Option>);


  return (
    <div className="modal">
      <h2>Создать диалог</h2>
      <hr/>
      <div className="modal__select">
        <Select
          value={inputValue}
          onSearch={onSearch}
          onChange={onChangeInput}
          onSelect={onSelectUser}
          notFoundContent={null}
          style={{width: '100%',}}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          placeholder="Введите имя пользователя или почту"
          showSearch>
          {options}
        </Select>
      </div>
      {selectedUserId && (
        <div className="modal__text">
          <TextArea
            autosize={{minRows: 3, maxRows: 10}}
            onChange={onChangeTextArea}
            value={messageText}
          />
        </div>
      )}
      <div className="modal__btn">
        <Button
          disabled={!messageText}
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={onModalOk}>
          Создать
        </Button>
      </div>

    </div>
  )
}

export default SidebarModal;
