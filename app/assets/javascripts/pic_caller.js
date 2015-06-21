

// $( document ).ready(function() {
//     listener();
//     gon.pics;
// });

// $(document).ready(function(){

//   $.getJSON("javascripts/gallery_json.js", function(json){

//     $.each(json.photos, function(){

//       $("ul").append('<img src= "images/test_images/image_1.jpg"/>');
//     }); 
//   });
// });





// $( document ).ready(function() {
   
//     listener();
   
// });
function listener() {
  $( "#next-button" ).click(function(event) {  
 alert(gon.get_pics)
    event.preventDefault();
      $.ajax({
        url: "http://localhost:3000/pics",
        type: "GET",
        dataType: "json",
        success: function (data) {
             alert(data);
        $("#pics").append(data.photos) 
       }
      });
  });
}





































  