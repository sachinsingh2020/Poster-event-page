const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");
const radio3 = document.querySelector(".radio3");

console.log(radio1);
console.log(radio2);
console.log(radio3);


radio1.addEventListener("click", () => {
    location.href = "./member-1.html";
})
radio2.addEventListener("click", () => {
    location.href = "./member-2.html";
})
radio3.addEventListener("click", () => {
    location.href = "./member-3.html";
})
