var date = moment().format("dddd, MMMM Do YYYY, hh:mm a");
console.log(typeof date)
var currentDay = document.getElementById("currentDay");
currentDay.textContent=date;

console.log(moment().format("dddd, MMMM Do YYYY, HH:mm a"));

var container = document.getElementById("#container");


$(".saveBtn").on("click", function(){
    console.log($(this).siblings(".description").val())
    var time = $(this).parent().attr("id");
    console.log(time)
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task)
})

$("#hour-9 textarea").val(localStorage.getItem("hour-9"))
$("#hour-10 textarea").val(localStorage.getItem("hour-10"))
$("#hour-11 textarea").val(localStorage.getItem("hour-11"))
$("#hour-12 textarea").val(localStorage.getItem("hour-12"))
$("#hour-13 textarea").val(localStorage.getItem("hour-13"))
$("#hour-14 textarea").val(localStorage.getItem("hour-14"))
$("#hour-15 textarea").val(localStorage.getItem("hour-15"))
$("#hour-16 textarea").val(localStorage.getItem("hour-16"))
$("#hour-17 textarea").val(localStorage.getItem("hour-17"))

function timeCheck(){
    $(".description").each(function (){
        var hour = $(this).parent().attr("id").split("-")[1];
        console.log(hour)
        var currentHour = moment().format("HH");


if (parseInt(currentHour) > parseInt(hour)) {
//   console.log('I made it!')
  $(this).addClass("past")
}
        // if (hour < currentHour) 
        //  {$(this).addClass("past")}
         else if (hour === currentHour)
         {$(this).addClass("present")}
         else 
         {$(this).addClass("future")}
    })
}

timeCheck()
