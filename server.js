const express = require('express');
const mongoose = require('mongoose');
const users = require('./roots/api/users');
const profile = require('./roots/api/profile');
const posts = require('./roots/api/posts');


const app = express();
const db = require('./config/keys').mongoURI;

mongoose
.connect(db)
.then(() =>console.log('mongoDB connnected'))
.catch(err => console.log(err));

app.get('/',(req, res) => res.send('hello'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`))