const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL
}

app.use(cors(corsOptions));

const port = process.env.PORT || 4000;

app.use(express.json({ extended: true }));

app.use(express.static('uploads'))

connectDB();

// App routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/links', require('./routes/links'));
app.use('/api/files', require('./routes/files'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});