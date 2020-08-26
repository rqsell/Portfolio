document.querySelector('.get-image').onclick= getImage;
function getImage() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res)=> {
        document.querySelector(".images").innerHTML +=`<img src= "${res.data.message}"/>`
    })
    
} 

