const db = require('../../data/dbConfig.js')
const Hobbit = require('./hobbits-model')

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  // reseed the tables
})
afterAll(async () => {
  // disconnect from the db
})
