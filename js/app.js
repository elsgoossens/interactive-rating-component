const btnSubmit = document.getElementById("submit");
const rating = document.getElementById("rating");
const selectedRate = document.getElementById("selected-rate");
const thankYou = document.getElementById("thank-you");
const rates = document.getElementsByClassName("rate");
var current = 0;

for(let i = 0; i < rates.length; i++)
{
    var r = rates[i];
    r.addEventListener("click", function(ev){
        ev.target.classList.toggle("rate-on");
        current=ev.target.innerText;
    })
}

// for loop over rates, add event listeners on hovering

btnSubmit.addEventListener("click", function(ev){
    var s= selectedRate.innerText;
    s = s.replace("@rate", current);
    selectedRate.innerText = s;
    thankYou.classList.toggle("hidden");
    thankYou.ariaExpanded = ! thankYou.ariaExpanded;
    rating.classList.toggle("hidden");
    rating.ariaExpanded = ! rating.ariaExpanded;
});