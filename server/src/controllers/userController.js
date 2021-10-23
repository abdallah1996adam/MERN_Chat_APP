require("dotenv").config();
const express = require("express");
const crypto = require("crypto");
const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat");

const apiKey = process.env.STREAM_ACCESS_KEY;
const appId = process.env.STREAM_APP_ID;
const secretKey = process.env.STREAM_SECRET_KEY;

exports.signup = async (request, response) => {
  const { password, fullName, phoneNumber, username } = request.body;

  console.log(request.body);

  try {
    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(apiKey, appId, secretKey);
    const hashedPassword = await bcrypt.hash(password, 20);
    const token = serverClient.createUserToken(userId);

    return response
      .status(201)
      .json({ password, hashedPassword, phoneNumber, username });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: error.message });
  }
};

exports.signin = async (request, response) => {
  const { username, password } = request.body;

  try {
    const serverClient = connect(apiKey, appId, secretKey);
    const client = StreamChat.getInstance(apiKey, secretKey);
    const { users } = client.queryUsers({ name: username });

    if (!users.length)
      return response.status(400).json({ message: "user not found" });

    const success = await bcrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);
    if (success) {
      return response
        .status(200)
        .json({
          token,
          fullName: users[0].fullName,
          username,
          userId: users[0].id,
        });
    }else{
        return response.status(400).json({message: "incorrect password"})
    }
  } catch (error) {
      console.log(error);
      return response.status(500).json({message:error.message})
  }
};
