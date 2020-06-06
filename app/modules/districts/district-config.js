module.exports = {
  'district': {
    'relations': {
      'all': '[city]',
      'find': '[city]',
      'findBy': '[]',
      'paginate': '[]',
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
