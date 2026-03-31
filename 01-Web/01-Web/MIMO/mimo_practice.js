function output(){
    const el = document.querySelectorAll("h1");
    const answer = document.querySelectorAll("p");
    answer.innerHTML = el[0].innerHTML;
}
