// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// $(function () {
//     $("#dialog").dialog({ autoOpen: false });
//     $('a').click(function () {
//         $("#dialog").dialog('open');
//     });
// });
const app = ()=>{
var mainForm = document.getElementById("mainForm");
var already = document.getElementById("already");
textBox = document.createElement("input");
submit = document.createElement("input");
submit.value = "submit";
textBox.placeholder = "comment...";
textBox.classList.add("commentbox");
submit.classList.add("sbox");



textBox.id="tmpTextBox";
textBox.type="text";
submit.id = "submitme";
submit.type = "button";

document.getElementById("clickme").onclick = function (){
 mainForm.appendChild(textBox);
 mainForm.appendChild(submit);
}

submit.onclick = function () {
mainForm.removeChild(textBox);
mainForm.removeChild(submit);
}
};
app();