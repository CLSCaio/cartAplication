require('../../database/produtos')

module.exports = app => {
  app.get('/', (req, res) => {
    return res.json(db)
  })
}