var form = document.querySelector('#form');

form.addEventListener('submit',function(event) {
    event.preventDefault()

    var activities = document.querySelector('#activities').value
    
    console.log(activities)
})