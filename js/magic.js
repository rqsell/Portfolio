document.querySelector('.get-image').onclick= getImage;
function getImage() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res)=> {
        document.querySelector(".images").innerHTML +=`<img src= "${res.data.message}"/>`
    })
    
} 

var request = require('superagent');

var clientID = '1eba11dd5728224e4393',
    clientSecret = 'c89b30364999a2ed914e76f8a195fa76',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(res) {
    xappToken = res.body.token; 
  });