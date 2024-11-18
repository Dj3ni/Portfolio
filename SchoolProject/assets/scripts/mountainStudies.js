
const hiker = document.querySelector(".hiker");
// console.log(hiker);
const dates = document.querySelectorAll(".dates");
// console.log(dates);

dates.forEach(date => {
    console.log("coucou");
    date.addEventListener("click", function(){
        hiker.style.gridArea = "top1";
    })
});
