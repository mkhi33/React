const express = require('express');
const connectDB = require('./config/db');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json({ extended: true }));

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