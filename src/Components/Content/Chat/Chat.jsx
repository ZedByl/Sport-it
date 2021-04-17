import React from "react";
import Message from "../../Chat/Message/index";
import DialogItem from "../../Chat/Dialogitem/index";
import Status from "../../Chat/Status";
import ChatInput from "../../Chat/ChatInput";
import DialogsBased from "../../Chat/containers/Dialogs";
import Messages from "../../Chat/Messages";

import "./Chat.scss"
import teamSvg from '../img/team.svg'
import editSvg from '../img/edit.svg'
import ellipsisSvg from '../img/ellipsis.svg'




const Chat = () => {

  return (
    <>
      <section className="home">

        <div className="chat">
          <div className="chat__sidebar">

            <div className="chat__sidebar-header">
              <div>
                <img src={teamSvg} alt="team"/>
                <span>Список диалогов</span>
              </div>
              <button><img src={editSvg} alt="edit"/></button>
            </div>




            <div className="chat__sidebar-dialogs">
              <DialogsBased
                userId={0}
                items={[
                 {
                    _id: "6075d80c455d15c40f116e44",
                    text: "Magna proident Lorem culpa elit duis velit eu excepteur magna nostrud. Aliquip dolore cillum dolor occaecat nisi Lorem nisi exercitation Lorem laboris. Consequat nulla officia est nulla ipsum ipsum consectetur in laboris nulla magna ea ut.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80c08a07302947bb13a",
                      fullName: "Sherrie Nelson",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c0835f1745434961b",
                    text: "Fugiat ea anim duis nulla non irure ad irure non ad culpa voluptate. Id reprehenderit sint velit incididunt id quis id irure. Velit excepteur quis minim irure sunt do reprehenderit qui magna do.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80c3ff68dc92e408e5c",
                      fullName: "Virginia Peck",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c99266e2fe1d27fdf",
                    text: "Sint anim nulla non ad ullamco tempor eu magna dolor Lorem sunt enim. Lorem est nostrud exercitation magna occaecat Lorem. Anim eu aute consequat elit dolor ullamco sint nulla ipsum ex cupidatat amet nostrud est.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80c9827bfc7bdbdc04f",
                      fullName: "Hobbs Coleman",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c041e761058629bef",
                    text: "Laboris sunt culpa velit incididunt sunt cupidatat mollit sunt laboris excepteur adipisicing. Deserunt minim culpa ad ea Lorem esse ipsum veniam id pariatur. Minim exercitation id labore sit consectetur magna incididunt ut sit cupidatat aliquip.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80cd5b4ad854d6738a2",
                      fullName: "Roberson Jefferson",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c12df4bf4561e87d0",
                    text: "Occaecat fugiat consequat tempor labore id qui veniam pariatur ad officia aliquip. Dolor non do enim adipisicing in dolore labore magna id nulla est esse anim. Esse duis enim velit eu pariatur reprehenderit aute labore ut Lorem velit nostrud.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80c39d1436ed24bdb3e", fullName: "Flora Hays",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c54f1007a1b99c6df",
                    text: "Amet anim dolore ipsum dolor fugiat esse mollit elit qui. Sit irure in ex occaecat Lorem esse consectetur fugiat nostrud pariatur Lorem proident commodo mollit. Officia sunt tempor ea id deserunt aliquip.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80cd7fdfdb61f685e66",
                      fullName: "Hartman Tanner",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80ce74a5458af81f615",
                    text: "Occaecat laborum qui qui duis quis id. Incididunt Lorem tempor id esse pariatur esse sit deserunt irure. Excepteur amet excepteur in ut nostrud laboris pariatur aliqua elit dolor culpa et ex excepteur.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80cd64e943bbccebf16",
                      fullName: "Lorna Yang",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80cb0453d8749bbc5a1",
                    text: "Laborum laboris enim aliqua aliqua est deserunt ipsum. Enim do duis ad id exercitation dolor. Incididunt sit ex laboris veniam eiusmod nostrud deserunt ipsum sunt do veniam.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80ccdfd3f6a327f6c3d",
                      fullName: "Ford Hendricks",
                      avatar: null
                    }
                  },
                  {
                    _id: "6075d80c2db8aab7ae831aed",
                    text: "Anim esse minim enim laborum ex cupidatat velit. Consequat irure exercitation occaecat ullamco et laborum ea fugiat laborum tempor non ut exercitation eiusmod. Cupidatat ea commodo ullamco elit quis aliqua eiusmod.",
                    created_at: Date.UTC(2021, 3, 10),
                    user: {
                      _id: "6075d80c06c70562e3cff506",
                      fullName: "Shields Dickerson",
                      avatar: null
                    }
                  }
                ]}
              />
            </div>
          </div>

          <div className="chat__dialog">
            <div className="chat__dialog-header">
              <div />
              <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-fullName">Манат Михеев</b>
                <div className="chat__dialog-header-status">
                  <Status online/>
                </div>
              </div>
              <button><img className="chat__image" src={ellipsisSvg} alt="ellipsis"/></button>
            </div>
            <div className="chat__dialog-messages">
              <Messages />
            </div>
            <div className="chat__dialog-input">
              <ChatInput/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Chat