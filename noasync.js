const factButton = document.querySelector("#btn");
const factText = document.querySelector("#fact");

factButton.addEventListener("click", () => {
    
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => {
    
            if(!response.ok) {
                throw new Error("Damn!")
            }
            return response.json()
    
        })
        .then(data => {
            factText.innerHTML = data.value; //Fact itselft
        })
        .catch(error => console.log(error));
})
