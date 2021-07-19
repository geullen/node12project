const app = require('./app')

app.listen(3000, e => {
  if (e) return console.error(e)
  
  console.log('Listen port 3000')
})
