// const express = require('express');
// const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const cors = require('cors');
// const LoginRoutes = require("./routes/login");
// require("dotenv").config

// const app = express();
// app.use(express.json());
// app.use('/api', LoginRoutes)
// // app.use(cors());

// const PORT = process.env.PORT || 3000;


// app.get('/',  (req, res) => {
//   res.send("Welcome to my api")
// })

// // MongoDB connection
// mongoose.connect('mongodb+srv://eliastavarez536:g9zSQEI2KuEmE5x0@cluster0.wqkisd7.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('conecte mongoDB')).catch((error) => console.error(error))


// mongoose.connect('mongodb://localhost:27017/login-api/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const UserSchema = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', UserSchema);

// // Routes
// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
