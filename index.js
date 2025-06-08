const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// ✅ Correct MongoDB URI
// If your password is `sahil@123`, encode it as `sahil%40123`
const mongoURI = 'mongodb+srv://sahil:sahil%40todo22@cluster0.gw5nmjf.mongodb.net/todo-app?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  // These options are no longer needed in mongoose 7+
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Connection error", err));

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

// Routes
app.get('/', async (req, res) => {
  const todos = await Task.find();
  res.render('index', { todos });
});

app.post('/add', async (req, res) => {
  const { task, priority } = req.body;
  if (!task.trim()) {
    return res.send('<script>alert("Please enter a task"); window.location.href="/";</script>');
  }
  await Task.create({ title: task, priority });
  res.redirect('/');
});

app.post('/edit', async (req, res) => {
  const { id, task, priority } = req.body;
  await Task.findByIdAndUpdate(id, { title: task, priority });
  res.redirect('/');
});

app.post('/delete', async (req, res) => {
  const { id } = req.body;
  await Task.findByIdAndDelete(id);
  res.redirect('/');
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});
