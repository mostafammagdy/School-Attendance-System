const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//load the routers from other files
const teachersRouter = require('./routes/teachers');
const parentsRouter = require('./routes/parents');
const studentsRouter = require('./routes/students');
const classroomsRouter = require('./routes/classrooms');
const attendancesRouter = require('./routes/attendances');
const enrolledsRouter = require('./routes/enrolleds');
const secretarysRouter = require('./routes/secretarys');



app.use('/teachers', teachersRouter);
app.use('/parents', parentsRouter);
app.use('/students', studentsRouter);
app.use('/classrooms', classroomsRouter);
app.use('/attendances', attendancesRouter);
app.use('/enrolleds', enrolledsRouter);
app.use('/secretarys', secretarysRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
