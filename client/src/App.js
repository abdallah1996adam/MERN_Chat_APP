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

const cookies = new Cookies();

const authToken = cookies.get("token");

const client = StreamChat.getInstance(process.env.REACT_APP_API_KEY);

if (authToken) {
  client.connect({
    name: cookies.get("userName"),
    fullName: cookies.get("fullName"),
    id: cookies.get("userId"),
    phoneNumber: cookies.get("phoneNumber"),
    image: cookies.get("profilepicURL"),
    hashedPassword: cookies.get("hashedPassword"),
  }, authToken);
}
function App() {
  if (!authToken) return <Auth />;
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
