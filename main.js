var personal = document.getElementById("personal");
var personalDrop = document.getElementById("personal-drop");

var business = document.getElementById("business");
var businessDrop = document.getElementById("business-drop");

//display and hide personal dropdown
personal.addEventListener("click", show);
personal.addEventListener("mouseout", hide);

personalDrop.addEventListener("mouseover", show);
personalDrop.addEventListener("mouseout", hide);
function show() {
  personalDrop.style.display = "flex";
}

function hide() {
  personalDrop.style.display = "none";
}

//display and hide business dropdown
business.addEventListener("click", showBus);
business.addEventListener("mouseout", hideBus);

businessDrop.addEventListener("mouseover", showBus);
businessDrop.addEventListener("mouseout", hideBus);
function showBus() {
  businessDrop.style.display = "flex";
}

function hideBus() {
  businessDrop.style.display = "none";
}
