var trivia = {
    question: ["Where are cryptocurrencies legal?", "Who was the creator of BitCoin?", "What is the maximum number of bitcoins that will/can be produced?", "What is blockchain?", "Where was the first Bitcoin-ATM installed?","Which car manufactuer was the first to accept bitcoin?", "What is the name of the process used to obtain new bitcoins?","When was the idea for bitcoin first published?"," Which of these US states introduced the BitLicense regulation for cryptocurrency companies?","Which of the following is popularly used for storing bitcoins"],
    a:["A. United States", "A. Satoshi Nakamoto", "A. 21 million","A. An algorithm developed to track the creation of all privately traded cryptocurrencies","A. Vancouver, Canada","A. Toyota","A. Digging","A. 2012","A. New York","A. Stack"],
    b:["B. United States & China", "B. Dr. Dean Paraskavas","B. 18 million", "B. a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and publicly.", "B. Tokyo, Japan","B. Saab","B. Drilling","B. 2008","B. California","B. Pocket"],
    c:["C. United States & China & North Korea", "C. Unknown","C. 30 million","C. a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and privately.", "C. No where","C. Ferrari","C. Chipping","C. 2005","C. Texas","C. Wallet"],
    d:["D. All over the world", "D. Gerald Bernaldo", "D. 25 million","D. An algorithm developed to track the creation of all cryptocurrencies", "D. Silicon Valley","D. Lamborghini","D. Minning","D. 2007","D. Washington","D. Purse"],
    answer:["d" ,"c", "a","b","a","d","d","b","a","c"],
    answerValue:["All over the world","Unknown", "21 million","a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and publicly.","Vancouver, Canada","Lamborghini", "Minning","2008","New York","Wallet"],
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
var correctAnswer = 0;
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
    $(".question").html(`<h1> Correct. Correct Answers: ${correctAnswer}/10 </h1>`);
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
    $(".Answer").html(`<h1>The Correct Answer was ${trivia.answer[questionNumber].toUpperCase()}: ${trivia.answerValue[questionNumber]}</h1>`)
     //show wrong Image
     $(".image").html("<img src='../TriviaGame/assets/images/wrong.gif'>");
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
            correctAnswer++
            congrats();
            //generate new questions & reset questionTimer
            questionNumber++;
            setTimeout(nextQuestion,8000)
        } else {
            console.log("YOU LOSE");
            //Show you lose
            clearInterval(timerValue);
            loser();
            //generate questions & reset questionTimer
            questionNumber++;
            setTimeout(nextQuestion,8000)
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


