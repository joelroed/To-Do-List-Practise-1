let form = document.querySelector('#form');
let counterValue = 0;


form.addEventListener('submit',function(event) {
    event.preventDefault()
    counterValue += 1;

    var activities = document.querySelector('#activities').value
    document.querySelector(".output__text").innerHTML += counterValue + ". " + activities + ("<br>")

})

