String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


var word = "";
var sol = "";
var c;

word = window.prompt("enter the word");

while(word === ""){
    word = window.prompt("enter the word");
    console.log(word);
}

for(var i = 0; i < word.length; i++){
    if(/^[0-9a-z]+$/.test(word[i])){

        sol = sol.concat('_');

    }else if(word[i] === ' '){
        sol = sol.concat(' ');
    }
}

var label = document.getElementById('text');

var box = document.getElementById('textBox');

var button = document.getElementById('btn');

label.textContent = sol;

var rep=0;
var count = 0;

button.addEventListener ("click", function() {
    c = box.value;
    count++;
    for (var i = 0; i < word.length; i++) {
        if (c == word[i]) {
            rep++;
            
            sol = sol.replaceAt(i, word[i]);

            label.textContent = sol;
            console.log(sol);
            if(sol === word){
                window.alert("you won");
            }    
        }
        
        box.value = '';
    }
    if(count === 9){
        window.alert('you lost');
        location.reload();
    }
  });
  textBox.addEventListener("keyup", function () { 
  
    // Checking if key pressed is ENTER or not 
    // if the key pressed is ENTER 
    // click listener on button is called 
    if (event.keyCode == 13) { 
        button.click(); 
    } 
  
  });