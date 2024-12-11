const Internship = "I'm searching for an internship as web developer";
const InternshipDates = "From 5th of May 2025 to 28th of June 2025";
const TypingSpeed = 100;

/***************** Home Page ******************/ 

// Left bubble
const textLeft = document.getElementById("text-left");
const bubbleLeft = document.getElementById("bubble-left");
// console.log(bubbleLeft);

// Right bubble
const textRight = document.getElementById("text-rigth");
const bubbleRight = document.getElementById("bubble-right");
// console.log(bubbleRight);

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

// Function for HomePage

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
                        setTimeout(animateBubbles, 2000);
                    },5000);
                });
            },1000)
        });
    }, 500);
}

window.addEventListener("load", animateBubbles);


// animateBubbles();


/*************** Contact Page ****************/ 

const phrases = [Internship, InternshipDates];
const PirateBubble = document.getElementById('speech-bubble');
const BubbleContent = document.getElementById("bubble-content");
// console.log(PirateBubble);
// console.log(BubbleContent);

function bubblePirate(){
    PirateBubble.classList.remove("seen");
    BubbleContent.textContent = "";
    setTimeout(()=>{
        // Display bubble
        PirateBubble.classList.add("seen");
        displayNextPhrase();
    },500)
}

let currentPhrase = 0;
function displayNextPhrase() {
    if (currentPhrase < phrases.length) {
        BubbleContent.textContent = "";
        typeText(phrases[currentPhrase], BubbleContent, () => {
            currentPhrase++;
            setTimeout(displayNextPhrase, 1000); 
        });
    } else {
        setTimeout(() => {
            currentPhrase = 0;
            PirateBubble.classList.remove("seen");
            setTimeout(bubblePirate, 500);
        }, 4000);
    }
}

window.addEventListener("load", bubblePirate);

// bubblePirate();




// Test function
//  I want to diplay the text progressively

// let i = 0;

// function typeText(){
//     if(i< Internship.length){
//         textLeft.textContent += Internship[i];
//         i++;
//         setTimeout(typeText,TypingSpeed);
//     }// }
// window.addEventListener("load", typeText);=