const express = require('express')
const request = require('request')
const readline = require('readline')


const app = express()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Cual es tu matricula?', function(matricula) {
  console.log(matricula)
  rl.close();
});
rl.question('Cual es tu nombre?', function(nombre) {
  console.log(nombre)
  rl.close();
});

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
app.get('/students/: matricula', function(req, res) {
  res.send({
    matricula: req.question.matricula,
    fullname: req.question.nombre,
    nickname: "Strider",
    age: 87
  })
})

app.get('/met: search', function(req, res) {
  if( !req.query.search ) {
    return res.send({
      error: 'ERROR'
    })
  }
})

app.listen(3000, function() {
  console.log('up and running')
})
