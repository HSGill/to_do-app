const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const database = {
    users:[
        { 
            id:'123',
            name:'john',
            email:'john@gmail.com',
            password:'cookies'
        },
        { 
            id:'124',
            name:'Sally',
            email:'sally@gmail.com',
            password:'banana'
        }
    ]
}

app.get('/', (req,res)=>{
    res.send(database.users);
})
app.get('/profile', (req,res)=>{
    res.send("getting profile");
})
app.post('/signin', (req,res) =>{

    if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
        res.json("Success");
    }else{
        res.status(400).json('error Logginin');
    }
    
})

app.listen(3001);

