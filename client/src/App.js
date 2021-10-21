import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie/es6";
//css
import "./App.css";
//components
import { ChannelContainer, ChannelContainerList } from "./components";
//pages
import { Auth } from "./pages";

const client = StreamChat.getInstance(process.env.REACT_APP_API_KEY);
const authToken = false;


function App() {
  if (!authToken) return <Auth/>
  return ( 
    <div className="app__wrapper">
      <Chat client={client} theme="tam light">
        <ChannelContainer />
        <ChannelContainerList />
      </Chat>
    </div>
  );
}

export default App;
