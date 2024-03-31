let moves = {
    0: "Rock",
    1: "Paper",
    2: "Scissor",
}
let score = JSON.parse(localStorage.getItem("LocalScore")) || {
    user: 0,
    comp: 0,
    tie: 0,
};
function showScore() {
    document.getElementById("score").innerText = `Score: You(${score.user}), Computer(${score.comp}), Tie(${score.tie})`;
}
showScore();
function computerMove() {
    return moves[(Math.floor(Math.random() * 3))];
}
function getResult(userMove, compMove) {
    if (userMove === compMove) {
        score["tie"]++;
        return "It's a Tie."
    } else if ((userMove === moves[0] && compMove === moves[1]) || (userMove === moves[1] && compMove === moves[2]) || (userMove === moves[2] && compMove === moves[0])) {
        score["comp"]++;
        return "Computer Wins."
    } else {
        score["user"]++;
        return "You Win."
    }
}
function printResult(userMove) {
    let compMove = computerMove();
    document.getElementById("user").innerText = `You Choose : ${userMove}`;
    document.getElementById("computer").innerText = `Computer Choose : ${compMove}`;
    document.getElementById("result").innerText = getResult(userMove, compMove);
    localStorage.setItem("LocalScore", JSON.stringify(score));
    showScore();
}
function resetScore() {
    score = {
        user: 0,
        comp: 0,
        tie: 0,
    }
    localStorage.setItem("LocalScore", JSON.stringify(score));
    document.getElementById("user").innerText = "";
    document.getElementById("computer").innerText = "";
    document.getElementById("result").innerText = "";
    showScore();
}
greet();
function greet() {
    let greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        greeting.innerText = "Good Morning Buddy!!!"
    } else if (hour >= 12 && hour < 19) {
        greeting.innerText = "Good Afternoon Buddy!!!"
    } else {
        greeting.innerText = "Good Night Buddy!!!"
    }
}