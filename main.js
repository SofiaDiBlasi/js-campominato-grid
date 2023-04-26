let startButton = document.getElementById("start");
let container = document.querySelector("div.container");

//creo una funzione: dato un numero creerò un div con il numero scritto al suo interno
function createDiv(numero) {
    let div = document.createElement("div");
    div.className = "square";
    div.innerHTML += numero;
    div.addEventListener("click", function(){
        console.log("this: ", this.innerHTML);
        this.classList.toggle("clicked");
    });
    return div;
}

//creo un'altra funzione, dati un div padre ed un div figlio, attaccherà (in append) il figlio al padre
function attachChild(divPadre, divFiglio){
    divPadre.append(divFiglio);
}

//creo un evento al bottone per quando andrà ad essere cliccato
startButton.addEventListener("click", function(){
    for (let i = 1; i <= 100 ; i++) {
       let createdDiv = createDiv(i);
        attachChild(container, createdDiv);
    }
})
