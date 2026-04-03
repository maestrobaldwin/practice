function styleChange(){
    const styleChange = document.querySelector("link");
    styleChange.href = "trivia.css";
}

function birth(){
    const bday = "1980";
    const answerOne = document.getElementById("answerOne");
    const userAnswer = document.getElementById("birth").value;
    const image = document.querySelector("img#birthPic");
    if (userAnswer===bday)
    {
        answerOne.innerText = "Correct. Congratulation!";
    image.src="correct.png";}
        else
            {answerOne.innerText = "Please try again.";
                image.src="wrong.png";
            }
    }

    function degree(){
    const degree = "Four";
    const answerTwo = document.getElementById("answerTwo");
    const userAnswerTwo = document.getElementById("degree").value;
    const image = document.querySelector("img#degreePic");
    if (userAnswerTwo===degree)
    {
        answerTwo.innerText = "Correct. Congratulation!";
    image.src="correct.png";}
        else
            {answerTwo.innerText = "Please try again.";
                image.src="wrong.png";
            }
    }

        function piano(){
    const degree = "14";
    const answerThree = document.getElementById("answerThree");
    const userAnswerThree = document.getElementById("piano").value;
    const image = document.querySelector("img#pianoPic");
    if (userAnswerThree===degree)
    {
        answerThree.innerText = "Correct. Congratulation!";
    image.src="correct.png";}
        else
            {answerThree.innerText = "Please try again.";
                image.src="wrong.png";
            }
    }