//The ridiculously long question bank, but its worth making the game replayable.
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
    },
    question21 = {
        question: "Which of these games used to be played with a live animal serving as the ball?",
        answerChoices: ["Soccer", "Golf", "Polo", "Coquet"],
        correctAnswer: "Polo",
        correctImage: "assets/images/q21.jpg",
        fastFact: "Riders had to carry a goat across the goal line."
    },
    question22 = {
        question: "What is the maximum number of clubs that a golfer can carry in a tournament (Putter does not count)?",
        answerChoices: ["9", "6", "12", "14"],
        correctAnswer: "14",
        correctImage: "assets/images/q22.jpg",
        fastFact: "A golfer may not change clubs during a round. However, there is an exception if a club is broken."
    },
    question23 = {
        question: "What team did soccer great Pele join in 1975?",
        answerChoices: ["Cosmos", "Knights", "Strikers", "Rooks"],
        correctAnswer: "Cosmos",
        correctImage: "assets/images/q23.jpg",
        fastFact: "Pele came out of retirement to play for the New York Cosmos."
    },
    question24 = {
        question: "When was 'Sports Illustrated' first published?",
        answerChoices: ["1954", "1983", "1965", "1971"],
        correctAnswer: "1954",
        correctImage: "assets/images/q24.jpg",
        fastFact: "Sports Illustrated is read by more than 23 million people every week."
    },
    question25 = {
        question: "In 2004, how many times was Barry Bonds walked?",
        answerChoices: ["328", "401", "157", "232"],
        correctAnswer: "232",
        correctImage: "assets/images/q25.jpg",
        fastFact: "This broke the record for the most walks in a single season."
    },
    question26 = {
        question: "Which famous athlete was born Ferdinand Lewis Alcindor Jr.?",
        answerChoices: ["Leon Sphinx", "Tiger Woods", "Mohammed Ali", "Kareem Abdul-Jabbar"],
        correctAnswer: "Kareem Abdul-Jabbar",
        correctImage: "assets/images/q26.jpg",
        fastFact: "Kareem played 20 seasons in the NBA."
    },
    question27 = {
        question: "Which of the following cups might you win in yacht racing?",
        answerChoices: ["Stanley", "America", "Norris", "Silver"],
        correctAnswer: "America",
        correctImage: "assets/images/q27.jpg",
        fastFact: "America's Cup - This cup is also known as the Auld Cup."
    },
    question28 = {
        question: "After the United States, which country claims the most professional baseball players in the MLB?",
        answerChoices: ["Cuba", "Dominican Republic", "Peru", "Russia"],
        correctAnswer: "Dominican Republic",
        correctImage: "assets/images/q28.png",
        fastFact: "Dominican Republic is second followed by Venezula."
    },
    question29 = {
        question: "What position did football great Franco Harris play?",
        answerChoices: ["Tight End", "Quarterback", "Cornerback", "Fullback"],
        correctAnswer: "Fullback",
        correctImage: "assets/images/q29.jpg",
        fastFact: "Fullback - Harris was selected for 9 consecutive Pro Bowls."
    },
    question30 = {
        question: "Who lost the World Series in 2015?",
        answerChoices: ["Kansas City Royals", "Toronto Blue Jays", "Baltimore Orioles", "New York Mets"],
        correctAnswer: "New York Mets",
        correctImage: "assets/images/q30.png",
        fastFact: "The Royals wond the World Series in 2015."
    }
    

];
var correct = 0;
var incorrect = 0;
var questionNumber=0;
var usedQuestons = [];
var randomQuestion;
var timer;
var intervalId;


//Shuffles up the answer choices, therefore repeat players do not memorize just the location.
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

//function used to display the fast fact and images after an answer choice button is clicked
function questionInfoReveal () {
    $("#triviaGameplay").append("<p>" + questionBank[randomQuestion].fastFact + "</p>");
    var displayImage = $("<img>");
    displayImage.attr("src", questionBank[randomQuestion].correctImage);
    displayImage.attr("width", "200px");
    $("#triviaGameplay").append(displayImage);
}

//countdown timer and the actions if the timer hits zero
function decrement () {
    timer--;
    $("#remainingTime").html(timer);
    if(timer === 0){
        clearInterval(intervalId);
        $("#triviaGameplay").html("<p>You have run out of time!</p>");
        questionInfoReveal();
        var incorrectAudio = new Audio("assets/audio/incorrect.mp3");
        incorrectAudio.play();
        incorrect +=1;
        $("#numberIncorrect").html(incorrect);
        questionBank.splice(randomQuestion,1);
        setTimeout(showQuestion, 5000);
    }
}


//main gameplay function
function showQuestion() {
    //initial statement to keep looping as long as player hasnt missed 3 questions and there are still questions to ask
    if(incorrect<3 && questionBank.length > 0){
        intervalId = setInterval(decrement, 1000);
        timer = 30;
        questionNumber+=1;
        $("#questionNumber").html(questionNumber);

        //Chooses Random question
        randomQuestion = Math.floor(Math.random() * questionBank.length);
        $("#triviaGameplay").html("<p class='questionText'>" + questionBank[randomQuestion].question + "</p>");

        //Shuffle answer choices, assign correct answer value, display and conditions for click right and wrong answers
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
                    var correctAudio = new Audio("assets/audio/correct.mp3");
                    correctAudio.play();
                    correct += 1;
                    $("#numberCorrect").html(correct);
                    questionBank.splice(randomQuestion,1);
                    setTimeout(showQuestion, 5000);
                } else if($(this).attr("data-answerValue") === "incorrect") {
                    clearInterval(intervalId);
                    $("#triviaGameplay").html("<p>That is the incorrect answer!</p>");
                    questionInfoReveal();
                    var incorrectAudio = new Audio("assets/audio/incorrect.mp3");
                    incorrectAudio.play();
                    incorrect += 1;
                    $("#numberIncorrect").html(incorrect);
                    questionBank.splice(randomQuestion,1);
                    setTimeout(showQuestion, 5000);
                }
            });

            
        
        });
    //Condition for if player misses 3 questions    
    } else if(incorrect === 3) {
        var gameoverAudio = new Audio("assets/audio/gameover.mp3");
        gameoverAudio.play();
        $("#triviaGameplay").html("<p>Unfortunately, you lost Sports Trivia. Better luck next time!</p>");
        $("#triviaGameplay").append("<p>You answered "+correct+" questions correctly and "+ incorrect +" questions incorrectly!")
    //Condition for if player successfully answers all questions    
    } else if(questionBank.length === 0){
        var gameoverAudio = new Audio("assets/audio/gameover.mp3");
        gameoverAudio.play();
        $("#triviaGameplay").html("<p>Congratulations! You won Sports Trivia!</p>");
        $("#triviaGameplay").append("<p>You answered "+correct+" questions correctly and "+ incorrect +" questions incorrectly!")
    }
  

}
//Sets the start-up Screen
function startGame () {
    var introMusic = new Audio("assets/audio/startup.mp3");
    introMusic.play();
    //$("#triviaGameplay").html("<button type='button' class='btn btn-lg startGame'>Start Game</button>");
    var startButton = $("<button>");
    startButton.attr("type","button");
    startButton.addClass("btn btn-lg startGame");
    startButton.text("Start Game");
    $("#triviaGameplay").append(startButton);
    $(".startGame").click(function() {
        introMusic.pause();
        showQuestion();

    });

}
$(document).ready(function () {
startGame();
});
