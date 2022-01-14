const app = require('express')()
const consign = require('consign')

const port = 27127
 
consign()
  .then('src/config/middlewares')
  .then('src/api/methods')
  .into(app)

app.listen(port, () => {
  console.log(`Server executando em http://localhost:${port}...`)
})

