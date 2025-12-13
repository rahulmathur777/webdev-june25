const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const Todos = require('./models/Todos.model');
const app = express();
const PORT = 4444;
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/todos", async (req, res) => {
    try {
        let todos = await Todos.find({});
        res.send(todos);
    } catch (error) {
        res.status(500).json({
            message: "Unable to get Todos",
            error
        })
    }
})

app.post('/todos', async (req, res) => {
    try {
        const { name, description } = req.body
        await Todos.create({ name, description });
        res.redirect('/todos');
    } catch (error) {
        res.status(500).json({
            message: "Unable to add Todo",
            error
        })
    }
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})