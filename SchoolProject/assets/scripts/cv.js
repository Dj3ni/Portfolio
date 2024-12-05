const CV_BUTTON = document.getElementById("cv");
console.log(CV_BUTTON);
const PDF_DIV = document.querySelector(".pdf")
console.log(PDF_DIV);

CV_BUTTON.addEventListener("click", function(){
    PDF_DIV.style.display = "block";
})