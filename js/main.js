const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const secondStep = document.getElementById("second-step");
const firstStep = document.getElementById("first-step");






firstStep.addEventListener("click", () => {
        let company = document.getElementById("company").value;
        let firstName = document.getElementById("first_name").value;
        let lastName = document.getElementById("last_name").value;
        let site = document.getElementById("url").value;
        let birthday = document.getElementById("00N5g000003wq0B").value;
        let email = document.getElementById("email").value;
        let siteVal = document.getElementById("url");
        let emailVal = document.getElementById("email");


        if(company == '' || firstName == '' || lastName == '' || site == '' || birthday == '' || email == '' ) {
            alert('Please, fill in all required fields or check the correctness of the entered data!');

        } else if(!siteVal.validity.valid || !emailVal.validity.valid) {
            alert('Please, сheck the correctness of the entered data!');
        } else {
            document.querySelector(".div-url").innerHTML = site;
            document.querySelector(".div-company").innerHTML = company;
            document.querySelector(".div-firstname").innerHTML = firstName;
            document.querySelector(".div-lastname").innerHTML = lastName;
            document.querySelector(".div-birthday").innerHTML = birthday;
            document.querySelector(".div-email").innerHTML = email;
            changeStep("next");
        }
});

secondStep.addEventListener("click", () => {

    let billcountry = document.getElementById("country").value;
    let billstate = document.getElementById("state").value;
    let billzip = document.getElementById("zip").value;
    let billzipval = document.getElementById("zip");
    let billcity = document.getElementById("city").value;
    let billstreet = document.getElementById("street").value;
    let shipcountry = document.getElementById("00N5g000003wbP7").value;
    let shipstate = document.getElementById("00N5g000003wbPb").value;
    let shipzip = document.getElementById("00N5g000003wbPg").value;
    let shipcity = document.getElementById("00N5g000003wbPv").value;
    let shipstreet = document.getElementById("00N5g000003wbQ0").value;

    if(billcountry == '' || billstate == '' || billcity == '' || billstreet == '' || billzip == '') {
        alert('Please, fill in all required fields or check the correctness of the entered data!');
    } else if(!billzipval.validity.valid) {
        alert('Please, enter a 6-digit number in the postal code!');
    }
    else {
        document.querySelector(".div-billcountry").innerHTML = billcountry;
        document.querySelector(".div-billstate").innerHTML = billstate;
        document.querySelector(".div-billzip").innerHTML = billzip;
        document.querySelector(".div-billcity").innerHTML = billcity;
        document.querySelector(".div-billstreet").innerHTML = billstreet;
        document.querySelector(".div-shipcountry").innerHTML = shipcountry;
        document.querySelector(".div-shipstate").innerHTML = shipstate;
        document.querySelector(".div-shipzip").innerHTML = shipzip;
        document.querySelector(".div-shipcity").innerHTML = shipcity;
        document.querySelector(".div-shipstreet").innerHTML = shipstreet;

        changeStep("next");
    }
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
    let shipaddress = document.getElementById("ship-address-sub");
    if (checkBox.checked == true){
        divAddress.style.display = "block";
        shipaddress.style.display = "block";
    } else {
        divAddress.style.display = "none";
        shipaddress.style.display = "none";
    }
}

function callValidation(){

    if(grecaptcha.getResponse().length == 0){
        alert('Please click the reCAPTCHA checkbox');
        return false;
    } else {
        return true;
    }
}



