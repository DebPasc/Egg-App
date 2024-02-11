/*let myAge = 66
console.log(myAge)

let humandogRatio =7
let myDogAge = myAge * humandogRatio
console.log(myDogAge)

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when button clicked
//change count-el in HTML to reflect the new count
//create function increment()

function increment() {
    console.log("The button was clicked")

}

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()
countdown()

function numShow() {
    console.log(42)
}
numShow()

let lap1= 34
let lap2 = 33
let lap3 = 36

function lapSum() {
    console.log(lap1+lap2+lap3) //or let totalTime=lap1+lap2+lap3 but variable only works within function
}

lapSum()

let lapsCompleted = 0

function incrementLaps() {
    lapsCompleted+=1
}
incrementLaps()
incrementLaps()
incrementLaps()
console.log(lapsCompleted)*/

let count = 0
let dayCount = 0
let newCount = 0
let dailyAvg = newCount/dayCount
let dailyEggTot = 0

let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let dayEl=document.getElementById("days-el")
let avgEl=document.getElementById("average-el")



function increment() {
    count+=1
    //document.getElementById("count-el").innerText = count
    countEl.textContent= count

}

function save() {
    //display all daily eggs collected
    dailyEggTot = count + ", "
    console.log(dailyEggTot)
    saveEl.textContent += dailyEggTot//picks up spaces in innerHTML, doesn't delete previous info

    //increase day counter every time SAVE is clicked
    dayCount+=1
    dayEl.textContent="Number of Days: " + parseInt(dayCount)
    newCount=newCount + count   //holds a running total of eggs collected
    console.log(newCount)
    
    //shows the total eggs collected divided by number of days
    avgEl.textContent="Daily Average: " + parseInt(newCount/dayCount)
    
    //reset the daily screen to 0  
    count=0
    countEl.textContent= count
}
//set the screen totals back to 0
function reset() {
    count = 0
    countEl.textContent= count

    dailyEggTot = 0
    saveEl.textContent += "" 

    dayCount = 0
    dayEl.textContent="Number of Days: "

    newCount = 0
    avgEl.textContent="Daily Average: " 

}


/*using strings
let username = "deb"
console.log(username)

let message = "You have three new notifications"
console.log(message)
console.log(message + ", " + username +"!")

let messageToUser = message +", " + username +"!"
console.log(messageToUser)

//create two variables, name and greeting.  The name variable should store your name
//greeting should store "Hi, my name is "
//create third variable, myGreeting, that concatenates the two strings
//lot myGreeting to the console

let uName = "deb"
let greeting = "Welcome back, "
let myGreeting = greeting + uName +"."
console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText= myGreeting + "😊"*/






























