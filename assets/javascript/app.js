var trivia = {
    question: ["what color is the sky?", "what is upDawg?"],
    a:["green", "hello cat"],
    b:["blue", "hello Dog"],
    c:["red", "Whatsup Dawg"],
    d:["yellow", "bad dog"],
    answer:["b" ,"c"]
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

//intial questionNumber 
var timeRemaining = 10;
var questionNumber = 0;
var usersChoice;
//start timer

var timerValue = setInterval(function() {
    if (timeRemaining === 1) {
        clearInterval(timerValue)
        console.log("times Up!")
    }
    timeRemaining = timeRemaining - 1
    $(".timer").html(`Time Remaining: ${timeRemaining}`)
},1000)

function nextQuestion() {
    $(".question").html(`<h1> ${trivia.question[questionNumber]} </h1>`);
    $(".a").attr("guess", "a").html(`<h1> ${trivia.a[questionNumber]} </h1>`);
    $(".b").attr("guess", "b").html(`<h1> ${trivia.b[questionNumber]} </h1>`);
    $(".c").attr("guess", "c").html(`<h1> ${trivia.c[questionNumber]} </h1>`);
    $(".d").attr("guess", "d").html(`<h1> ${trivia.d[questionNumber]} </h1>`);
    timeRemaining = 30;
};

nextQuestion();

//listen for users guess

$(".choice").on("click", function(event){ 
        usersChoice = $(this)
        // compare choice to answer 
        if ( usersChoice.attr("guess") === trivia.answer[questionNumber]) {
            console.log("CORRECT!!!!");
            questionNumber++;
            //Show Congrats for set timer
            //generate new questions & reset questionTimer
            nextQuestion();

        } else {
            console.log("YOU LOSE");
            questionNumber++;
            //Show you lose for set time
            //generate questions & reset questionTimer
            nextQuestion();
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


