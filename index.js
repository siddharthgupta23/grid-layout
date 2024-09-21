favouriteMovieGenre("space")

favouriteFruit("avocado")


favouriteMode("dark")

favouriteEdgeStyle("sharp")

function setProp(prop,value)
{
    document.getElement.style.setProperty(prop,value)

}

function favouriteEdgeStyle(style)
{
    setProp("--image","var(--"+style+")");
}

function favouriteMovieGenre(font)
{
    if(font)
    {
        setProp("--font","var(--"+font+")")

    }
}

function favouriteMode(mode)
{
    if(mode== "light" || !mode)
    {
        setProp('--background',"var(--light)");
        setProp('--text',"var(--dark)");

    }
    else if(mode==="dark")
    {
        setProp('--background',"var(--dark)");
        setProp('--text',"var(--light)")
    }
}

function favouriteFruit(theme)
{
    if(theme==="pastel")
    {
        setProp('--light',"#f2f6c3")
        setProp('--dark',"#68c4af")
    }

    else if (theme==="muted")
    {

      setProp('--light',"#4c5b64")
      
      setProp('--dark',"#68c4af")
    }
    else if (theme=== 'love')
    {
        setProp('--light',"#f06836")
        setProp('--dark', "#ba0001")
    }
}

let firstCard=6
let secondCard=9
let sum= firstCard+secondCard
console.log(sum)
if (sum<21)
{
    console.log("Do you want to draw a card")
}
else if(sum===21)
{
console.log("You have got Blackjack")
}
else
{
    console.log("You are out of game ")
}

let age=21
if (age< 21)
{
    console.log("You cannot enter the club")
}
else{
    console.log("Welcome")
}

let agee=10

if (agee < 100)
{
    console.log("Not eligible")
}
else if(age===100){
console.log("Here is your Birthday Card from the King")
}

else{
    console.log(" Not eligible, you have already gotten there")
}