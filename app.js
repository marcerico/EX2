const express = require('express')
const request = require('request')
const readline = require('readline')
const met = require('met.js')

//heroku (heroku https://git.heroku.com/mini-web-server9658.git
const publicDir = path.join(__dirname, 'EX2')
const app = express()

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
})

function appobjectID(objectID){
  const urldos = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/objectID'
  request({url : urldos , json : true},function(error,response){
        if(error){
          callback('ERROR',undefined)
        }
        else if(response.statusCode === '403'){
          callback('Invalid ID',undefined)
        }
        else if(response.statusCode === '400'){
          callback('Bad Request',undefined)
        }
        else{
            const data= {
            artist : constituents[0].name,
            title: title,
            year: objectEndDate,
            technique: medium,
            metUrl: objectURL
          }
          const datafinal={
                searchTerm: req.query.search,
                artist : constituents[0].name,
                title: title,
                year: objectEndDate,
                technique: medium,
                metUrl: objectURL
          }
        }
      }
}


}

app.get('*', function(req, res) {
  res.send({
    error: 'Esta ruta no existe'
  })
})

app.listen(3000, function() {
  console.log('up and running')
})
