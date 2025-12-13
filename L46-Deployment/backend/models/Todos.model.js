const { Schema, default: mongoose } = require("mongoose");

const todoSchema = new Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Todos', todoSchema);