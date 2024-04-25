const factButton = document.querySelector("#btn");

factButton.addEventListener("click", async () => {
    
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            
            if(!response.ok) {
                throw new Error("Damn!");
            }
            
            const data = await response.json();
            console.log(data)
    
            const fact = document.querySelector("#fact").innerHTML = data.value;
            
        }
        catch(error) {
            console.log(error);
        }
    
});
