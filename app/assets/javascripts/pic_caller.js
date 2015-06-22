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



// $( document ).ready(function() {
//    gon.pics;
//     listener();
   
// });
// function listener() {
//   $( "#next-button" ).click(function(event) {  
//  alert(gon.get_pics)
//     event.preventDefault();
//       $.ajax({
//         url: "http://localhost:3000/pics",
//         type: "GET",
//         dataType: "json",
//         success: function (data) {
//              alert(data);
//         $("#pics").append(data.photos) 
//        }
//       });
//   });
// }

// var data = JSON.parse("app/assets/javascripts/gallery_json.js");



//      $.ajax({
//         url:  "app/assets/javascripts/gallery_json.js",
//         method: "GET",
//         data: data,
//         dataType: "json",
//         success: function(data) { 
//           alert("hi");
//            $('#pics').show(data);
//         }
//     });




































  