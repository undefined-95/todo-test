require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/tasks', tasks);

module.exports = app;
