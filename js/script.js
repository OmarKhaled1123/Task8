var allProducts = document.querySelectorAll(".list li");
var div = document.querySelector("#content");
var btn = document.querySelector("#btn");
var totalPrice = 0;

allProducts.forEach(function (item) {
item.onclick = function () {
    div.innerHTML += item.textContent + " ";
    totalPrice += +item.getAttribute("price");
    if (div.innerHTML !== "") {
    btn.style.display = "block";
        }
    };
});

btn.onclick = function () {
    div.innerHTML += "Total Price: $" + totalPrice;
};