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
  await db('hobbits').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('hobbits model', () => {
  describe('getAll', () => {
    test('resturns all hobbits in db', async () => {
      const data = await Hobbit.getAll()
      expect(data).toHaveLength(4)
    })
    test('resturns the correct hobbits with all their props', async () => {
      const data = await Hobbit.getAll()
      expect(data).toMatchObject('foo')
    })
  })
})
