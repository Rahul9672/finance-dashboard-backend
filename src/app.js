const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ msg: err.message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});