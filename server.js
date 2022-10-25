const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3030;

require('dotenv').config();

mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected to database!'))

app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "Users API"})
});

const usersRouter = require('./routes/users')
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
