module.exports = {
  'rules': {
    /**
     * Validation rules for insert method.
     */
    'insert': container.validator.register({
      name: container.validator.
          string().
          required(),
    }),

    /**
     * Validation rules for update method.
     */
    'update': container.validator.register({
      id: container.validator.
          custom('exists', 'id', 'social_status').
          number().
          required(),
      name: container.validator.
          string(),
    }),
  },
  'apply': (method) => {
    return module.exports.rules[method].validate();
  },
};
