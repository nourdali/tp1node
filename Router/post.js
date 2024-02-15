const express = require ('express')

const router = express.Router()
const employe = [
    {id:1, nom:"daly", prenom:"nour"}, {id:2, nom:"daly", prenom:"mohamed"},{id:3, nom:"daly", prenom:"anwar"},{id:4, nom:"daly", prenom:"nermine"},{id:5, nom:"daly", prenom:"mariem"}
]

router.get('/all', (req, res)=>{

    res.send(employe)
})


module.exports=router