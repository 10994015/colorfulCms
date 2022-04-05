const express = require('express');
const router = express.Router();
const conn = require('../config/db');

router.get('/',(req, res, next)=>{
    conn.query('SELECT * FROM uploads',(err, result)=>{
        if(err){
            throw err;
        }
        const returnObj = {'result':result};
        res.status(200);
        res.json(returnObj);
    })
})

module.exports = router;