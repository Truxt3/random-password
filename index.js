const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp 
// Para copiar al portapapeles.
let passOne = document.getElementById("passOne")
let passTwo = document.getElementById("passTwo")

//FUNTION FOR GENERATE PASSWORDS

function generate(){
    let passwordOne = ""
    let passwordTwo = ""
    for (i=0; i<15; i++){
        passwordOne += characters[Math.floor(Math.random()*characters.length)]
        passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    passOne.textContent = passwordOne
    passTwo.textContent = passwordTwo
}

//FUNCTION FOR COPY TO CLIPBOARD
