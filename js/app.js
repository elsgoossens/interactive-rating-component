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
        for(let j=0;j<rates.length;j++)
        {
            rates[j].classList.remove("rate-on");
        }
        ev.target.classList.toggle("rate-on");
        current=ev.target.innerText;
    })
}

// for loop over rates, add event listeners on hovering

btnSubmit.addEventListener("click", function(ev){
    selectedRate.innerText = selectedRate.title.replace("@rate", current);
    thankYou.classList.toggle("hidden");
    thankYou.ariaExpanded = ! thankYou.ariaExpanded;
    rating.classList.toggle("hidden");
    rating.ariaExpanded = ! rating.ariaExpanded;
});