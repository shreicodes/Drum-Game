
//Detecting button clicks

var total=document.querySelectorAll(".drum").length;
for (i=0;i<total;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
var selected= this.innerHTML ; 
makeSound (selected);
buttonAnimation(selected);

    }) ;
}


//Detecting keyboard presses

document.addEventListener("keydown",function(event)
{
    makeSound(event.key) ;
buttonAnimation (event.key);
})

//Function for making sound
function makeSound(key)
{
    switch (key) {
        case "w":
        var audio = new Audio ("tom-2.mp3");
            audio.play();
            
            break;
    
            case "a":
                var audio=new Audio ("tom-1.mp3");
                audio.play();
                
                break;
    
    
                case "s":
                    var audio=new Audio ("kick-bass.mp3");
                    audio.play();
                    
                    break;
    
                    case "d":
                        var audio=new Audio ("crash.mp3");
                        audio.play();
                        
                        break;
    
                        case "j":
                            var audio=new Audio ("snare.mp3");
                            audio.play();
                            
                            break;
    
                            case "k":
                                var audio=new Audio ("tom-3.mp3");
                                audio.play();
                                
                                break;
    
                                case "l":
                                    var audio=new Audio ("tom-4.mp3");
                                    audio.play();
                                    
                                    break;
        
    
    }

}

function buttonAnimation (key)
{
    var activeButton = document.querySelector("."+key) ; 
    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed")
    },100);
}


