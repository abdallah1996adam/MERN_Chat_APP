import React from "react";

const TeamChannelList = ({ children, error = false, type, loading }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and tray again later !
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "channels" : "Direct Messages"} loading ....
        </p>
      </div>
    );
  }

  return (
      <div className="team-channel-list">
          
      </div>
  )
};

export default TeamChannelList;
