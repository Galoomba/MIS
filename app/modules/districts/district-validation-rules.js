module.exports = {
  'rules': {
    /**
     * Validation rules for insert method.
     */
    'insert': container.validator.register({
      name: container.validator.
          string().
          required(),
      city: container.validator.object(),
    }),

    /**
     * Validation rules for update method.
     */
    'update': container.validator.register({
      id: container.validator.
          custom('exists', 'id', 'districts').
          number().
          required(),
      city: container.validator.object(),
      name: container.validator.
          string(),
      isAvailable: container.validator.
          number(),
    }),
  },
  'apply': (method) => {
    return module.exports.rules[method].validate();
  },
};
