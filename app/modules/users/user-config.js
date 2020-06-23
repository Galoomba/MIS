module.exports = {
  'user': {
    'relations': {
      'all': '[roles.permissions]',
      'find': '[roles.permissions,churches]',
      'findBy': '[]',
      'paginate': '[roles.permissions]',
      'paginateBy': '[]',
    },
    'allowedRelations': {
      'insert': '[]',
      'update': '[]',
    },
    'upsertOptions': {
      'insert': {relate: true, unrelate: true},
      'update': {relate: true, unrelate: true, noDelete: true},
    },
  },
};
