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
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    document.querySelector(".div-firstname").innerHTML = firstName;
    document.querySelector(".div-lastname").innerHTML = lastName;
}



