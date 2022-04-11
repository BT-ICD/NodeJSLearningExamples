const express = require('express');
const Students = require('../models/studentmodel.js');
let router = express.Router();

router.get('/',(req,res)=>{
    Students.find({},(err, data)=>
    {
        if(err){
            return res.send(err);
        }
        return res.json({data});
    });
});


module.exports = router;