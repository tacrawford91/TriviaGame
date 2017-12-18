var trivia = {
    question: ["What color is the sky?", "What is upDawg?"],
    a:["green", "hello cat"],
    b:["blue", "hello Dog"],
    c:["red", "Whatsup Dawg"],
    d:["yellow", "bad dog"],
    answer:["b" ,"c"],
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
var questionSound = new Audio("../TriviaGame/assets/audio/question.mp3");
var correctSound = new Audio("../TriviaGame/assets/audio/correct.mp3");
var wrongSound = new Audio("../TriviaGame/assets/audio/wrong.mp3");
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


