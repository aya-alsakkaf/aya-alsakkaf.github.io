let plusEle = document.querySelector(
    "#reminders .conatiner .section-title svg"
  );
  
  let boxEle = document.querySelector(
    "#reminders .conatiner .section-title .box"
  );
  
  let formEle = document.querySelector(
    "#reminders .conatiner .section-title form"
  );
  
  let saveEle = document.querySelector(
    "#reminders .conatiner .section-title form input[type='submit']"
  );
  plusEle.addEventListener(
    "click",
    function () {
      boxEle.classList.add("active-box");
    },
    true
  );
  
  // close Ele
  let CloseEle = document.querySelector(".close");
  
  CloseEle.addEventListener(
    "click",
    function () {
      boxEle.classList.remove("active-box");
    },
    true
  );
  
  // End close Ele
  formEle.addEventListener(
    "submit",
    function (e) {
      e.preventDefault();
    },
    true
  );
  // Start get value
  let dateEle = document.querySelector(
    ".box form .form-one input[type='date']"
  );
  
  let timeEle = document.querySelector(
    ".box form .form-one input[type='time']"
  );
  
  let placeELe = document.querySelector(".box form .form-two select");
  
  let purposeEle = document.querySelector(".box form .form-three select");
  
  let doctorEle = document.querySelector(
    ".box form .form-four input[type='text']"
  );
  
  let noteValueEle = document.querySelector(".box form .form-five textarea").value;
  // End get value
  // Start member
  let rowEle = document.querySelector(".row");
  // End member
  saveEle.addEventListener("click", function (e) {
    let colEle = document.createElement("div");
    colEle.classList.add("col-lg-6");
  
    let memberEle = document.createElement("div");
    memberEle.classList.add("member", "d-flex", "align-items-start");
  
    let memberInfoEle = document.createElement("div");
    memberInfoEle.classList.add("member-info");
  
    let headFourEle = document.createElement("h4");
    let spanEle = document.createElement("span");
    let pragEle = document.createElement("p");
  
    headFourEle.innerHTML = "Up-Coming Appointment";
    spanEle.innerHTML = `Date: ${dateEle.value} , ${timeEle.value} `;
    pragEle.innerHTML = `Dr. ${doctorEle.value}, <a href="https://goo.gl/maps/Z4J1sKiGEPWEPjyN6">${placeELe.value}</a>`;
    memberInfoEle.appendChild(headFourEle);
    memberInfoEle.appendChild(spanEle);
    memberInfoEle.appendChild(pragEle);
    memberEle.appendChild(memberInfoEle);
    colEle.appendChild(memberEle);
    rowEle.appendChild(colEle);
    boxEle.classList.remove("active-box");
  });
  
