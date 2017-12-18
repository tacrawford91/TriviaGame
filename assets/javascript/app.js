var trivia = {
    question: ["Where are cryptocurrencies legal?", "Who was the creator of BitCoin?", "What is the maximum number of bitcoins that will/can be produced?", "What is blockchain?", "Where was the first Bitcoin-ATM installed?","Which car manufactuer was the first to accept bitcoin?", "What is the name of the process used to obtain new bitcoins?","When was the idea for bitcoin first published?"," Which of these US states introduced the BitLicense regulation for cryptocurrency companies?","Which of the following is popularly used for storing bitcoins"],
    a:["United States", "Satoshi Nakamoto", "21 million","An algorithm developed to track the creation of all privately traded cryptocurrencies","Vancouver, Canada","Toyota","Digging","2012","New York","Stack"],
    b:["United States & China", "Dr. Dean Paraskavas","18 million", "a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and publicly.", "Tokyo, Japan","Saab","Drilling","2008","California","Pocket"],
    c:["United States & China & North Korea", "Unknown","30 million","a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and privately.", "No where","Ferrari","Chipping","2005","Texas","Wallet"],
    d:["All over the world", "Gerald Bernaldo", "25 million","An algorithm developed to track the creation of all cryptocurrencies", "Silicon Valley","Lamborghini","Minning","2007","Washington","Purse"],
    answer:["d" ,"c", "a","b","a","d","d","b","a","c"],
    image: ["./../TriviaGame/assets/images/bitcoin.jfif"]
}

// var superTrivia = [
//     question1{
//         question: ["what color is the sky?"]
//         a:["green"],
//         b:["blue"],
//         c:["red"],
//         d:["yellow"],
//         answer:["blue"]
//     }
//     question2{
//         question: ["what is upDawg?"]
//         a:["hello cat"],
//         b:["hello dog"],
//         c:["Whatsup Dawg"],
//         d:["bad dog"],
//         answer:["Whatsup Dawg"]
//     }
// ]

// var guessedRight = 0;
// var guessedWrong = 0;

// for (var i = 0; i < trivia.question.length; i++) {
//     $(".question").append($("<h1>").text(trivia.question[i]))
//     $(".a").append($("<div>").html(`<h1> ${trivia.a[i]} </h1>`));
//     $(".b").append($("<div>").html(`<h1> ${trivia.b[i]} </h1>`));
//     $(".c").append($("<div>").html(`<h1> ${trivia.c[i]} </h1>`));
//     $(".d").append($("<div>").html(`<h1> ${trivia.d[i]} </h1>`));
// }

//intial timer
var timeRemaining = 30;
//intial questionNumber 
var questionNumber = 0;
var usersChoice;
var timerValue;
// audio
var questionSound = new Audio("../TriviaGame/assets/javascript/audio/question.mp3");
var correctSound = new Audio("../TriviaGame/assets/javascript/audio/correct.mp3");
var wrongSound = new Audio("../TriviaGame/assets/javascript/audio/wrong.mp3");
//functions
//set interval for timer
function startTimer() {
    //Stop timer if it equals zero 
    if (timeRemaining === 1) {
        clearInterval(timerValue)
        console.log("times Up!")
    }
    timeRemaining = timeRemaining - 1
    $(".timer").html(`Time Remaining: ${timeRemaining}`)
}
//Generate html for each question
function nextQuestion() {
    //Generate html for each question
    $(".image").html("");
    showHTML();
    $(".question").html(`<h1> Question: ${trivia.question[questionNumber]} </h1>`);
    $(".a").attr("guess", "a").html(`<h1> ${trivia.a[questionNumber]} </h1>`);
    $(".b").attr("guess", "b").html(`<h1> ${trivia.b[questionNumber]} </h1>`);
    $(".c").attr("guess", "c").html(`<h1> ${trivia.c[questionNumber]} </h1>`);
    $(".d").attr("guess", "d").html(`<h1> ${trivia.d[questionNumber]} </h1>`);
    //Update Qeustion Timer
    timeRemaining = 30;
    //Start CountDown
    timerValue = setInterval(startTimer, 1000);
    //play audio
    questionSound.play();
};
function emptyHTML(){
    $(".question").html("");
    $(".a").attr("guess", "a").hide();
    $(".b").attr("guess", "b").hide();
    $(".c").attr("guess", "c").hide();
    $(".d").attr("guess", "d").hide();
}
function showHTML() {
    $(".question").html("");
    $(".a").attr("guess", "a").show();
    $(".b").attr("guess", "b").show();
    $(".c").attr("guess", "c").show();
    $(".d").attr("guess", "d").show();
}
function congrats() {
    emptyHTML()
    $(".question").html("<h1> Congrats </h1>");
    questionSound.pause();
    questionSound.currentTime = 0;
    correctSound.play();
    //display correct answer

     //generate questionNumber Image
     $(".image").html("<img src='"+trivia.image[questionNumber]+"'>");
}
function loser() {
    emptyHTML()
    $(".question").html("<h1> Wrong </h1>");
    questionSound.pause();
    questionSound.currentTime = 0;
    wrongSound.play();
    //display correct answer
    $(".correctAnswer").html(`<h1></h1>`)
     //generate questionNumber Image
}
//START APP
$(".title").hide();
$(".time").hide();
$(".timer").hide();
$(".results").hide();

$(".start").on("click",function(){
$(".welcome").hide();
nextQuestion();
$(".title").show();
$(".time").show();
$(".timer").show();
$(".results").show();
})


//listen for users guess
$(".choice").on("click", function(event){ 
        usersChoice = $(this)
        // compare choice to answer 
        if ( usersChoice.attr("guess") === trivia.answer[questionNumber]) {
            console.log("CORRECT!!!!");
            //Show Congrats
            clearInterval(timerValue)
            congrats();
            //generate new questions & reset questionTimer
            questionNumber++;
            setTimeout(nextQuestion,10000)
        } else {
            console.log("YOU LOSE");
            //Show you lose
            clearInterval(timerValue);
            loser();
            //generate questions & reset questionTimer
            questionNumber++;
            setTimeout(nextQuestion,10000)
        } 

        

})
        //if correct
        //stop question timer, 
        //display congrats for set time
        //add to questionNumber
        //reset question timer


        //if wrong
        // stop question timer
        //display wrong!, 
        // display what the correct answer was
        //add to questionNumber
        //reset question

        //if questionTimer === 0
        // display times up
        //display correct answer
        //


