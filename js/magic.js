document.querySelector('.get-image').onclick = getImage;

function getImage() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
        document.querySelector(".images").innerHTML += `<img src= "${res.data.message}"/>`
    })

}

document.querySelector('.go-page-jada').onclick = gopage;

function gopage() {


    axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs').then((res) => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
            first = res.data[i].first_name.charAt(0).toUpperCase() + res.data[i].first_name.slice(1);
            last = res.data[i].last_name.charAt(0).toUpperCase() + res.data[i].last_name.slice(1);
            console.log(res.data[i])
            let person = res.data[i]
            document.querySelector('.person').innerHTML += `<h2>${first} ${last}</h2> <a href="${person.website}">Portfolio </a> `

        }
    })
}

// //Artsy API
// function getArt() {
//     let artist = 'ana-mendieta'
//     axios.post(`https://api.artsy.net/api/tokens/xapp_token?client_id=1eba11dd5728224e4393&client_secret=c89b30364999a2ed914e76f8a195fa76`).then((res) => {
//         console.log(res.data)
//         axios.get(`https://api.artsy.net/api/artists/${artist}`, {
//             headers: {
//                 'X-Xapp-Token': res.data.token

//             }
//         }).then(artist => {
//             console.log(artist)
//         })

//     }).catch(error => console.log(error))

// }
// getArt();