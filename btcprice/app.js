const btc = document.getElementById("btc");
const vysledky = document.querySelector(".vysledky");
const obrazkos = document.querySelector(".obrazek");

const APIKEY = "CG-BUp7Nf6AARRuauo2g9o8QUTt";
const LINK = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=";

// let jeZobrazeno = false;

// async function showPrice() {
//     try {
//         const response = await fetch(LINK + APIKEY);
//         const data = await response.json();
//         console.log(data);
//         //cena
//         const price = data.map(btc => btc.current_price);
//         //ath
//         const ath = data.map(btc => btc.ath);
//         //image
//         const img = data.map(btc => btc.image);

//         if(!jeZobrazeno){
//         const newP = document.createElement("p");
//         newP.innerHTML = `Současná cena BTC je: ${price}<br>ATH BTC je: ${ath}<br>Tedy procentálně to je ${Math.round((price / ath) * 100)} % z bývalého ATH`;
//         vysledky.appendChild(newP);

//         const newImg = document.createElement("img");
//         newImg.src = img;
//         obrazkos.appendChild(newImg);
//         } else {
//             return
//         }
//         jeZobrazeno = !jeZobrazeno;
//     }
//     catch (error) {
//         console.error("Error: ", error);
//     }
// }

// btc.addEventListener("click", showPrice);

const form = document.getElementById("forma");

let ticker = "";
let měna = "";

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    try {

    ticker = document.getElementById("input1").value.toLowerCase();
    měna = document.getElementById("input2").value.toUpperCase();
    console.log(ticker, měna);

    const response = await fetch (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${měna}&ids=${ticker}&x_cg_demo_api_key=${APIKEY}`)
    const data = await response.json();
        //cena
        const price = data.map(krypto => krypto.current_price)
        //ath
        const ath = data.map(krypto => krypto.ath);
        //image
        const img = data.map(krypto => krypto.image);
        
        console.log(price, ath, img);

        const vysledkyInput = document.querySelector(".vysledkyInput");
        const obrazkos2 = document.querySelector(".obrazkos2");

            vysledkyInput.innerHTML = "";
            obrazkos2.innerHTML = "";
      

        const newP = document.createElement("p");
        
        newP.innerHTML = `<strong>Současná cena ${ticker} je:</strong> <span style="color: blue; font-size: 17px;">${price} ${měna}</span><br><strong>ATH ${ticker} je:</strong><span style="color: red; font-size: 20px;"> ${ath} ${měna}</span><br>Tedy procentálně to je <strong><span style="color: green; font-size: 20px;">${Math.round((price / ath) * 100)} %</span></strong> z bývalého ATH`;
        vysledkyInput.appendChild(newP);

        const newImg = document.createElement("img");
        newImg.src = img;
        obrazkos2.appendChild(newImg);

    console.log(data);
} catch (error) {
    console.error("Error: ", error);
}
});




