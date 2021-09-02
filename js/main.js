function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    
}

function showSumPrice(price, amountNumber){
    let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if  ( amountNumber < 1 ) {
        alert ("Minimum 1 terméket kell vásárolnia!"); 
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
    
}

//Ad helptext. 
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);


parent.removeChild(helpText);



// Window events. 
/*let sendButton = document.querySelector("form .btn.btn-primary");
    sendButton.addEventListener("click", function(){
        alert("Hello JS!");
});

sendButton.onclick = function(){
    alert("Hello JS!")
}*/





//Második gomb egy másik gombra 

let probButton = document.querySelector(".btn-danger");
probButton.onclick = function(){
    alert("3...2...1....BUMmm!!!")
}

//Iron man

let ironButton = document.querySelector(".btn-secondary");
    ironButton.onclick = function(){
        alert("Én vagyok Vasember! ;)")
    }


//Űrlap események. 
let orderFrom = document.querySelector("#orderFrom");
orderFrom.addEventListener("submint", function(ev) {
        ev.preventDefault();
        console.log( this )
});

//Parent element kezelése. 
let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
let alertClosEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
};
for(let i= 0; i< alertCloseButton.length; i++) {
    alertCloseButton[i].addEventListener("click", alertClosEventHandlerFunction); 
}


//Select elem kitöltése.
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0; 
while(index < toppings.length){
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}