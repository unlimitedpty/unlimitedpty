// // smooth scrolling

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

// //sticky back to top

// jQuery(document).ready(function() {
 
// var offset = 250;
 
// var duration = 300;
 
// jQuery(window).scroll(function() {
 
// if (jQuery(this).scrollTop() > offset) {
 
// jQuery('.back-to-top').fadeIn(duration);
 
// } else {
 
// jQuery('.back-to-top').fadeOut(duration);
 
// }
 
// });
 
 
 
// jQuery('.back-to-top').click(function(event) {
 
// event.preventDefault();
 
// jQuery('html, body').animate({scrollTop: 0}, duration);
 
// return false;
 
// })
 
// });

// // random hover color
// $(document).ready(function()
// {
//     $(".randhover").hover(function(e)
//     {
//         var randomClass = getRandomClass();
//         $(e.target).attr("class", randomClass);
//     });
// });

// function getRandomClass()
// {
//     //Store available css classes
//     var classes = new Array("green", "purple", "teal", "violet", "pink");
    
//     //Give a random number from 0 to 5
//     var randomNumber = Math.floor(Math.random()*6);
    
//     return classes[randomNumber];
// }

