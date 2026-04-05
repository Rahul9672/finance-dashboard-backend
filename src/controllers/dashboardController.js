const service = require('../services/dashboardService');

exports.summary = (req, res) => {
  res.json(service.getSummary());
};