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

var score = document.getElementById('score');

label.textContent = sol;

var rep=0;
var count = 0;
var b = false;
score.textContent=count.toString()+'/9';

button.addEventListener ("click", function() {
    c = box.value;
    if(c != ""){
        b = false;    
        for (var i = 0; i < word.length; i++) {
            if (c == word[i]) {
                rep++;
                
                sol = sol.replaceAt(i, word[i]);
                b = true;
                label.textContent = sol;
                console.log(sol);
                if(sol === word){
                    window.alert("You Won!!!");
                }    
            }
            
            
            box.value = '';
        }
        if(!b){
            count++;
            score.textContent=count.toString()+'/9';
        }
        if(count === 9){
            window.alert('You lost :(');
        }
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