const store = require('../store/store');

exports.getSummary = () => {
  let income = 0;
  let expense = 0;

  store.records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  };
};