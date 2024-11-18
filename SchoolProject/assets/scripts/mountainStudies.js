
const hiker = document.querySelector(".hiker");
// console.log(hiker);
const dates = document.querySelectorAll(".date");
console.log(dates);

dates.forEach(date => {
    // console.log("coucou");
    date.addEventListener("click", function(){
        if(date.classList == "date top1"){
            hiker.style.transitionDuration = "0.3s";
            hiker.style.transitionTimingFunction= "ease-in-out";
            hiker.style.gridArea = "top1";
            hiker.style.justifySelf = "end";
            alert("2007 - Institut des Dames de Marie - CESS 'Grande Distinction'");
        }
        else if(date.classList == "date top2"){
            hiker.style.transitionDuration = "0.3s";
            hiker.style.transitionTimingFunction= "ease-in-out";
            hiker.style.gridArea = "top2";
            hiker.style.justifySelf = "end";
        }
        else if(date.classList == "date bottom1"){
            hiker.style.transitionDuration = "0.3s";
            hiker.style.transitionTimingFunction= "ease-in-out";
            hiker.style.gridArea = "bottom1";
            hiker.style.justifySelf = "center";
        }
        else if(date.classList == "date bottom2"){
            hiker.style.transitionDuration = "0.3s";
            hiker.style.transitionTimingFunction= "ease-in-out";
            hiker.style.gridArea = "bottom2";
            hiker.style.justifySelf = "center";
        }
    })
});
