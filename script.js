$(document).ready(function () {
    // using momentjs to display current date & time in header
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    // this function runs when the save button is clicked
    $(".saveBtn").on("click", function () {
        console.log(this);
        // variable to differentiate between time blocks
        // "this" refers to the save button being clicked
        // parent is the row with the time id
        var timeRow = $(this).parent().attr("id");
        // variable to store user input in text area as value
        // "this" refers to the save button being clicked
        // sibling is the text area 
        var textInput = $(this).siblings(".description").val();

        // saving time of day as key, and user input as value to the local storage
        localStorage.setItem(timeRow, textInput);
    })

    //displaying the value saved in the text area by getting it from where it was set in local storage
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

})




















