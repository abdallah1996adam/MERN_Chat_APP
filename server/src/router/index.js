const express = require('express')

const router = express.Router();


router.get('/', (request, response)=>{
    response.status(200).json({message: "Hello"})
})

router.all('*', (request, response)=>{
    response.status(404).json({message : "page not found !"})
})


module.exports = router;