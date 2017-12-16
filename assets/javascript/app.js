var trivia = {
    question: ["what color is the sky?", "what is upDawg?"],
    a:["green", "hello cat"],
    b:["blue", "hello Dog"],
    c:["red", "Whatsup Dawg"],
    d:["yellow", "bad dog"],
    answer:["b" ,"c"],
    image: ["./../images/placeHolder.JPG","./../images/placeHolder.JPG"]
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
    $(".question").html(`<h1> ${trivia.question[questionNumber]} </h1>`);
    $(".a").attr("guess", "a").html(`<h1> ${trivia.a[questionNumber]} </h1>`);
    $(".b").attr("guess", "b").html(`<h1> ${trivia.b[questionNumber]} </h1>`);
    $(".c").attr("guess", "c").html(`<h1> ${trivia.c[questionNumber]} </h1>`);
    $(".d").attr("guess", "d").html(`<h1> ${trivia.d[questionNumber]} </h1>`);
    //Update Qeustion Timer
    timeRemaining = 30;
    //Start CountDown
    timerValue = setInterval(startTimer, 1000);
};
function emptyHTML(){
    $(".question").html("");
    $(".a").attr("guess", "a").html("");
    $(".b").attr("guess", "b").html("");
    $(".c").attr("guess", "c").html("");
    $(".d").attr("guess", "d").html("");
}
function congrats() {
    emptyHTML()
    $(".question").html("<h1> Congrats </h1>");
    //display correct answer
     //generate questionNumber Image
}
function loser() {
    emptyHTML()
    $(".question").html("<h1> Wrong </h1>");
    //display correct answer
     //generate questionNumber Image
}
//START APP
nextQuestion();

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


