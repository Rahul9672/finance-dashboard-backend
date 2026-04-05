exports.validateRecord = (data) => {
  if (!data.amount || !data.type) {
    return 'Amount and type required';
  }
  return null;
};

exports.validateUser = (data) => {
  if (!data.name || !data.role) {
    return 'Name and role required';
  }
  return null;
};