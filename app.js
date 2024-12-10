let ques = document.querySelectorAll(".ques");
let flag = 0;
function showAnswer(element) {
    element.style.display = "inline-block";
}

function hideAnswers(indexToShow) {
    let allAnswers = document.querySelectorAll("[class^='ans']");
    allAnswers.forEach((ans, idx) => {
        if (idx === indexToShow && ans.style.display === "none") {
            ans.style.display = "inline-block"; // Show the current answer
        } else {
            ans.style.display = "none"; // Hide all other answers
        }
    });
}

ques.forEach(function (elem, idx) {
    elem.addEventListener("click", function () {
        hideAnswers(idx); // Hide all answers except the current one
    });
});
