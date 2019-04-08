const express = require('express')
const request = require('request')
const readline = require('readline')
const met= require('met.js')

const app = express()

const publicDir = path.join(__dirname, 'EX2')


//heroku (heroku https://git.heroku.com/mini-web-server9658.git
/*  input: process.stdin,
  output: process.stdout
})

rl.question('Cual es tu matricula?', function(id) {
  console.log(id)
  rl.close();
});
rl.question('Cual es tu nombre?', function(nombre) {
  console.log(nombre)
  rl.close();
});*/

let id = 'A01039658'

app.get('/students/: id', function(req, res) {
  res.send({
    id: req.params.id,
    fullname: "Marcela",
    nickname: "Rico",
    age: 22
  })
})

app.get('/met', function(req, res) {
  if( !req.query.search ) {
    return res.send({
      error: 'ERROR'
    })
  }
  else if (req.query.search){
    getMet(myString)
    appobjectID(objectIDs)
  }
})



app.get('*', function(req, res) {
  res.send({
    error: 'Esta ruta no existe'
  })
})

app.listen(3000, function() {
  console.log('up and running')
})
