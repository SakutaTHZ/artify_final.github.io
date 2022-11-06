function randomQuotes() {
    var textIndex = 1;
    var countdown = 50;
    var index = 0;
    setInterval(() => {
        var text = dialogue[index].slice(0, textIndex);
        textIndex++;
        
        // console.log(text);
        document.querySelector(".quote").innerHTML = "" + text + "|";
        document.querySelector(".quote").addEventListener("click", () => {
            index = Math.floor(Math.random() * dialogue.length);
            text = '';
            countdown = 50;
            textIndex = 1;
        })
        if(text == dialogue[index]) {
            if(countdown == 0) {
                index = Math.floor(Math.random() * dialogue.length);
                text = '';
                countdown = 50;
                textIndex = 1;
            }else {
                countdown--;
            }
        }
    }, 80)
}
randomQuotes();