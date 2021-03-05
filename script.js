$(document).ready(function () {
    
    $(".saveBtn").on("click", function() {
        // variable to differentiate between time blocks 
        var timeRow = $(this).parent().attr("id");
        // variable to store user input in text area as value
        var textInput = $(this).siblings(".description").val();

        window.localStorage.setItem(timeRow, textInput);

    })




















});