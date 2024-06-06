const styles = getComputedStyle(document.documentElement); 
/* This line of code gives you access to the CSS variables and styles. */
const T1 = styles.getPropertyValue('--T1');  //this is how to get it.
//no im not crazy to write all of them lol, for loop everything
const List = document.getElementById("Listing"); 

const CheckButton = document.getElementById("CheckButton");

const ColorArray = [];
let count = 50;
function CreateList() {
    for(let i = 1; i<=49; i++)
        {
        ColorArray[i] = styles.getPropertyValue(`--T${i}`);  //get all elements u can find and more lol
        }
    for(let i = 0; i<ColorArray.length; i++)
        {
            const option = document.createElement('option'); //create option
            option.textContent = ColorArray[i+1]; //select it from the color array
            List.appendChild(option); //then finally, append it
        }    
        List.style.width = '200px'; //width kinda increases to idk over 9000
        List.style.backgroundColor = 'cyan'; //looks better like this
}
CreateList();

CheckButton.addEventListener("click",function() {
    const selectedColorIndex = List.selectedIndex; //idk why use this
    document.body.style.background = ColorArray[selectedColorIndex + 1];
    /* Options, arrays, etc start at 0. This THING, starts at 1 */
})
//T1 through T25 elements.

const audio = document.getElementById("audio");
function playAudio() {
    audio.play();
}

function StopAudio() {
    audio.pause();
}
let b; //starting function
const mainElement = document.getElementById("m");

playAudio();
function GenerateColors() {

    let FirstColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');
    let SecondColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');
    let ThirdColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');
    let FourthColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');
    let FifthColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');
    let SixthColor = '#' + Math.floor(Math.random().toFixed(2) * 16777215).toString(16).padStart(6, '0');

    let LinearGradient = `linear-gradient(${FirstColor},${SecondColor},${ThirdColor})`;
    let RadialGradient = `radial-gradient(${FourthColor},${FifthColor},${SixthColor})`;

    const divElement2 = document.createElement('div');
    const divElement = document.createElement('div');

    divElement.style.width = '150px';
    divElement.style.height = '150px';
    divElement.style.background =  LinearGradient;
    divElement.style.border = '2px solid black';

    divElement2.style.width = '150px';
    divElement2.style.height = '150px';
    divElement2.style.borderRadius = '100%';
    divElement2.style.animation = '10s linear infinite spin';
    divElement2.style.background = RadialGradient;
    divElement.style.border = '2px solid black';

    mainElement.appendChild(divElement);
    mainElement.appendChild(divElement2);

    count++;
    ColorArray[count] = LinearGradient;
    count++;
    ColorArray[count] = RadialGradient;

}

const StartButton = document.getElementById("StartButton");
const StopButton = document.getElementById("StopButton");

function StopGeneration() {
clearInterval(b);
}
StartButton.addEventListener("click", () => {
    if(b)
        {
            return b; //if b is running, don't do anything and just return it.
        }
        else {
            b = setInterval(GenerateColors,200); //else start the interval with that function and 200 mil second
        }
});
StopButton.addEventListener("click", StopGeneration);
const NextButton = document.getElementById("NextButton");

NextButton.addEventListener("click", () => {
    window.location.href = "gogo.html";
})

let Count2 = 50;
function UpdateList() {
    for(let i = Count2; i<count; i++)
        {
            const optionElement = document.createElement('option');
            optionElement.textContent = ColorArray[i];
            List.appendChild(optionElement);
        }
        Count2 = count; //trying to avoid duplicates while adding it
}
function Help() {
alert("To test the background you see, select it in the list, then click `Background Test` ");
alert("To play music, press play music, to clear, press pause music.");
alert("To start generating more colors, press Generate, to stop, press Stop Generating");
alert("To update the list of colors after generation, press Update List");
alert("To go to our introduction page, Introduction page");
}