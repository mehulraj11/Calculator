var input = document.querySelector("#input");
var clear = document.querySelector("#clear");
var equal = document.querySelector("#equal");
var button = document.querySelectorAll(".number");
for (var i = 0; i < button.length; i++) {
    input.value = "0";
    button[i].addEventListener("click", function (e) {
        if (input.value === "0") {
            input.value = "";
        }
        input.value = input.value + e.target.innerHTML;
    })
}
clear.addEventListener("click", function () {
    input.value = "0";
})
equal.addEventListener("click", function () {
    var result = eval(input.value);
    input.value = result;
})