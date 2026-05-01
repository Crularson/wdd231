function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkState").textContent = "ID, WY, MT"
    document.getElementById("heroImage").src = "./images/yellowstone.jpg"
}

updateParkInformation()