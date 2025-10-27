import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {MongoClient} from 'mongodb'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const mongoURL = 'mongodb://localhost:27017'
const dbName = "Login_System"

let db
let fbUser

MongoClient.connect(mongoURL)
.then(client=>{
    console.log("DB is Connected")
    db= client.db(dbName)
    fbUser = db.collection('users')
})
.catch(err=>{
    console.log(`pokka nahi hota connect: ${err}`);
})

app.post('/', async (req, res) =>{
    try{
        console.log(`Data received: `, req.body)

        const result = await fbUser.insertOne({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date()
        })
        console.log(`User Detailed Saved`)
        res.json({
            success: true,
            message: 'User registered successfully',
            userID: result.indertedId
        })
    }
    catch(error){
        console.log(`Error: ${error}`)
        res.status(400).json({
            success:false,
            message: `Error Saving User`,
            error: error.message
        })
    }
})

app.post('/login', async(req, res) => {
    try{
    console.log("Login attempted:", req.body)
    const {email, password} = req.body 

    const user = await fbUser.findOne({email})

    if(!user){
        return res.status(400).json({
            success: false,
            message: 'Invalid Email or Password'
        })
    }

    if(user.password !== password){
        return res.status(400).json({
            success: false,
            message: "Wrong password"
        })
    }
    res.json({
        success:true,
        message: 'Login Successful',
        user:{
            username: user.username,
            email: user.email
        }
    })
}
catch(error){
    console.log(`Error: ${error}`)
    res.status(500).json({
        success:false,
        message:'Server error',
        error: error.message
    })
}
})



app.get('/', (req, res) =>{
    res.send("Hello World")
} )

app.listen(port, ()=>{
    console.log(`Listening on the port ${port}`);
})

