const request = require('request');
const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
//const url = "https://aanbas.com/v1/breed/search?q=";

const catService = () => {
  request(url + breedName,(error,response,body)=> {

    if (error) {
      console.log("URL not found");
      return;
    }
    if (body === "[]") {
      console.log("Please enter the valid breed name");
      return;
    
    }

    // console.log("---");
    // console.log(body);
    // console.log("---");
    // console.log(typeof body);

    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  });

};

catService();