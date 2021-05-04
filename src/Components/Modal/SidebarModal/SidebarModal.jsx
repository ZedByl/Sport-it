import React from 'react'
// import 'antd/dist/antd.css'
import 'react-select-search/style.css'
import {Button, Select, Input, Form} from "antd"
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
    <div>
      <h2>Создать диалог</h2>
      <hr/>
          <Select
            value={inputValue}
            onSearch={onSearch}
            onChange={onChangeInput}
            onSelect={onSelectUser}
            notFoundContent={null}
            style={{ width: '100%', }}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            placeholder="Введите имя пользователя или почту"
            showSearch>
            {options}
          </Select>

        {selectedUserId && (
            <TextArea
              autosize={{ minRows: 3, maxRows: 10 }}
              onChange={onChangeTextArea}
              value={messageText}
            />)}

          <Button
          disabled={!messageText}
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={onModalOk}>
          Создать
          </Button>


    </div>
  )
}

export default SidebarModal;
