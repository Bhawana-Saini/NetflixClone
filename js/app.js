


function netflixmain() {
  document.getElementById("netflixHome").style.display = "block";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("signin").style.display = "none";
}



// btn 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//hindi btn 
function hindiFunction() {
  document.getElementById("hindiDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.hindibtn')) {
    var dropdowns = document.getElementsByClassName("hindidropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function netflixInHindi() {
  document.getElementById("hindiPage").style.display = "block";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("signin").style.display = "none";
}
function netflixInEnglish() {
  document.getElementById("hindiPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  document.getElementById("signin").style.display = "none";
}

function netflixmaininHindi() {
  document.getElementById("netflixHome").style.display = "block";
  document.getElementById("hindiPage").style.display = "none";
  document.getElementById("hindiSignin").style.display = "none";
}


// questions
function toggle(id) {
  a = document.getElementById('toggle_' + id);

  if (a.style.display == 'block') {
    a.style.display = 'none';

  }
  else {
    a.style.display = 'block';

  }
}