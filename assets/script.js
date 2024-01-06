var currentHour = dayjs().hour();
var currentDate = dayjs().format("MMM D, YYYY, hh:mm:ss a");

$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).closest(".time-block");
    var hour = timeBlock.attr("id").split("-")[1];
    var userInput = timeBlock.find(".description").val();
    localStorage.setItem("hour-" + hour, userInput);
    alert("Data saved successfully!");
  });
});

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

function retrieveSavedInputs() {
  var hour = "hour-" + hour;
  var savedData = localStorage.getItem("hour-");
  $(this).text(savedData);

  $(".hour-" + hour).text(savedData);
}
retrieveSavedInputs();

function updateCurrentDate() {
  $("#currentDay").text(currentDate);
}
setInterval(updateCurrentDate, 1000);
