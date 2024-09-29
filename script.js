let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice"); // Assuming you have an element with this ID for displaying voice status

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Rohit");
    } else if (hours >= 12 && hours < 17) { // Changed to 17 for afternoon
        speak("Good Afternoon Rohit");
    } else if (hours >= 17 && hours < 21) { // Changed to 21 for evening
        speak("Good Evening Rohit");
    } else {
        speak("Good Night Rohit");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hello Rohit, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, developed by Rohit.");
    } 

    // Me
    else if (message.includes("about me")) {
        speak("Your name is Rohit. Currently, you are pursuing B.Tech in CSE from Budge Budge Institute of Technology. Here is your profile on LinkedIn.");
        window.open("https://www.linkedin.com/in/rohit-yaduvanshi-0493752a1/");
    }
    // Github
    else if (message.includes("open my github")) { 
        speak("Opening your GitHub...");
        window.open("https://github.com/rohitYaduvanshi", "_blank");
    }

    // indusai
    else if (message.includes("open indus ai website")) { 
        speak("Opening your SIH website...");
        window.open("https://indusai.netlify.app/", "_blank");
    }
    else if (message.includes("vicky prasad profile")) { 
        speak("Yes here is it");
        window.open("https://www.linkedin.com/in/abvicky/", "_blank");
        window.open("https://www.linkedin.com/in/isha-gupta-470508221/", "_blank");
    }

    else if (message.includes("isha gupta profile")) { 
        speak("Yes here is it");
        window.open("https://www.linkedin.com/in/isha-gupta-470508221/", "_blank");
    }
    else if (message.includes("do you know tensor geek")) { 
        speak("Yes, I know This is your SIH[Smart India hackathon team which is Leading by Isha Gupta and Vicky prasad mahato");
    }
    // youtube
    else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    }
    // Google
    else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } 
    // play song
    else if (message.includes("play song")) {
        speak("Okay Rohit...");
        window.open("https://www.youtube.com/watch?v=bgvp2hdwxT8&list=RDbgvp2hdwxT8&start_radio=1", "_blank");
    } 
    // Instagram
    else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } 
    // Calculator
    else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } 
    // Whatsapp
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } 
    // Apna College
    else if (message.includes("open Apna college website")) {
        speak("Opening the website...");
        window.open("https://www.apnacollege.in/");
    } 
    // ChatGpt
    else if (message.includes("open ChatGPT")) {
        speak("Opening ChatGPT...");
        window.open("https://chatgpt.com/");
    } 
    // time
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } 
    // date
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    
    else {
        let searchMessage = message.replace(/sini|sini/g, "").trim(); // Clean the message
        let finalText = "This is what I found on the internet regarding " + searchMessage;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${searchMessage}`, "_blank");
    }
}
