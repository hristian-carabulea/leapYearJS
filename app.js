//Calculate if a year is a leap year or not

var yearToBeChecked = -1;

  function isLeap(year) {

    var leapYear = false;
    var message = "No value calculated.";

    if (year % 4 === 0) { // if year divisible by 4, it is leap

      if (year % 100  === 0) { // if year divisible by 100
        if (year % 400 === 0) { // and if year divisible by 400
          leapYear = true;
        }
        else { //if year divisible by 100 but not by 400, it is not leap
          leapYear = false;
        }
      } 
      else { // if year is not divisible by 100 but divisible by 4, then it is leap
          leapYear = true;
      }
    }
    else { // if year not divisible by 4
      leapYear = false;
    }

    if (leapYear ) {
      message = "Leap year."
    }
    else {
      message = "Not leap year."
    }
    return message; 
  }

yearToBeChecked = prompt("Enter year to be checked if it is a Leap Year: ")

leapYearMessage = isLeap(yearToBeChecked);
console.log(leapYearMessage); 
alert(leapYearMessage);
