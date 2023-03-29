//give week days its names
const weekdays = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

function dateCheck() {
    var userDate = document.getElementById("idate").value;
    /*manually parsing the date once
it is selected*/
    var dateArr = userDate.split("-");
    var year = dateArr[0];
    var month = parseInt(dateArr[1], 10) - 1;
    var day = dateArr[2];
    //initializing the date
    var datDate = new Date(year, month, day);
    //console.log(date);
    var daynumber = String(datDate.getDate()).padStart(2, '0'); 
//gets the week day name
    var day = weekdays[datDate.getDay()];
    //gets the month
    var month = String(datDate.getMonth()   +1).padStart(2, '0');
    //gets the year
    var year = datDate.getFullYear(); 
    //group day, month and year for the console output
    var currentdate = daynumber + '/' + month + '/' + year; 
    return datDate;
}

function numberCheck() {
    var userNumber = document.getElementById("inumber").value;
    /*gets the string above and parses into 
number*/
    var addDays = parseInt(userNumber);
    return addDays;
}

function calcDate() {
    event.preventDefault();
    var x = dateCheck();
    var y = numberCheck();
    //gets the initial date
    var initdaynumber =    String(x.getDate()).padStart(2, '0');
    //gets the initial week day name
    var initday = weekdays[x.getDay()];
    //gets the month of the initial date
    var initmonth = String(x.getMonth() +1).padStart(2, '0');
    //gets the year of the initial date
    var inityear = x.getFullYear(); 
    //group initial day, month and year
    var initdategp = initdaynumber + '/' + initmonth + '/' + inityear;
    //beginning of the day's calculation
    const sumDay = 1;
    var countDays = 0;
    //this array stores every week day
    var accountedDays = [];
    //the loop that checks the day of the week
    while (countDays < y) {
    countDays += 1;
    x.setDate(x.getDate() + sumDay);
    var wknDay = weekdays[x.getDay()];
    accountedDays.push(wknDay);
    //decreases one day if it's saturday
    /*if (wknDay == "sábado") {
        countDays--;
    }
    //decreases one day if it's sunday
    if (wknDay == "domingo"){
        countDays--;
    }*/
    /*logs used during development
    console.log(countDays);
    console.log(accountedDays);
    console.log(countDays + ", " + wknDay);*/
}
    //gets the total of the days
    var finalDate = accountedDays.length-1;
    //parses the total of the days to number
    var finalDateInt = parseInt(finalDate);
    //resets the date back to the user inputs
    x = dateCheck();
    /*adds the days specified by the user to 
the date*/
    x.setDate(x.getDate() + finalDateInt);
    //gets the number of the future date
    var ftdaynumber =    String(x.getDate()).padStart(2, '0');
    //gets the future week day name
    var ftday = weekdays[x.getDay()];
    //gets the month of the future date
    var ftmonth = String(x.getMonth() +1).padStart(2, '0');
    //gets the year of the future date
    var ftyear = x.getFullYear(); 
    //group future day, month and year
    var ftdategp = ftdaynumber + '/' + ftmonth + '/' + ftyear;
    //TODO displays the result
    document.getElementById("result").innerHTML = "A licença de " + y + " dia(s) a partir de " + initday + ", " + initdategp + ",<br/>\nterminará no dia " + ftdategp + " ("+ftday+").";
    //logs used during development
    /*console.log("Os dias selecionados para adição à data foram: "+ y);
    console.log("Foram adicionados "+ finalDateInt + " dias corridos à data.");
    console.log("Foram adicionados "+y+ " dias úteis à data. A data futura é "+ftday+", "+ftdategp+ ".");*/
}
