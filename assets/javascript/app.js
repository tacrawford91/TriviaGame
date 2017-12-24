var trivia = {
    question: ["Where are cryptocurrencies legal?", "Who was the creator of BitCoin?", "What is the maximum number of bitcoins that will/can be produced?", "What is blockchain?", "Where was the first Bitcoin-ATM installed?","Which car manufactuer was the first to accept bitcoin?", "What is the name of the process used to obtain new bitcoins?","When was the idea for bitcoin first published?"," Which of these US states introduced the BitLicense regulation for cryptocurrency companies?","Which of the following is popularly used for storing bitcoins"],
    a:["A. United States", "A. Satoshi Nakamoto", "A. 21 million","A. An algorithm developed to track the creation of all privately traded cryptocurrencies","A. Vancouver, Canada","A. Toyota","A. Digging","A. 2012","A. New York","A. Stack"],
    b:["B. United States & China", "B. Dr. Dean Paraskavas","B. 18 million", "B. a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and publicly.", "B. Tokyo, Japan","B. Saab","B. Drilling","B. 2008","B. California","B. Pocket"],
    c:["C. United States & China & North Korea", "C. Unknown","C. 30 million","C. a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and privately.", "C. No where","C. Ferrari","C. Chipping","C. 2005","C. Texas","C. Wallet"],
    d:["D. All over the world", "D. Gerald Bernaldo", "D. 25 million","D. An algorithm developed to track the creation of all cryptocurrencies", "D. Silicon Valley","D. Lamborghini","D. Minning","D. 2007","D. Washington","D. Purse"],
    answer:["d" ,"c", "a","b","a","d","d","b","a","c"],
    answerValue:["All over the world","Unknown", "21 million","a digital ledger in which transactions made in cryptocurrencies are recorded chronologically and publicly.","Vancouver, Canada","Lamborghini", "Minning","2008","New York","Wallet"],
    image: ["./../TriviaGame/assets/images/crypto.jpg"]
}

//intial timer
var timeRemaining = 25;
//intial questionNumber 
var questionNumber = 0;
var usersChoice;
var timerValue;
var correctAnswer = 0;
// audio
var introSound = new Audio("../TriviaGame/assets/audio/intro.mp3")
var questionSound = new Audio("../TriviaGame/assets/audio/question.mp3");
var correctSound = new Audio("../TriviaGame/assets/audio/correct.mp3");
var wrongSound = new Audio("../TriviaGame/assets/audio/wrong.mp3");
var finalScreenSound = new Audio("../TriviaGame/assets/audio/finalScreen.mp3")
//functions
//set interval for timer
function startTimer() {
    //Stop timer if it equals zero 
    if (timeRemaining === 1) {
        clearInterval(timerValue)
        // console.log("times Up!")
        //Display times up screen
        timesUp();
        //generate questions & reset questionTimer
        questionNumber++;
        setTimeout(nextQuestion,8000)
    }
    timeRemaining = timeRemaining - 1
    $(".timer").html(`Time Remaining: ${timeRemaining}`)
}
//Generate html for each question
function nextQuestion() {
    //check if game is over
    if (questionNumber === 10) {
        finalScreen();
    } else {
    //Generate html for each question
    $(".image").html("");
    $(".answer").html("");
    showHTML();
    $(".question").html(`<h1> Question ${questionNumber+1}: ${trivia.question[questionNumber]} </h1>`);
    $(".a").attr("guess", "a").html(`<h1> ${trivia.a[questionNumber]} </h1>`);
    $(".b").attr("guess", "b").html(`<h1> ${trivia.b[questionNumber]} </h1>`);
    $(".c").attr("guess", "c").html(`<h1> ${trivia.c[questionNumber]} </h1>`);
    $(".d").attr("guess", "d").html(`<h1> ${trivia.d[questionNumber]} </h1>`);
    //Update Qeustion Timer
    timeRemaining = 25;
    //Start CountDown
    timerValue = setInterval(startTimer, 1000);
    //play audio
    questionSound.play();
    }
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
    $(".image").html("");
    $(".answer").html("");
    $(".question").html(`<h1> Correct!           Correct Answers: ${correctAnswer}/10 </h1>`);
    questionSound.pause();
    questionSound.currentTime = 0;
    correctSound.play();
    //display correct answer

     //generate questionNumber Image
     $(".image").html("<img src='../TriviaGame/assets/images/crypto.jpg'>");
}
function loser() {
    emptyHTML()
    $(".question").html("<h1> Incorrect </h1>");
    questionSound.pause();
    questionSound.currentTime = 0;
    wrongSound.play();
    //display correct answer
    $(".Answer").html(`<h1>The Correct Answer was ${trivia.answer[questionNumber].toUpperCase()}: ${trivia.answerValue[questionNumber]}</h1>`)
     //show wrong Image
     $(".image").html("<img src='../TriviaGame/assets/images/wrong.gif'>");
}
function finalScreen(){
    // console.log("gameover");
    $(".title").hide();
    $(".time").hide();
    $(".timer").hide();
    $(".results").hide();
    $(".welcome").show()
    finalScreenSound.play();
    $(".firstScreen").hide()
    $(".finalScreen").show();
    $("#finalScore").text(`You answerered ${correctAnswer}/10 correctly.`)
}
function timesUp() {
    emptyHTML()
    $(".question").html("<h1> Time Expired </h1>");
    questionSound.pause();
    questionSound.currentTime = 0;
    wrongSound.play();
    //display correct answer
    $(".Answer").html(`<h1>The Correct Answer was ${trivia.answer[questionNumber].toUpperCase()}: ${trivia.answerValue[questionNumber]}</h1>`)
}
function reset() {
    emptyHTML();
    finalScreenSound.pause();
    $(".welcome").hide();
    questionNumber = 0;
    correctAnswer = 0;
    
    $(".finalScreen").hide();
    nextQuestion();
    $(".title").show();
    $(".time").show();
    $(".timer").show();
    $(".results").show();
    
};
//START APP

//Inital Welcome Screen Setup
$(".title").hide();
$(".time").hide();
$(".timer").hide();
$(".results").hide();
$(".finalScreen").hide();

//start intro music
$(document).ready ( function(){
  introSound.play();
 })

 //Click Start button, Begin Game
$(".start").on("click",function(){
introSound.pause();
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
            // console.log("CORRECT!!!!");
            //Show Congrats
            clearInterval(timerValue)
            correctAnswer++
            congrats();
            //generate new questions & reset questionTimer
            questionNumber++;
            //generate final Screen
            setTimeout(nextQuestion,8000)
        } else {
            // console.log("YOU LOSE");
            //Show you lose
            clearInterval(timerValue);
            loser();
            //generate questions & reset questionTimer
            questionNumber++;
            setTimeout(nextQuestion,8000)
        }   
});


//reset button
$(".reset").on("click", function(){

    reset();
})
