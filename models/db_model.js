const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    eventDate: {type: Date, required: true},
    createdDate: { type: Date, default: Date.now },
    tag: {type: String, default: "demoTag"},
    
  });

module.exports = mongoose.model('Todo', todoSchema);