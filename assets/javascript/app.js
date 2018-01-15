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
    },
    question6 = {
        question: "Not including home plate, how many bases are on a baseball field?",
        answerChoices: ["Six", "Three", "One", "Two"],
        correctAnswer: "Three",
        correctImage: "assets/images/q6.png",
        fastFact: "The bases form a shape of a diamond."
    },
    question7 = {
        question: "Which of the following teams is not a professional hockey team in the NHL?",
        answerChoices: ["Lightning", "Islanders", "Bruins", "Lakers"],
        correctAnswer: "Lakers",
        correctImage: "assets/images/q7.jpg",
        fastFact: "The Lakers are a basketball team."
    },
    question8 = {
        question: "How many disciplines do female gymnasts compete in?",
        answerChoices: ["4", "6", "3", "7"],
        correctAnswer: "4",
        correctImage: "assets/images/q8.jpg",
        fastFact: "4 - The events are beam, vault, floor, and uneven bars."    
    },
    question9 = {
        question: "Nicknamed 'The Man of Steal,' which Major League Baseball player currently holds the career stolen base record?",
        answerChoices: ["Rickey Henderson", "Billy Hamilton", "Ty Cobb", "Lou Brock"],
        correctAnswer: "Rickey Henderson",
        correctImage: "assets/images/q9.jpg",
        fastFact: "Rickey Henderson - Rickey played in the MLB for nine teams from 1979 to 2003",
    },
    question10 = {
        question: "What sport do the Bills play?",
        answerChoices: ["Soccer", "Hockey", "Football", "Basketball"],
        correctAnswer: "Football",
        correctImage:  "assets/images/q10.jpg",
        fastFact: "The Bills play out of Buffalo"
    },
    question11 = {
        question: "In which sporting event does Usain Bolt compete?",
        answerChoices: ["Sprinting", "Cross Country Skiing", "Pole Vault", "High Jump"],
        correctAnswer: "Sprinting",
        correctImage:  "assets/images/q11.jpg",
        fastFact: "Regarded as the fastest person ever, Usain Bolt competes for Jamaica."
    },
    question12 = {
        question: "In which sport would hear the terms bump, set, and spike?",
        answerChoices: ["Bowling", "Badminton", "Volleyball", "Golf"],
        correctAnswer: "Volleyball",
        correctImage:  "assets/images/q12.jpg",
        fastFact: "You might also hear the terms block and dig."
    },
    question13 = {
        question: "Which sport is sometimes called arrows or throwers?",
        answerChoices: ["Archery", "Cricket", "Javelin", "Darts"],
        correctAnswer: "Darts",
        correctImage:  "assets/images/q13.jpg",
        fastFact: "Darts is frequently played in pubs."
    },
    question14 = {
        question: "Which event takes place during the San Fermin festival?",
        answerChoices: ["The running of the bulls", "The Tour de France", "The Olympics", "The World Series"],
        correctAnswer: "The running of the bulls",
        correctImage:  "assets/images/q14.jpg",
        fastFact: "The event is open to anyone over the age of 18."
    },
    question15 = {
        question: "In the NFL, how long is the field if you do not count the end zones?",
        answerChoices: ["150 feet", "1000 feet", "100 yards", "110 yards"],
        correctAnswer: "100 yards",
        correctImage:  "assets/images/q15.png",
        fastFact: "The end zones are ten yards long."
    },
    question16 = {
        question: "Which sport awards the Ryder's Cup?",
        answerChoices: ["Football", "Baseball", "Hockey", "Golf"],
        correctAnswer: "Golf",
        correctImage:  "assets/images/q16.jpg",
        fastFact: "The cup is a golf challenge between the USA and Europe."
    },
    question17 = {
        question: "Where was the Canadian Grey Cup played in 2015?",
        answerChoices: ["Edmonton", "Winnipeg", "Toronto", "Ottawa"],
        correctAnswer: "Winnipeg",
        correctImage:  "assets/images/q17.jpg",
        fastFact: "The Grey Cup is given to the winner in the Canadian Football League."
    },
    question18 = {
        question: "Which American Football player had the nickname 'Sweetness'?",
        answerChoices: ["Tom Brady", "Earl Campbell", "Damon Allen", "Walter Payton"],
        correctAnswer: "Walter Payton",
        correctImage:  "assets/images/q18.jpg",
        fastFact: "Walter Payton died in 1999 of a rare liver cancer."
    },
    question19 = {
        question: "Where was former Major League Baseball outfielder Jose Canseco born?",
        answerChoices: ["Spain", "Mexico", "America", "Cuba"],
        correctAnswer: "Cuba",
        correctImage:  "assets/images/q19.jpg",
        fastFact: "Jose was drafted by the Oakland As in 1985."
    },
    question20 = {
        question: "Which of these horses holds the record for winning the most money?",
        answerChoices: ["John Henry", "Silver Charm", "Lava Man", "Curlin"],
        correctAnswer: "Curlin",
        correctImage:  "assets/images/q20.jpg",
        fastFact: "Curlin last raced in 2008. He won over 10.5 million dollars."
    }
    

];
var correct = 0;
var incorrect = 0;
var questionNumber=0;
var usedQuestons = [];
var randomQuestion;
var timer;
var intervalId;



