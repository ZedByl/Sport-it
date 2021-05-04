import { axios } from "./../../core";

export default {
  getAllByDialogId: id => axios.get("/messages?dialog=" + id),
  send: (dialogId, text) => axios.post("/messages", {
    "dialog_id": dialogId,
    "text": text
  })
};