import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../Shared/ChatItem";

const Chatlist = ({
  w = "100",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction="column" overflow="auto" height="100%">
      {chats?.map((data, index) => {
        const { _id, name, groupChat, members, avatar } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some(
          (member) => member?._id && onlineUsers.includes(member._id)
        );

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
