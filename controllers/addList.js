const Todo = require('../models/db_model')

module.exports = async (req,res)=>{
    try {
        const { title, content, eventDate, tag, image} = req.body;
        const todo = new Todo({ title, content, eventDate, tag, image });
        await todo.save();
        res.status(201).json({status:'CREATED', message: 'Todo added successfully' });
      } catch (error) {
        res.status(500).json({ status:'ERROR', message: error.message });
      }
}