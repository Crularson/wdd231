function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkState").textContent = "ID, WY, MT"
    document.getElementById("heroImage").src = "./images/yellowstone.jpg"
}

updateParkInformation()

function addEventListeners() {
  const menuTrigger = document.querySelector("#header-menu-trigger");
  const menuOptions = document.querySelector("#header-menu-options");
  const parkInfo = document.querySelector("#parkInfo");

  // MENU toggle
  if (menuTrigger && menuOptions) { // Don't add these listeners if the elements don't exist
    menuTrigger.addEventListener("click", () => {
      menuOptions.classList.toggle("is-hidden");
    });

    // Event delegation (single listener)
    menuOptions.addEventListener("click", (event) => {
      const itemName = event.target.textContent;
      console.log(itemName);
    });
  }

  // Overlay hover color toggle
  if (parkInfo) { // Don't add these listeners if the element doesn't exist
    parkInfo.addEventListener("mouseenter", () => {
      parkInfo.classList.add("parkInfo-hover");
    });

    parkInfo.addEventListener("mouseleave", () => {
      parkInfo.classList.remove("parkInfo-hover");
    });
  }
}


addEventListeners();