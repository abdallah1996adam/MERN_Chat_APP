const express = require('express')
const crypto = require('crypto')
const {connect} = require('stream-chat')

exports.signup = async (request, response)=>{
    try {
        console.log(request.body);
    } catch (error) {
        console.log(error);
        return response.status(500).json({Error: error.message})
    }

}


exports.sginin = async (request, response)=>{

}