function shuffle(answers) {
    var i = 0;
    var j = 0;
    var temp;
    for(i=0; i<answers.length; i++){
        j = Math.floor(Math.random() * answers.length);
        temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    return answers;

}


function questionInfoReveal () {
    $("#triviaGameplay").append("<p>" + questionBank[randomQuestion].fastFact + "</p>");
    var displayImage = $("<img>");
    displayImage.attr("src", questionBank[randomQuestion].correctImage);
    console.log(questionBank[randomQuestion].correctImage);
    displayImage.attr("width", "200px");
    $("#triviaGameplay").append(displayImage);
}

function decrement () {
    timer--;
    $("#remainingTime").html(timer);
    if(timer === 0){
        clearInterval(intervalId);
        $("#triviaGameplay").html("<p>You have run out of time!</p>");
        $("#triviaGameplay").append("<p>" + questionBank[randomQuestion].fastFact + "</p>");
        var displayImage = $("<img>");
        displayImage.attr("src", questionBank[randomQuestion].correctImage);
        displayImage.attr("width", "200px");
        $("triviaGameplay").append(displayImage);
        incorrect +=1;
        $("#numberIncorrect").html(incorrect);
        questionBank.splice(randomQuestion,1);
        setTimeout(showQuestion, 5000);
    }
}



function showQuestion() {
    if(questionNumber<10){
        intervalId = setInterval(decrement, 1000);
        timer = 30;
        questionNumber+=1;
        $("#questionNumber").html(questionNumber);
        randomQuestion = Math.floor(Math.random() * questionBank.length);
        $("#triviaGameplay").html("<p class='questionText'>" + questionBank[randomQuestion].question + "</p>");
        shuffle(questionBank[randomQuestion].answerChoices);
        questionBank[randomQuestion].answerChoices.forEach(function(choice) {
            var answerButton = $("<button>");
            answerButton.attr("type","button");
            answerButton.addClass("questionText btn btn-lg btn-primary");
            answerButton.text(choice);
            if(choice === questionBank[randomQuestion].correctAnswer) {
                answerButton.attr("data-answerValue","correct")
            } else {
                answerButton.attr("data-answerValue","incorrect")
            }
            $("#triviaGameplay").append(answerButton);
            $(answerButton).click(function () {
                if($(this).attr("data-answerValue") === "correct") {
                    clearInterval(intervalId);
                    $("#triviaGameplay").html("<p>That is the correct answer!</p>");
                    questionInfoReveal();
                    correct += 1;
                    $("#numberCorrect").html(correct);
                    questionBank.splice(randomQuestion,1);
                    setTimeout(showQuestion, 5000);
                } else if($(this).attr("data-answerValue") === "incorrect") {
                    clearInterval(intervalId);
                    $("#triviaGameplay").html("<p>That is the incorrect answer!</p>");
                    questionInfoReveal();
                    incorrect += 1;
                    $("#numberIncorrect").html(incorrect);
                    questionBank.splice(randomQuestion,1);
                    setTimeout(showQuestion, 5000);
                }
            });

            
        
        });
    } else {
        $("#triviaGameplay").html("<p>Thank you for playing Sports Trivia!</p>");
        $("#triviaGameplay").append("<p>You answered "+correct+" questions correctly and "+ incorrect +" questions incorrectly!")

    }
  

}

function startGame () {

    $("#triviaGameplay").html("<button type='button' class='btn btn-lg startGame'>Start Game</button>");
    $("#triviaGameplay").append("<p>Welcome to Sports Trivia! Click the Start Button to begin the game!</p>");
    $(".startGame").click(function() {
        showQuestion();
    });

}
$(document).ready(function () {
startGame();
});
