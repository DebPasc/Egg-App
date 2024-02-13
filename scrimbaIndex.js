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

let currentDate = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let currentMonthIndex = currentDate.getMonth();
let currentMonth = monthNames[currentMonthIndex];

let count = 0;
let dayCount = 0;
let newCount = 0;
//let dailyAvg = newCount / dayCount;                       //this returns NaN
let dailyEggTot = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let dayEl = document.getElementById("days-el");
//let avgEl = document.getElementById("average-el");


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

    //increase day counter every time SAVE is clicked
    dayCount += 1;
    dayEl.textContent = "Number of Days: " + parseInt(dayCount);
    newCount += count;  //holds a running total of eggs collected
    console.log(newCount);
    

    //shows the total eggs collected divided by number of days
    //avgEl.textContent = "Daily Average for " + currentMonth + ": " + parseInt(newCount / dayCount);

    
    count = 0;
    countEl.textContent = "Collected today: ";

    //
    switch (currentMonth) {
        case "Jan":
            janDailyAvg = newCount/dayCount;
            document.getElementById("jan-el").textContent = "Jan: "  + parseInt(janDailyAvg);           
            break;
        case "Feb":
            febDailyAvg = newCount/dayCount; 
            document.getElementById("feb-el").textContent = "Feb: " + parseInt(febDailyAvg);           
        break;
        case "Mar":
            marDailyAvg = newCount/dayCount;
            document.getElementById("mar-el").textContent = "Mar" + parseInt(marDailyAvg);            
        break;
        case "Apr":
            aprDailyAvg = newCount/dayCount; 
            document.getElementById("apr-el").textContent = "Apr" + parseInt(aprDailyAvg);           
        break;
        case "May":
            mayDailyAvg = newCount/dayCount; 
            document.getElementById("may-el").textContent = "May" + parseInt(mayDailyAvg);          
        break;
        case "Jun":
            junDailyAvg = newCount/dayCount; 
            document.getElementById("jun-el").textContent = "Jun" + parseInt(junDailyAvg);          
        break;
        case "Jul":
            julDailyAvg = newCount/dayCount;
            document.getElementById("jul-el").textContent = "Jul" + parseInt(julDailyAvg);            
        break;
        case "Aug":
            augDailyAvg = newCount/dayCount;
            document.getElementById("aug-el").textContent = "Aug" + parseInt(augDailyAvg);           
        break;
        case "Sep":
            sepDailyAvg = newCount/dayCount;
            document.getElementById("sep-el").textContent = "Sep" + parseInt(sepDailyAvg);          
        break;
        case "Oct":
            octDailyAvg = newCount/dayCount; 
            document.getElementById("oct-el").textContent = "Oct" + parseInt(octDailyAvg);
          
        break;
        case "Nov":
            novDailyAvg = newCount/dayCount; 
            document.getElementById("nov-el").textContent = "Nov" + parseInt(novDailyAvg);
           
        break;
        case "Dec":
            decDailyAvg = newCount/dayCount;
            document.getElementById("dec-el").textContent = "Dec" + parseInt(decDailyAvg);
            
        break;
    }
}
//store the month total to the correct box



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






























