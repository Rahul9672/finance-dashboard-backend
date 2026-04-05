const { v4: uuid } = require('uuid');
const store = require('../store/store');

exports.createRecord = (data, userId) => {
  const record = {
    id: uuid(),
    userId,
    amount: data.amount,
    type: data.type,
    category: data.category,
    date: data.date || new Date(),
    note: data.note
  };

  store.records.push(record);
  return record;
};

exports.getRecords = () => store.records;

exports.deleteRecord = (id) => {
  store.records = store.records.filter(r => r.id !== id);
};