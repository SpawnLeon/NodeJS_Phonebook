// @ts-check

let id = 1000;

export const nextId = () => {
  id += 1;
  return id;
};

export const validate = ({ name, phone }) => {
  const errors = [];
  const errorMessages = {
    emptyMessage: 'can\'t be blank',
    badFormat: 'bad format',
  };

  if (!name) {
    errors.push({ source: 'name', title: errorMessages.emptyMessage });
  }
  if (!name.match(/^[\w.]+$/)) {
    errors.push({ source: 'name', title: errorMessages.badFormat });
  }
  if (!phone) {
    errors.push({ source: 'phone', title: errorMessages.emptyMessage });
  }
  return errors;
};
