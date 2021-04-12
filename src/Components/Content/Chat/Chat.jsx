import React from "react";
import style from "./Chat.module.scss"
import Message from "../../Message/index";
import DialogItem from "../../Dialogitem/index";
import Dialogs from "../../Dialogs/index"



const Chat = () => {

  return (
    <>
      <section className={style.home}>

        <Dialogs
          userId={0}
          items={[
          {
            _id: "ewrwe324234r534rt3",
            text: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻 Ладно, хуй с ним! Пошли Брика делать под пивасик',
            created_at: Date.UTC(2018, 11, 1),
            user: {
              _id: "ewrwe324234r534rt3",
              fullName: 'Илья Свалов',
              avatar: null

            }
          },
            {
              _id: Math.random(),
              text: 'Ладно, хуй с ним! Пошли Брика делать под пивасик',
              created_at: Date.UTC(2021, 3, 10),
              user: {
                _id: 1,
                fullName: 'Манат Михеев',
                avatar: "https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"

              }
            }
        ]}/>

        <Message
          avatar="https://sun9-50.userapi.com/s/v1/ig2/HMwkk2uLZWlKMvpBfQUOTcyyiFP2QBHoeEjdKFfKydzNqcKBlKXq3ETgB6ihGsd_4pFeK4li1DXPS4QquKYAj-94.jpg?size=200x0&quality=96&crop=0,0,1620,2160&ava=1"
          audio="https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg"
        />

        {/*  <Message*/}
        {/*  avatar="https://sun9-52.userapi.com/s/v1/ig2/JSVzMEm2om1mgYvrE6JgCLkZXiJlOFHBGLgMh1U_od7QkRsrPYSmS9xQJpNhQh2Y92uBySiAa3g-ZEFdNb6MuTVF.jpg?size=200x0&quality=96&crop=0,450,1440,1440&ava=1"*/}
        {/*  text="Сам Брут!!!!"*/}
        {/*  date="Thu Apr 08 2021 15:03:36"*/}
        {/*  isMe={true}*/}
        {/*  isRead={false}*/}
        {/*  />*/}

        {/*<Message*/}
        {/*  avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"*/}
        {/*  attachments={[*/}
        {/*    {*/}
        {/*      filename: 'image.jpg',*/}
        {/*      url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'*/}
        {/*    }*/}
        {/*  ]}*/}
        {/*/>*/}

        {/*<Message*/}
        {/*  avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"*/}
        {/*  isTyping*/}
        {/*/>*/}
      </section>
    </>
  )
}
export default Chat