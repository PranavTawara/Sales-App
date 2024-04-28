const express = require('express');
const PORT = 4000;
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGOBD_URL } = require('./config');

// Connect to MongoDB
mongoose.connect(MONGOBD_URL);

mongoose.connection.on('connected', () => {
    console.log('DB connected');

    // Clear the database (remove all records) when connected to the database
    clearDatabase();
});

mongoose.connection.on('error', (error) => {
    console.log('Some error while connecting to DB:', error);
});

require('./models/user_model');
require('./models/sale_model');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(require('./routes/user_route'));
app.use(require('./routes/topsale_route'));

app.listen(PORT, () => {
    console.log('Server started');
});

// Function to clear the database
async function clearDatabase() {
    try {
        // Clear User collection
        await mongoose.model('UserModel').deleteMany({});

        // Clear Sale collection
        await mongoose.model('Sale').deleteMany({});

        console.log('Database cleared successfully.');
    } catch (error) {
        console.error('Error clearing database:', error);
    }
}
