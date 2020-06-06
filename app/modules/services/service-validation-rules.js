module.exports = {
  'rules': {
    /**
     * Validation rules for insert method.
     */
    'insert': container.validator.register({
      name: container.validator.
          string().
          required(),
      type: container.validator.
          string().
          required(),
      date: container.validator.
          date().
          required(),
      capacity: container.validator.
          number().
          required(),
      availableSeats: container.validator.
          number().
          required(),
      church: container.validator.
          object().
          required(),
    }),

    /**
     * Validation rules for update method.
     */
    'update': container.validator.register({
      id: container.validator.
          custom('exists', 'id', 'services').
          number().
          required(),
      name: container.validator.
          string(),
      type: container.validator.
          string(),
      date: container.validator.
          date(),
      capacity: container.validator.
          number(),
      availableSeats: container.validator.
          number(),
      church: container.validator.
          object(),
    }),
  },
  'apply': (method) => {
    return module.exports.rules[method].validate();
  },
};
