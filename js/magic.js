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