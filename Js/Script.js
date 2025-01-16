// Ini File Javascript

let nameInput = document.getElementById("name-input");

document.getElementById("kirim").addEventListener("click", function () {
  const Name = nameInput.value;
  if (Name === "") {
    document.getElementById("error-name").innerHTML =
      "Name must be filled out!!!";
  } else {
    document.getElementById("name").innerHTML = Name;
  }
});

// Function to validate the form
function formValidation() {
  let nameInput = document.getElementById("name-input").value;

  console.log(nameInput);

  if (nameInput === "") {
    alert("Name must be filled out");
  } else {
    //   Display result in the form
    document.getElementById("result-form").innerHTML = nameInput;
  }
}

document.getElementById("submit-btn").addEventListener("click", formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;

  changeBackground();
}

// function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner >= bannerList.length) {
    indexBanner = 0;
  }
  // Looping to change the banner
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }
  bannerList[indexBanner].style.display = "block";
}
setInterval(nextBanner, 3000);
