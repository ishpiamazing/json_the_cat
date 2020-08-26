const request = require('request');
//const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
//const url = "https://aanbas.com/v1/breed/search?q=";


const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName,(error,response,body)=> {

    if (error) {
      callback(error,body);
      return;
    }
    if (body === "[]") {
      callback(error,null);
      return;
    }

   
    const data = JSON.parse(body);
    
    
    callback(error,data[0].description);
    return;
    
    
 
  });

};

// const checkError = function(error, body) {
//   if (!error) {
//     console.log(body);
//     return;
//   }
//   console.log(null);
  

// };

//fetchBreedDescription(breedName,checkError);

module.exports = fetchBreedDescription;