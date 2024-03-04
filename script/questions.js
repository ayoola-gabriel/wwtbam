let option = "";
let collection = this.document.getElementsByClassName("options");
let pageID = document.getElementById("page_no").innerHTML;
let pageNumber = parseInt(pageID);
console.log(pageID);
console.log(pageNumber);

let countdown = document.getElementById("countdown");

let myAudio = document.getElementById("myAudio");
let timeSound = document.getElementById('time-sound')
// let letsplay = document.getElementById("lets-play")
// letsplay.play()

//Codes to select which music to play
if (pageNumber >= 1 && pageNumber < 5) {
  myAudio.src = "audio/100.mp3";
} else if (pageNumber >= 5 && pageNumber < 10) {
  myAudio.src = "audio/200.mp3";
} else if (pageNumber >= 10 && pageNumber < 15) {
  myAudio.src = "audio/300.mp3";
} else if (pageNumber >= 15 || pageID === "end") {
  myAudio.src = "audio/400.mp3";
}

setTimeout(() => {
  myAudio.play();
}, 4000);
//////////////////////////////////////

//Codes to show the questions
setTimeout(() => {
  let show = document.getElementById("question");
  show.classList.remove("hidden");

  let time = document.getElementById("cnt")
    // countdown.classList.remove("hidden")
    countdown.style='top:calc((210px/2) - 25px);'
    img.style='translate:calc((100vw/2) - 77vw) 0px'
    let cntd = 62000
      // Set the date we're counting down to
  var today = new Date().getTime();
  var cnt = today + cntd;
  

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = cnt - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.trunc((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.trunc((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    time.innerHTML = `${Math.trunc(minutes/10)}` + `${Math.trunc(minutes%10)}`+ ":" + `${Math.trunc(seconds/10)}` + `${Math.trunc(seconds%10)}`;

    // If the count down is over, write some text
    if(distance>(cntd*0.5)){
      time.style='color:green;'
    }
    else if(distance>(cntd*0.25)&& distance<(cntd*0.5)){
      time.style='color:#da5b20;'
      timeSound.src='audio/slow-tick.mp3'
      timeSound.play()
    }
    else if(distance>0 && distance<(cntd*0.25)){
      time.style='color:red;'
      timeSound.src='audio/fast-tick.mp3'
      timeSound.play()
    }
    
    if (distance < 0) {
      clearInterval(x);
      time.style='background-color:red;'
      time.innerHTML = '00:00';
      timeSound.src='audio/timeup.mp3'
      timeSound.play()
    }

    if(option!="") {
      clearInterval(x)
      timeSound.pause()
    }
  }, 1000);
}, 1000);

setTimeout(() => {
  collection[0].classList.remove("hidden");
}, 3000);

setTimeout(() => {
  collection[1].classList.remove("hidden");
}, 4000);

setTimeout(() => {
  collection[2].classList.remove("hidden");
}, 5000);

setTimeout(() => {
  collection[3].classList.remove("hidden");
}, 6000);
//////////////////////////////////////////////


//function to highlight an option when it is chosen
window.addEventListener(
  "keydown",
  function (e) {
    let key = e.key;
    if (key == "a") {
      collection[0].style.backgroundColor = "yellow";
      collection[0].style.color = "black";
      option = collection[0];
    } else if (key == "b") {
      collection[1].style.backgroundColor = "yellow";
      collection[1].style.color = "black";
      option = collection[1];
    } else if (key == "c") {
      collection[2].style.backgroundColor = "yellow";
      collection[2].style.color = "black";
      option = collection[2];
    } else if (key == "d") {
      collection[3].style.backgroundColor = "yellow";
      collection[3].style.color = "black";
      option = collection[3];
    }
  },
  false
);
///////////////////////////////////////////

//function for 50/50 and selecting the right answer
window.addEventListener(
  "keydown",
  function (e) {
    let right = document.getElementsByClassName("right");
    let wrong = document.getElementsByClassName("wrong");

    if (`${e.key}` === "Delete") {
      for (let i = 0; i < wrong.length; i++) {
        wrong[i].childNodes[3].classList.add("hidden");
      }
      const x = Math.floor(Math.random() * 3);
      wrong[x].childNodes[3].classList.remove("hidden");
    }
    ///////////////////////////

    //Function to mark the right answer
    if (`${e.key}` === "Enter") {
      right[0].style.backgroundColor = "green";
      right[0].style.color = "white";

      if (option != right[0]) {
        option.style.backgroundColor = "red";
        option.style.color = "white";
        myAudio.src = "audio/wrong.mp3";
        myAudio.play();
      } else {
        myAudio.src = "audio/correct.mp3";
        myAudio.play();
      }
      ///////////////////////////////////

      setTimeout(() => {
        let show = document.getElementById("question");
        show.classList.add("hidden");
      }, 5000);

      setTimeout(() => {
        collection[0].classList.add("hidden");
      }, 4900);

      setTimeout(() => {
        collection[1].classList.add("hidden");
      }, 4800);

      setTimeout(() => {
        collection[2].classList.add("hidden");
      }, 4600);

      setTimeout(() => {
        collection[3].classList.add("hidden");
        myAudio.src = "audio/mainTheme.mp3";
        myAudio.play();
        // myAudio.loop = true;

        countdown.classList.add("hidden")
        let img = document.getElementById("img");
        img.style.transition = "width 2s, translate 3s";
        img.style.width = "40%";
        img.style.translate = "0px calc(100vh/2 - 195px)";
      }, 4500);
    }
  },
  false
);
///////////////////////////////////////////////////////////

//function to go to the next question
window.addEventListener(
  "keydown",
  function (e) {
    if (`${e.key}` === "ArrowRight") {
      if (pageID != "end") {
        let nextPage = pageNumber + 1;
        console.log(nextPage);
        nextPage = "q" + `${nextPage}` + ".html";
        this.window.open(nextPage, "_self");
      } else {
        this.window.open("index.html", "_self");
      }
    }
  },
  false
);
//////////////////////////////
