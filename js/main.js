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

// Generate Gallery
function genGallery(){
    var index = 1;
    for (let i = 1; i <= 12; i++) {
        var div = document.createElement("div");
			div.classList.add("card");
			div.innerHTML = `
                <img class="cardImage" src="images/photos/photo2.jpg">
                <div class="cardDetails">
                    <span class="cardProfile">
                    <img src="images/profiles/profile3.jpg" alt="name">
                    </span>
                    <div class="cardDetailsText">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nemo commodi repellat voluptatem vero delectus. Aperiam molestiae, accusantium beatae animi nihil et doloribus corrupti omnis cum ducimus culpa debitis fugit!
                        </p>
                        <h3>Username</h3>
                    </div>
                </div>
                <div class="cardReactions">
                    <span>
                        <img src="images/logos/love.png" alt="">
                        <p class="like">10</p>
                    </span>
                    <span>
                        <img src="images/logos/dislike.png" alt="">
                        <p class="like">10</p>
                    </span>
                    <span>
                        <img src="images/logos/view.png" alt="">
                        <p class="like">1000</p>
                    </span>
                </div>
			`
        console.log(index);
	    document.querySelector(`#column${index}`).appendChild(div);
        index = index <= 4 ? index+1 : 1;
    }
}
genGallery();