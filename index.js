const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

const taskSchema = new mongoose.Schema({
  title: String,
  priority: String
});

const Task = mongoose.model('Task', taskSchema);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});