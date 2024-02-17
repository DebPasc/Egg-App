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


function checkForZero(newCountNum, dayCountNum) {
    if (dayCountNum === 0 || newCountNum===0) {
        return 0;
    }
    return newCountNum / dayCountNum;
}



let currentDate = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let currentMonthIndex = currentDate.getMonth();
let currentMonth = monthNames[currentMonthIndex];
let holdMonthDailyAvg = currentMonth.toLowerCase() +"DailyAvg";



let count = 0;
let dayCount = 0;
let newCount = 0;
let dailyAvg = checkForZero(newCount, dayCount);                       //this returns NaN
let dailyEggTot = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let dayEl = document.getElementById("days-el");
let avgEl = document.getElementById("avg-el");


let janDailyAvg = 0;
let febDailyAvg = 0;
let marDailyAvg = 0;
let aprDailyAvg = 0;
let mayDailyAvg = 0;
let junDailyAvg = 0;
let julDailyAvg = 0;
let augDailyAvg = 0;
let sepDailyAvg = 0;
let octDailyAvg = 0;
let novDailyAvg = 0;
let decDailyAvg = 0;

// put this in a function
// for(let i = 0; i < monthNames.length; i++){
//     document.getElementById(monthNames[i].toLowerCase() + "-el").textContent = monthNames[i];
// }




document.getElementById("jan-el").textContent = "Jan";
document.getElementById("feb-el").textContent = "Feb";
document.getElementById("mar-el").textContent = "Mar";
document.getElementById("apr-el").textContent = "Apr";
document.getElementById("may-el").textContent = "May";
document.getElementById("jun-el").textContent = "Jun";
document.getElementById("jul-el").textContent = "Jul";
document.getElementById("aug-el").textContent = "Aug";
document.getElementById("sep-el").textContent = "Sep";
document.getElementById("oct-el").textContent = "Oct";
document.getElementById("nov-el").textContent = "Nov";
document.getElementById("dec-el").textContent = "Dec";




function increment() {
    count += 1;
    //document.getElementById("count-el").innerText = count
    countEl.textContent = "Collected today: " +parseInt(count);
    console.log(count);
    
}

function clearCount() {
    console.log(count);
    count = 0;
    console.log(count);   
    countEl.textContent = "Collected today: ";   
}

function save() {
    //display all daily eggs collected
    dailyEggTot = count + ", ";
    console.log(dailyEggTot);
    saveEl.textContent += dailyEggTot;//picks up spaces in innerHTML, doesn't delete previous info
    dayCount += 1;              //increase day counter every time SAVE is clicked
    dayEl.textContent = "Number of Days: " + parseInt(dayCount);
    newCount += count;  //holds a running total of eggs collected
    console.log(newCount);
    let tempDailyAvg = newCount/dayCount;
    avgEl.textContent = "Daily Average for " + currentMonth + ": " + parseInt(tempDailyAvg);
    console.log(avgEl.textContent);
    holdMonthDailyAvg = tempDailyAvg;

    
    console.log("temp" + holdMonthDailyAvg)  ;       //store avg in month and hold for display of ALL months later
    //shows the total eggs collected divided by number of days
    //avgEl.textContent = "Daily Average for " + currentMonth + ": " + parseInt(newCount / dayCount);
    count = 0;
    countEl.textContent = "Collected today: ";
    
    
}
//toggle button to display all months, change text in button, and then hide boxes again

function monthsAll() {
    let togButton = document.getElementById("months-all-btn");
    if (togButton.textContent === "See Averages for All Months"){
        for (let i = 0; i < monthNames.length; i++) {
            let elementLowerMonth = monthNames[i].toLowerCase();
            let monthDiv = document.getElementById(elementLowerMonth + "-el");
            monthDiv.style.display = "block";
            holdMonthDailyAvg = parseInt(elementLowerMonth +"DailyAvg") || 0;
           /* if (currentMonthDailyAvg !== 0) {
                monthNamesDailyAvg= currentMonthDailyAvg;*/
        
            monthDiv.textContent = monthNames[i] + ": " + holdMonthDailyAvg;
            console.log(holdMonthDailyAvg);
            togButton.textContent = "Hide Month Averages";
        }
   
        /*togButton.textContent = "Hide Month Averages"
        togButton.style.display = "none";*/
    
        
    } else {
        togButton.textContent === "Hide Month Averages";
        for (let i = 0; i < monthNames.length; i++) {
            let elementLowerMonth = monthNames[i].toLowerCase()
            let monthDiv = document.getElementById(elementLowerMonth + "-el");
            monthDiv.style.display = "none";
            togButton.textContent = "See Averages for All Months";
        }
    }
}
    /*for(let i = 0; i < monthNames.length; i++) {
        let monthDiv = document.getElementById(monthNames[i].toLowerCase() + "-el");
        monthDiv.textContent = monthNames[i];
        let monthAvgNamesTemp = monthNames[i].toLowerCase() +"DailyAvg";
        if (parseInt(monthAvgNamesTemp) <0) {
            monthAvgNamesTemp=parseInt(0);
        }
        console.log(monthAvgNamesTemp);
        
        document.write(monthDiv.textContent = monthNames[i] + " " +parseInt(monthAvgNamesTemp));
    }
        
    }*/
    /* 


    /**/

    ////reset the daily screen to 0  

function reset() {
    count = 0;
    countEl.textContent = "Collected today: ";

    dailyEggTot = 0;
    saveEl.textContent = "Daily Egg Totals: ";

    dayCount = 0;
    dayEl.textContent = "Number of Days: ";

    newCount = 0;
    avgEl.textContent = "Daily Average: ";

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






