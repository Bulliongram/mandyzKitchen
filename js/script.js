window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

function openav(){
  document.getElementById("dropdown").classList.toggle("show");
}

function openav1(){
  document.getElementById("dropdown1").classList.toggle("show");
}
function openmessage(){
  document.getElementById("message").style.display="flex"
}
function closemessage(){
  document.getElementById("message").style.display="none"
}
