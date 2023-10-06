let closes = document.querySelector('#x');
let black = document.querySelector('.sentance');
let items = document.querySelector('.item')
let scrolls = document.querySelector('.scroll .child');
let cards = document.querySelectorAll('.perfiction .card');
let icon = document.querySelectorAll('.perfiction .card i');
console.log(icon);



    const arr=[
        {
            title:"title1",
            description:"Description1",
            image:"./image/phone1.jpg",
        }, {
            title:"title2",
            description:"Description2",
            image:"./image/phone1.jpg"
        }, {
            title:"title3",
            description:"Description3",
            image:"./image/phone1.jpg"
        }, {
            title:"title4",
            description:"Description4",
            image:"./image/phone1.jpg"
        }, {
            title:"title5",
            description:"Description5",
            image:"./image/phone1.jpg"
        }, {
            title:"title6",
            description:"Description6",
            image:"./image/phone1.jpg"
        },
    ]
    const result = fetch("https://dummyjson.com/products") 
    .then(function (result) {
        return result.json();
    })
    .then(function (result) {
        displayData(result.products);
    }); 

    function displayData(arr) {

    for (let index = 0; index < 6; index++) {
    const cardsArea = document.querySelector(".cards-area");

    const div1 = document.createElement("div");


    div1.classList = "col-md-4 col-sm-12";


    const div2 = document.createElement("div");
    div2.classList = "card mb-3";


    const img = document.createElement("img");
    img.src = arr[index].images[0];
    img.classList = "card-img-top";


    const div3 = document.createElement("div");
    div3.classList = "card-body";

    
    const h5 = document.createElement("h5");
    h5.classList = "card-title";
    h5.innerText =arr[index].title;

    const h4=document.createElement('h4');
    h4.innerHTML=arr[index].price+"$";

    
    const p = document.createElement("p");
    p.classList = "card-text";
    p.innerText = arr[index].description;

    div3.append(h5);
    div3.append(p);
    div3.append(h4);

    
    div2.append(img);
    div2.append(div3);

    
    div1.append(div2);

    cardsArea.append(div1);

    }
    }













fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(json =>view(json))

let flags=document.getElementById('flagss');
function view(el){
    let output="";

el.forEach(element => {
    output +=
    `
    <li> ${element.name.common} <img src="${element.flags.svg}" alt="" width="20px">  </li>
    `
});
console.log(output);
flags.innerHTML=output;
}


