
$( document ).ready(function() {
    listener();
});
function listener() {
    gon.pics;
  $( "#next-button" ).click(function(event) {  
    debugger;
    event.preventDefault();
      $.ajax({
        url: "http://localhost:3000/pics",
        type: "GET",
        dataType: "json",
        success: function (data) {
             alert(data);
       }
      });
  });
}





































  