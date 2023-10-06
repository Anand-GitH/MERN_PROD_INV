const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb+srv://anandgravitate:admin@cluster0.k3x8ki2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Use your routes
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
