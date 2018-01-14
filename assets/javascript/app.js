var questionBank = [
    question1 = {
        question: "Which of the following NFL teams did Tom Brady quarterback to a Super Bowl win?",
        answerChoices: ["New York Jets", "Miami Dolphins", "Dallas Cowboys", "New England Patriots"],
        correctAnswer: "New England Patriots",
        correctImage: "assets/images/q1.png",
        fastFact: "Tom has won five Super Bowl rings"
    },
    question2 = {
        question: "If you went to Wimbledon, what sport would you be watching?",
        answerChoices: ["Soccer", "Hockey", "Tennis", "Golf"],
        correctAnswer: "Tennis",
        correctImage: "assets/images/q2.jpg",
        fastFact: "Wimbledon is the oldest tennis tournament on the planet"
    },
    question3 = {
        question: "In what year were the Olympic Games held in Australia?",
        answerChoices: ["1996","1976","2000","1984"],
        correctAnswer: "2000",
        correctImage: "assets/images/q3.png",
        fastFact: "The motto for the games was 'Share the Spirit, Dare to Dream'."
    },
    question4 = {
        question: "What sport does Wayne Mark Rooney play?",
        answerChoices: ["Basketball", "Baseball", "Soccer", "Football"],
        correctAnswer: "Soccer",
        correctImage: "assets/images/q4.jpg",
        fastFact: "Wayne Rooney captains both Manchester United and the England national team"
    },
    question5 = {
        question: "In which weight class did Muhammed Ali box?",
        answerChoices: ["Heavyweight", "Flyweight", "Lightweight","Middleweight"],
        correctAnswer: "Heavyweight",
        correctImage: "assets/images/q5.jpg",
        fastFact: "Muhammed Ali was an American boxer who won 56 of his 61 career fights"
    }

];
var correct = 0;
var incorrect = 0;
var questionNumber;
var usedQuestons = [];
var randomQuestion;
var timer = 30;



function decrement () {
    timer--;
    $("#remainingTime").html(timer);
}

function gamePlay() {
    setInterval(decrement, 1000);
    randomQuestion = Math.floor(Math.random() * questionBank.length);
    $("#triviaGameplay").html("<p class='questionText'>" + questionBank[randomQuestion].question + "</p>");
    questionBank[randomQuestion].answerChoices.forEach(function(choice) {
        $("#triviaGameplay").append("<p class='questionText'>" + choice + "</p>");
    });
  

}

function startGame () {

    $("#triviaGameplay").html("<button type='button' class='btn btn-lg startGame'>Start Game</button>");
    $(".startGame").click(function() {
        gamePlay();
    });

}
$(document).ready(function () {
startGame();
});
