const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('VaultX Secure MongoDB Connected')).catch(err => console.error('DB Connection Error:', err));

// Test Route
app.get('/', (req, res) => {
  res.json({ status: 'VaultX Enterprise Backend Running Securely' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`VaultX Server active on port ${PORT}`));