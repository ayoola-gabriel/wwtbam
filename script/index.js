let myAudio = document.getElementById("myAudio")
// myAudio.src="../audio/mainTheme.mp3"

window.addEventListener('keydown', function(e){
    if(`${e.key}`==="ArrowRight"){
        this.window.open("q1.html", "_self")
    }  
    
    else if(`${e.key}`==="Enter"){
        // this.alert(`you pressed ${e.key}`)
        myAudio.play()
    }
  }, false)