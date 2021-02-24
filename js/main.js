const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const secondStep = document.getElementById("second-step");

secondStep.onclick = onNextClick;

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
});
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
});
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    steps[index].classList.add("active");
}

function checkAddress() {
    let checkBox = document.getElementById("checkme");
    let divAddress;
    divAddress = document.getElementById("ship-address");
    if (checkBox.checked == true){
        divAddress.style.display = "block";
    } else {
        divAddress.style.display = "none";
    }
}

function onNextClick() {
    let company = document.getElementById("company").value;
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let site = document.getElementById("url").value;
  let birthday = document.getElementById("00N5g000003wq0B").value;
  let email = document.getElementById("email").value;
  let billcountry = document.getElementById("country").value;
  let billstate = document.getElementById("state").value;
  let billzip = document.getElementById("zip").value;
  let billcity = document.getElementById("city").value;
  let billstreet = document.getElementById("street").value;

  document.querySelector(".div-url").innerHTML = site;
  document.querySelector(".div-company").innerHTML = company;
  document.querySelector(".div-firstname").innerHTML = firstName;
  document.querySelector(".div-lastname").innerHTML = lastName;
  document.querySelector(".div-birthday").innerHTML = birthday;
  document.querySelector(".div-email").innerHTML = email;
  document.querySelector(".div-billcountry").innerHTML = billcountry;
  document.querySelector(".div-billstate").innerHTML = billstate;
  document.querySelector(".div-billzip").innerHTML = billzip;
  document.querySelector(".div-billcity").innerHTML = billcity;
  document.querySelector(".div-billstreet").innerHTML = billstreet;
}

function callValidation(){

      if(grecaptcha.getResponse().length == 0){
            alert('Please click the reCAPTCHA checkbox');
            return false;
        } else {
            return true;
        }
}



