/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

//Aqui eu mudei o formato do array de choices para um array de objetos
//_.shuffle é o que faz o random, ele é realizado pela library Lodash (muito util em projetos js) Caso queira conhecer ela mais a fundo: https://lodash.com/docs/4.17.4
//Sempre a questão correta vai ser o resultado 1
var questions = _.shuffle([{
    question: "Até quando vai a campanha Batalha dos Reinos?",
    choices: _.shuffle([
        {choice: "Portugal", answer: 1},
        {choice: "Macau", answer: 0},
        {choice: "Moçambique", answer: 0}
        ])
},
{
    question: "Palmeiras tem mundial?",
    choices: _.shuffle([
        {choice: "Sim", answer: 1},
        {choice: "Não", answer: 0},
        {choice: "Palmeiras e mundial não combinam", answer: 0}
        ])
},
{
    question: "O Brasil fica em qual continente?",
    choices: _.shuffle([
        {choice: "America do Sul", answer: 1},
        {choice: "America do Norte", answer: 0},
        {choice: "Asia", answer: 0}
        ])
},
{
    question: "Qual a capital dos EUA?",
    choices: _.shuffle([
        {choice: "Buenos Aires", answer: 1},
        {choice: "Washington DC.", answer: 0},
        {choice: "Vancouver", answer: 0}
        ])
},
{
    question: "Qual a cor do cavalo branco do Napoleão?",
    choices: _.shuffle([
        {choice: "Branco", answer: 1},
        {choice: "Preto", answer: 0},
        {choice: "Vermelho", answer: 0}
        ])
},
{
    question: "Quem roeu a roupa do rei de roma?",
    choices: _.shuffle([
        {choice: "O Castor", answer: 1},
        {choice: "O Gato", answer: 0},
        {choice: "O Rato", answer: 0}
        ])
},
{
    question: "De quem é a famosa frase “Penso, logo existo”?",
    choices: _.shuffle([
        {choice: "Platão", answer: 1},
        {choice: "Galileu Galilei", answer: 0},
        {choice: "Descartes", answer: 0}
        ])
},
{
    question: "Quais o menor e o maior país do mundo?",
    choices: _.shuffle([
        {choice: "Vaticano e Rússia", answer: 1},
        {choice: "Nauru e China", answer: 0},
        {choice: "Brasil e Canadá", answer: 0}
        ])
},
{
    question: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    choices: _.shuffle([
        {choice: "O Senhor dos Anéis", answer: 1},
        {choice: "Dom Quixote", answer: 0},
        {choice: "O Pequeno Príncipe", answer: 0}
        ])
},
{
    question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    choices: _.shuffle([
        {choice: "12 minutos", answer: 1},
        {choice: "12 horas", answer: 0},
        {choice: "8 minutos", answer: 0}
        ])
},
{
    question: "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",
    choices: _.shuffle([
        {choice: "A Mitologia", answer: 1},
        {choice: "A Filosofia", answer: 0},
        {choice: "A Astronomia", answer: 0}
        ])
},
{
    question: "Qual o verdadeiro nome do Super Homem aqui na Terra?",
    choices: _.shuffle([
        {choice: "Clark Kent", answer: 1},
        {choice: "Bruce Wayne", answer: 0},
        {choice: "Peter Park", answer: 0}
        ])
},
{
    question: "Quantas estrelas existem no nosso Sistema Solar?",
    choices: _.shuffle([
        {choice: "Uma", answer: 1},
        {choice: "Mais de um bilhão", answer: 0},
        {choice: "Um Milhão", answer: 0}
        ])
},
{
    question: "Aproximadamente, quanto tempo leva o período de translação da Terra?",
    choices: _.shuffle([
        {choice: "Um ano", answer: 1},
        {choice: "Um dia", answer: 0},
        {choice: "Seis meses", answer: 0}
        ])
},
{
    question: "Em qual país fica a Torre Eiffel?",
    choices: _.shuffle([
        {choice: "França", answer: 1},
        {choice: "Alemanha", answer: 0},
        {choice: "Paris", answer: 0}
        ])
},
{
    question: "Qual é a capital da Austrália? ",
    choices: _.shuffle([
        {choice: "Camberra", answer: 1},
        {choice: "Sydney", answer: 0},
        {choice: "Melbourne", answer: 0}
        ])
},
{
    question: "Qual é a maior ave do mundo?",
    choices: _.shuffle([
        {choice: "Avestruz", answer: 1},
        {choice: "Pavão", answer: 0},
        {choice: "Gavião", answer: 0}
        ])
},
{
    question: "Em qual país o papel foi  inventado?",
    choices: _.shuffle([
        {choice: "China", answer: 1},
        {choice: "Egito", answer: 0},
        {choice: "Japão", answer: 0}
        ])
},
{
    question: "Que país inventou a pizza?",
    choices: _.shuffle([
        {choice: "Itália", answer: 1},
        {choice: "França", answer: 0},
        {choice: "Portugal", answer: 0}
        ])
},
{
    question: "Qual desses não faz parte das novas 7 maravilhas do mundo?",
    choices: _.shuffle([
        {choice: "Pirâmides de Gizé - Egito", answer: 1},
        {choice: "Cristo Redentor - Rio de Janeiro", answer: 0},
        {choice: "Coliseu - Roma", answer: 0}
        ])
}
]);

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

