const Internship = "I'm searching for an internship as web developer";
const InternshipDates = "From 5th of May 2025 to 28th of June 2025";
const TypingSpeed = 100;

/* Home Page */ 

// Left bubble
const textLeft = document.getElementById("text-left");
const bubbleLeft = document.getElementById("bubble-left");
console.log(bubbleLeft);

// Rigth bubble
const textRight = document.getElementById("text-rigth");
const bubbleRight = document.getElementById("bubble-right");
console.log(bubbleRight);

function typeText(text, element, callback){
    let i = 0;
    const interval = setInterval(()=>{
        if(i < text.length){
            element.textContent += text[i];
            i++;
        }
        else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, TypingSpeed);
}

function animateBubbles(){
    // Init
    bubbleLeft.classList.remove("seen");
    bubbleRight.classList.remove("seen");
    textLeft.textContent = "";
    textRight.textContent = "";

    // First bubble
    setTimeout(()=>{
        bubbleLeft.classList.add("seen");
        typeText(Internship, textLeft, ()=>{
            // Second bubble
            setTimeout(()=>{
                bubbleRight.classList.add("seen");
                typeText(InternshipDates,textRight,()=>{
                    // Dispearance for bubbles
                    setTimeout(()=>{
                        bubbleLeft.classList.remove("seen");
                        bubbleRight.classList.remove("seen");
                        // start this loop again
                        setTimeout(animateBubbles, 1000);
                    },5000);
                });
            },1000)
        });
    }, 500);
}

animateBubbles();











// I want to diplay the text progressively

// let i = 0;

// function typeText(){
//     if(i< Internship.length){
//         textLeft.textContent += Internship[i];
//         i++;
//         setTimeout(typeText,TypingSpeed);
//     }
// }
// window.addEventListener("load", typeText);