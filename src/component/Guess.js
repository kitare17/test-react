function Guess(children) {
    let randomNumber = Math.floor(Math.random()*3)+1;
    console.log(randomNumber);
    let userInput= prompt("Guess number 1-3");
    alert(`Computer number ${randomNumber}, Your guess: ${userInput} ${children}`);
}
export default  Guess