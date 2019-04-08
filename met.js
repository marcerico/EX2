const request = require('request')

const url : 'https://collectionapi.metmuseum.org/public/collection/v1/search'

function getMet(search){
  request({url: url , json: true},function(error,response){
    if(error){
      callback('ERROR',undefined)
    }
    else{
              const objectIDs = {
                "total": 666,
                "objectIDs": [
                  int : int[0]
            ]
              }
    }
    else if(response.statusCode === '403'){
      callback('Invalid ID',undefined)
    }
    else if(response.statusCode === '400'){
      callback('Bad Request',undefined)
    }
  })
  appobjectID(objectIDs)
}

module.exports = {
  getMet = getMet
}
