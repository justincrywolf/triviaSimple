// trigger game start function when start button is clicked
$( "#start" ).on( "click", function(){
    game.start();
});

// trigger done funtion when end button is clicked
$( document ).on( "click", "#end", function(){
    game.done();
});

//Questions and answers array
var questions = [{
    question: "Everyone has a heart - except _________.",
    answers: ["him", "her", "some people", "you"],
    correctAnswer: "some people"
}, {
    question: "What'll you have? A _______?",
    answers: ["martini", "milkshake", "cup of tea", "beer"],
    correctAnswer: "milkshake"
}, {
    question: "Nice speech, Eve. But I wouldn't worry too much about your heart. You can always put that ___________ where your heart ought to be",
    answers: ["role", "sandwich", "money", "award"],
    correctAnswer: "award"
}, {
    question: "Dear Margo. You were an unforgettable __________. You must play it again soon.",
    answers: ["Peter Pan", "Tinkerbell", "Tigerlily", "Wendy"],
    correctAnswer: "Peter Pan"
}, {
    question: "We've seen you like this before. Is it over or is it just __________?",
    answers: ["finished", "begun", "getting started", "me"],
    correctAnswer: "getting started"
}]

// main game function
// game variables
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $( "#counter" ).html( game.counter );
        if( game.counter <= 0  ){
            console.log( "Time is up" );
            game.done();
        }
    },

    // game start function - trigger timer, create questions and answers, remove start button, create done button
    start: function(){
        timer = setInterval( game.countdown, 1000 );
        for( var i = 0; i<questions.length; i++ ){
            $( "#subwrapper" ).append( "<h2>" + questions[i].question + "</h2" );
            
            for( var j = 0; j < questions[i].answers.length; j++ ){
                $( "#subwrapper" ).append( "<input type='radio' name='question-'" + i + " 'value=' " + questions[i].answers[j] + "' > " + questions[i].answers[j] )
            }
        }
        $( "#subwrapper" ).prepend( "<h2>Time Remaining: <span id='counter'>60</span> Seconds</h2>" );

        $( "#start" ).remove(); 
        $( "#subwrapper" ).append("<br><button id = 'end'>Done</button>"); 
    },

    // resolve answers when time is up or done button is clicked
    done: function(){
        // this should definitely be a loop, I just ran out of time
        
        $.each($( "input[name='question-0']:checked" ), function(){
            if($( this ).val() == questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($( "input[name='question-1']:checked" ), function(){
            if($( this ).val() === questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($( "input[name='question-2']:checked" ), function(){
            if($( this ).val() === questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($( "input[name='question-3']:checked" ), function(){
            if($( this ).val() === questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
        $.each($( "input[name='question-4']:checked" ), function(){
            if($( this ).val() === questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    
    },
// display results
    result: function() {
        clearInterval(game.counter);
        $( "#subwrapper h2" ).empty();
        $( "#subwrapper" ).html( "<h2>Nice job</h2>");
        $( "#subwrapper" ).append( "<h3>Correct Answers: " +this.correct+ "</h2" );
        $( "#subwrapper" ).append( "<h3>Incorrect Answers: " +this.incorrect+ "</h2" );
        $( "#subwrapper" ).append( "<h3>Unanswered: " + (questions.length -( game.incorrect + game.correct )) + "</h3>" );
    }

   
}