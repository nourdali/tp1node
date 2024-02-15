const express = require('express')
const post = require('./Router/post')

const app = express()
app.use('/post', post)

const router=require('./Router/router')
app.use('/auth', router)


app.listen(3400 ,()=>{console.log('server work');});