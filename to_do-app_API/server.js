const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

var knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'littlebird',
      database : 'todo'
    }
  });

  knex.select('*').from ('login').then(data => {
      console.log(data);
  })
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

    knex.select('email', 'password').from('login')
    .where('email','=', req.body.email )
    .then(user => {
        res.json(user[0]);
        
    }) 
})

app.post('/register', (req,res)=> {
    const{email,password} = req.body;
  knex('login').insert({
      email:email,
      password:password
  }).then(console.log)

})

app.listen(3000);