var numQuestions = questions.length - 15;

var userAnswer = [];

var currentQuestionText = [];

var teste = [];

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();





    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Por favor escolha uma resposta.");
                $(document).find(".quizMessage").show();
            } else {

                userAnswer.push(questions[currentQuestion].choices[value].choice);

                currentQuestionText.push(questions[currentQuestion].question);

                teste.push(questions[currentQuestion].choices[value].answer);

                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                //Apenas comparo se o valor do key answer da pergunta escolhida é igual a um
                if (questions[currentQuestion].choices[value].answer === 1) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready

                if (currentQuestion < numQuestions) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Início!");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
        /*quizOver = false;
        $(document).find(".nextButton").text("Próxima Pergunta");
        resetQuiz();
        displayCurrentQuestion();
        hideScore();*/
        startScreen();
    }
});
});


// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text((currentQuestion + 1) + '. ' + question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    var answer;
    for (i = 0; i < numChoices; i++) {
        //Apenas acesso mais um nivel(choice) para buscar as questões
        choice = questions[currentQuestion].choices[i].choice;
        $('<li><input type="radio" id="item'+ i +'" value=' + i + ' name="dynradio" /><label for="item'+ i +'">' + choice + '</label></li>').appendTo(choiceList);
    }
}

function startScreen() {
	quizOver = false;
	$(document).find(".nextButton").text("Próxima Pergunta");
	resetQuiz();
    hideScore();
    window.location.href = "start.html";
}


function resetQuiz() {
    location.reload();
    currentQuestion = 0;
    correctAnswers = 0;
    userAnswer = [];
    currentQuestionText = [];
    hideScore();
}


function displayScore() {

    //console.log(userAnswer);

    //console.log(currentQuestionText);

    console.log("Teste: " + teste);

	var feedback = $(document).find(".quizContainer > .result");

	$(document).find(".question").hide();
	$(document).find(".choiceList").hide();
    $(document).find(".quizContainer > .result").text("Você acertou " + correctAnswers + " de " + numQuestions);

    

    if (correctAnswers >= 3) {
    	$('<p>Parabéns! <br> Você ganhou!</p>').appendTo(feedback);
    } else {
    	$('<p>Que pena! <br> Não foi dessa vez!</p>').appendTo(feedback);
    }

    //console.log(questions[currentQuestion].choices[value].answer);

    for (i = 0; i < userAnswer.length; i++) {
        
        $('<p>Questão: '+questions[i].question+'</p>').appendTo('.teste1');
        
        var choices = questions[i].choices;
        
        for(choice in choices) {
            
            var estilo = "";
            
            if(choices[choice].answer === 1){
                estilo = ' style="color: green;"';
            } else {
                estilo = ' style="display: none;"'
            }
            
            $('<p'+estilo+'> '+choices[choice].choice+'</p>').appendTo('.teste1');
        }

        if (teste[i] != 1) {
                estiloUser = ' style="color: red;"';
            } else {
                estiloUser = ' style="color: green;"';
            }

            $('<p'+estiloUser+'>Resposta escolhida: ' + userAnswer[i] + '</p>').appendTo('.teste1');


        /*if (questions[i].choices[value].answer === 1) {
            $('<p>' + (i + 1) + '. ' + currentQuestionText[i] + '<br /><br />R: ' + userAnswer[i] + ' &mdash; Certo!</p><br />').appendTo(".teste1");
        } else {
            $('<p>' + (i + 1) + '. ' + currentQuestionText[i] + '<br /><br />R: ' + userAnswer[i] + ' &mdash; Errado!</p><br />').appendTo(".teste1");
        }*/
    }

    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}