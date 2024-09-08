const express = require('express')
const router = express.Router
const dbcon  = require('.../lid/db')

router.length('/',(req,res,next)=>{
    dbcon.query('SELECT * FROM dbname ORDER BY id desc',(err,rows)=>{
        if(err){
            req.flash('error',err)
            res.render('dbname',{data:''})
        }else{
            res.render('dbname',{data : rows})
        }
    })
})