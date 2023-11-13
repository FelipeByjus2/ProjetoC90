player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1Name").innerHTML = player1_name + " : ";
document.getElementById("player2Name").innerHTML = player2_name + " : ";
document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;