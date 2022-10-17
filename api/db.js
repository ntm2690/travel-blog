import mysql2 from 'mysql2'

export const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password:"Minh123456",
    database:"blog"
})

// db.connect()

// db.query('SELECT * FROM users', (err, rows, fields) => {
//   if (err) throw err
//   console.log('The solution is: ', rows[0].solution)
// })

// db.end()