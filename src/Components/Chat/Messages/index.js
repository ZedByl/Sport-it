import React from "react"
import PropTypes from "prop-types"
import Message from "../Message";




const Messages = ({ items }) => {
  return items ? (
     <div>
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         audio="https://notificationsounds.com/storage/sounds/file-sounds-1148-juntos.ogg"
       />

       <Message
         avatar="https://sun9-52.userapi.com/s/v1/ig2/JSVzMEm2om1mgYvrE6JgCLkZXiJlOFHBGLgMh1U_od7QkRsrPYSmS9xQJpNhQh2Y92uBySiAa3g-ZEFdNb6MuTVF.jpg?size=200x0&quality=96&crop=0,450,1440,1440&ava=1"
         text="Сам Брут!!!!"
         isMe={true}
         isRead={false}
       />

       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />
       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         attachments={[
           {
             filename: 'image.jpg',
             url: 'https://images.unsplash.com/photo-1617885579766-2450633887e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80'
           }
         ]}
       />

       <Message
         avatar="https://sun9-52.userapi.com/s/v1/ig2/JSVzMEm2om1mgYvrE6JgCLkZXiJlOFHBGLgMh1U_od7QkRsrPYSmS9xQJpNhQh2Y92uBySiAa3g-ZEFdNb6MuTVF.jpg?size=200x0&quality=96&crop=0,450,1440,1440&ava=1"
         text="Тату надпись до 7 см 1000р Маленький рисунок 2000р  3 мини тату ( размер 1*1см) 1500р"
         isMe={true}
         isRead={false}
       />

       <Message
         avatar="https://sun9-23.userapi.com/s/v1/if1/quba6Uc_1PSlCTEa64jS4EGTP5yKyBph8sOJ9NSUzZy7ILe6xSpTtTEJMf2LpkNlEdXHhP4a.jpg?size=50x0&quality=96&crop=97,362,864,864&ava=1"
         isTyping
       />
     </div>

  ) : ( <p>Здесь будет выводиться история переписки.</p>
  )
}




Messages.propTypes = {
  items: PropTypes.array
};




export default Messages