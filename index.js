const express = require('express')
const sequelize = require('./db')
const router = require('./routes')
const passport = require('passport')
//не вызывается, но нужно для синхронизации моделей
const User = require('./model/user')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(passport.initialize())
require('./middleware/passport')(passport)

async function startBd() {
  try {
    await sequelize.authenticate() //проверка работы базы
    app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startBd()

// Синхронизация с моделями
// удаляет все таблицы в базе и создает заново
// sequelize.sync({ force: true }).then(result => {
//   console.log("result done");
// })
//   .catch(err => console.log(err));