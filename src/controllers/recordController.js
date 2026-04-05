const service = require('../services/recordService');
const { validateRecord } = require('../utils/validator');

exports.create = (req, res) => {
  const error = validateRecord(req.body);
  if (error) return res.status(400).json({ msg: error });

  const record = service.createRecord(req.body, req.user.id);
  res.status(201).json(record);
};

exports.get = (req, res) => {
  res.json(service.getRecords());
};

exports.delete = (req, res) => {
  service.deleteRecord(req.params.id);
  res.json({ msg: 'Deleted' });
};