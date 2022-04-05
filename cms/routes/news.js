const express = require('express');
const router = express.Router();
const conn = require('../config/db');

router.get('/', (req, res, next)=>{
    conn.query('SELECT * FROM news',(err, result)=>{
        if(err){
            throw err;
        }
        const returnObj = {'result':result};
        res.status(200);
        res.json(returnObj);
    });
})

router.post('/',(req, res, next)=>{
    conn.query('INSERT INTO news (title,content,imgsrc) VALUES (?,?,?)',
    [req.body.title, req.body.content,req.body.imgsrc],(err, result)=>{
        if(err){
            throw err;
        }else{
            const returnObj = {'message':'資料新增成功'};
            res.status(201);
            res.json(returnObj);
        }
    });
})

router.patch('/:id',(req, res ,next)=>{
    let newsId = req.params.id;
    conn.query('UPDATE news SET title=?,content=?,imgsrc=? WHERE id=?',[req.body.title, req.body.content, req.body.imgsrc, newsId],(err, result)=>{
        if(err){
            throw err;
        }else{
            const returnObj = {'message':"資料更新成功!"};
            res.status(200);
            res.json(returnObj);
        }
    })
})

router.delete('/:id',(req, res, next)=>{
    let newsId = req.params.id;
    conn.query('DELETE FROM news WHERE id=?',newsId, (err, result)=>{
        if(err){
            throw err;
        }else{
            const returnObj = {'message':"資料刪除成功!"};
            res.status(204);
            res.json(returnObj);
        }
    })
})




module.exports = router;