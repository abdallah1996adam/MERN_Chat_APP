
const express = require('express')
const crypto = require('crypto')
const {connect} = require('getstream')
const bcrypt = require('bcrypt')
const streamChat = require('stream-chat')

exports.signup = async (request, response)=>{
    try {
        const userId = crypto.randomBytes(16).toString('hex')


        console.log(request.body);



    } catch (error) {
        console.log(error);
        return response.status(500).json({Error: error.message})
    }

}


exports.sginin = async (request, response)=>{

}