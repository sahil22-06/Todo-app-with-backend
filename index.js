const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// MongoDB URI
const mongoURI = 'mongodb+srv://sahil:sahiltodo12@cluster0.gw5nmjf.mongodb.net/todo-app?retryWrites=true&w=majority';

// MongoDB Connection
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error", err));

// Schema Definition
const taskSchema = new mongoose.Schema({
  title: String,
  priority: String
});
const Task = mongoose.model('Task', taskSchema);

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Enable support for PUT and DELETE

// Routes
app.get('/', async (req, res) => {
  const todos = await Task.find();
  res.render('index', { todos });
});

// Add Task
app.post('/add', async (req, res) => {
  const { task, priority } = req.body;
  if (!task.trim()) {
    return res.send('<script>alert("Please enter a task"); window.location.href="/";</script>');
  }
  await Task.create({ title: task, priority });
  res.redirect('/');
});

// Edit Task (PUT)
app.put('/edit/:id', async (req, res) => {
  const { task, priority } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { title: task, priority });
  res.redirect('/');
});

// Delete Task (DELETE)
app.delete('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
