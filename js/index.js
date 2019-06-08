function toggleMenu() {
  var aside = getElement("aside");
  var length = aside.classList.length;
  if(length === 1) {
    aside.classList.add("aside_active");
  } else {
    aside.classList.remove("aside_active");
  }
}

function getElement(id) {
  return document.getElementById(id);
}


// Read more

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var arrowImg = document.getElementById("arrow");
    var more = document.getElementById("moreText");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        arrowImg.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        arrowImg.innerHTML = "Read less";
        moreText.style.display = "inline";
        arrowImg.style.transform = "rotate(180deg)";
        more.innerText = "Less";
    }
}

// Smooth Scroll

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function openService() {
    var span = getElement("span");
    var length = first.classList.length;
    if(length === 1) {
        first.classList.add("circle__active");
    } else {
        first.classList.remove("circle__active");
    }
}




