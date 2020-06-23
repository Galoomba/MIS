module.exports = {
  'rules': {
    'insert': container.validator.register({
      email: container.validator.
          custom('unique', 'email', 'user').
          string().
          required().
          email(),
      password: container.validator.
          string().
          required(),
      name: container.validator.
          string().
          required(),
      phone: container.validator.
          string().
          required(),
    }),

    /**
     * Validation rules for update method.
     */
    'update': container.validator.register({
      id: container.validator.
          custom('exists', 'id', 'user').
          number().
          required(),
      email: container.validator.
          custom('unique', 'email', 'user').
          string().
          email(),
      password: container.validator.
          string(),
      name: container.validator.
          string(),
      phone: container.validator.
          string(),
      userNumber: container.validator.
          string(),
    }),
    /**
     * Validation rules for login method.
     */
    'login': container.validator.register({
      email: container.validator.
          string().
          required(),
      password: container.validator.
          string(),
    }),
  },
  'apply': (method) => {
    return module.exports.rules[method].validate();
  },
};
