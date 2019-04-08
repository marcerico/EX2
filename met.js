const request = require('request')

const url : 'https://collectionapi.metmuseum.org/public/collection/v1/search'

function getMet(myString){
  request({url: url , json: true},function(error,response){
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
              const objectIDs = {
                total: response.total,
                objectIDs: [
                  int : response.int[0]
            ]
              }
    }

  })
}

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
            title: response.title,
            year: response.objectEndDate,
            technique: response.medium,
            metUrl: response.objectURL
          }
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

module.exports = {
  getMet = getMet
  appobjectID = appobjectID
}
