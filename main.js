let random = Math.floor(Math.random() * 100);

let btn = document.getElementById("btn");

let result = document.getElementById("result");

let counter = 1;

btn.addEventListener("click", function () {
  let user_guess = document.getElementById("user_guess").value;

  if (user_guess == random) {
    result.style.color = "green";
    result.innerHTML = " You Guessed It Right In " + counter + " Guesses !";
  } else if (user_guess > random) {
    counter++;
    result.style.color = "red";
    result.innerHTML = " You Guessed It Wrong, Try Lower Number #" + counter - 1;
  } else {
    counter++;
    result.style.color = "red";
    result.innerHTML = " You Guessed It Wrong, Try Higher Number #" + counter -1;
  }
});
