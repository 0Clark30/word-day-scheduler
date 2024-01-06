// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = dayjs().hour();
var currentDate = dayjs().format("MMM D, YYYY, hh:mm:ss a");

// TODO: Add a listener for click events on the save button. This code should

$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).closest(".time-block");
    var hour = timeBlock.attr("id").split("-")[1];
    var userInput = timeBlock.find(".description").val();
    localStorage.setItem("hour-" + hour, userInput);
    alert("Data saved successfully!");
  });
});


// TODO: Add code to apply the past, present, or future class to each time
function pastPresentFuture() {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1], 10);

    $(this).removeClass("past present future");

    
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
pastPresentFuture();

// TODO: Add code to get any user input that was saved in localStorage and set
function retrieveSavedInputs(){
    var hour = 'hour-' + hour;
    var savedData = localStorage.getItem('hour-')
    $(this).text(savedData);

    $('.hour-' + hour).text(savedData);
}
retrieveSavedInputs();

// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
function updateCurrentDate() {
  $("#currentDay").text(currentDate);
}
setInterval(updateCurrentDate, 1000);
