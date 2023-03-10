import React, { Component } from "react";
import "../../assets/css/chatBody.css";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatContent />
        <ChatList />
      </div>
    );
  }
}