# 📝 Todo List App

A dynamic and responsive Todo List web application built using **Node.js**, **Express**, and **EJS**, with full CRUD functionality and data stored on the backend using a simple data model.

---

## 🔧 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 🎯 Filter by priority
- ⚠️ Input validation
- 📱 Fully responsive UI
- 💾 Backend logic using Express + EJS

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Storage**: MongoDB with Mongoose
- **Environment**: dotenv for configuration

---

## 🚀 Live Demo

🌐 [Todo App on Render](https://todo-app-with-backend.onrender.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
```

### 4. Start the server
```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

The app will be running at: `http://localhost:3000` (or the port specified in your environment)

---

## 📂 Project Structure

```
todo-app/
│
├── models/
│   └── Task.js
│
├── node_modules/
│
├── public/
│   └── style.css
│
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── index.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🚀 Deployment

### Heroku
1. Create a new Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Vercel
1. Import your GitHub repository
2. Set environment variables
3. Deploy

---

## 🧠 Future Enhancements

- 🔒 User authentication (login/register)
- 🌙 Dark mode
- ⏰ Due date reminders
- 📊 Task analytics

---

## 📃 License

MIT License. Feel free to use and modify.

---

## 🙌 Author

**Sahil Shakil Shaikh**  
_B.Tech CSE Student | Passionate Web Developer_

📫 Connect: [LinkedIn](https://www.linkedin.com/in/sahil-shakil-shaikh)
