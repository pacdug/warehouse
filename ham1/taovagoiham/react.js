let result = "";

function ProcessConfirm(answer) {
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}

let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = ProcessConfirm(confirmAnswer);
alert(theAnswer);