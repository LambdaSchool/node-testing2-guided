const db = require('../../data/dbConfig.js')
const Hobbit = require('./hobbits-model')

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

