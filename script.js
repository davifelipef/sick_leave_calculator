// Give weekdays their names
const weekdays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
];

function dateCheck() {
    var userDate = document.getElementById("idate").value;

    // Parse the selected date
    var dateArr = userDate.split("-");
    var year = parseInt(dateArr[0], 10);
    var month = parseInt(dateArr[1], 10) - 1;
    var day = parseInt(dateArr[2], 10);

    // Initialize the date
    var datDate = new Date(year, month, day);

    return datDate;
}

function numberCheck() {
    var userNumber = document.getElementById("inumber").value;

    // Convert the input to a number
    var addDays = parseInt(userNumber, 10);

    return addDays;
}

function calcDate(event) {
    event.preventDefault();

    var x = dateCheck();
    var y = numberCheck();

    // Get the initial date components
    var initdaynumber = String(x.getDate()).padStart(2, '0');
    var initday = weekdays[x.getDay()];
    var initmonth = String(x.getMonth() + 1).padStart(2, '0');
    var inityear = x.getFullYear();

    // Format the initial date
    var initdategp = initdaynumber + '/' + initmonth + '/' + inityear;

    // Calculate the final date of the leave
    x.setDate(x.getDate() + y);

    // Get the final date components
    var ftdaynumber = String(x.getDate()).padStart(2, '0');
    var ftday = weekdays[x.getDay()];
    var ftmonth = String(x.getMonth() + 1).padStart(2, '0');
    var ftyear = x.getFullYear();

    // Format the final date
    var ftdategp = ftdaynumber + '/' + ftmonth + '/' + ftyear;

    // Calculate the return-to-work date
    var returnDate = new Date(x);

    // If the leave ends on Friday, Saturday, or Sunday,
    // the employee returns on Monday
    if (returnDate.getDay() === 5) {
        returnDate.setDate(returnDate.getDate() + 3);
    } else if (returnDate.getDay() === 6) {
        returnDate.setDate(returnDate.getDate() + 2);
    } else if (returnDate.getDay() === 0) {
        returnDate.setDate(returnDate.getDate() + 1);
    } else {
        returnDate.setDate(returnDate.getDate() + 1);
    }

    // Get the return date components
    var retdays = String(returnDate.getDate()).padStart(2, '0');
    var retmonth = String(returnDate.getMonth() + 1).padStart(2, '0');
    var retyear = returnDate.getFullYear();
    var retweekday = weekdays[returnDate.getDay()];

    // Format the return date
    var returnDateFormatted = retdays + '/' + retmonth + '/' + retyear;

    // Display the results
    document.getElementById("result").innerHTML =
        "A licença de " + y + " dia(s) a partir de " +
        initday + ", " + initdategp +
        ",<br/>terminará no dia " + ftdategp +
        " (" + ftday + ")." +
        "<br/>Retorno ao trabalho: " +
        returnDateFormatted + " (" + retweekday + ").";
}