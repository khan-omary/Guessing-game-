
let randomNumber = Math.floor(Math.random() * 20);
let attempt = 5;


const checkGuess = () => {
    let userGuess = Number(document.querySelector("#guess-input").value);
    let showResult = document.querySelector("#HistoryArea > h2");

    if (!isNaN(userGuess) && userGuess >= 1) {
        attempt--;
        End(attempt);
        if (userGuess > randomNumber) {
            showResult.textContent = "Too big";
            

        } else if (userGuess < randomNumber) {
            showResult.textContent = "Too small";
            

        } else {
            document.body.style.backgroundColor = "rgb(0, 180, 20)";
            showResult.textContent = "You Win!";
            showResult.style.color = "red";
            document.querySelector("#guess-input").disabled = true;
        }

    } else {
        showResult.textContent = "Enter valid number!";
    }
    document.querySelector('#guess-input').value = "";
};


// button click
document.querySelector("#guess-button").addEventListener('click', checkGuess);

// Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});


window.addEventListener('load', () =>{
    document.querySelector('#guess-input').focus();
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R'){
        location.reload();
    }
});

document.querySelector('#Refresh-button').addEventListener('click', ()=>{
    location.reload();
})

function End(attempt){
    if (attempt === 0){
        document.body.style.backgroundColor = "rgb(182, 13, 13)";
        document.querySelector("#guess-input").disabled = true;
        alert("You Loss !");
    }
}