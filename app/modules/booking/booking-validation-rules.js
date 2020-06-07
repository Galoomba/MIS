module.exports = {
  'rules': {
    /**
     * Validation rules for insert method.
     */
    'insert': container.validator.register({
      //
    }),
    'calldown': container.validator.register({
      day: container.validator.
          number().min(0).max(30).
          required(),
      month: container.validator.
          number().
          required(),
    }),
    /**
     * Validation rules for update method.
     */
    'update': container.validator.register({
      //
    }),
  },
  'apply': (method) => {
    return module.exports.rules[method].validate();
  },
};
