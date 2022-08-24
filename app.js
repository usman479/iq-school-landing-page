let cnic = document.getElementById("cnic");
cnic.addEventListener("keyup", (e) => {
  let char = e.target.value.charAt(e.target.value.length - 1);
  let ascii = char.keyCode || char.charCode;
  if (e.target.value.length > 15) {
    e.target.value = e.target.value.slice(0, -1);
  }
  else if (e.key == "Backspace") {
  } else if ((e.target.value.length === 5) || (e.target.value.length === 13) || (e.target.value.length === 14)) {
    e.target.value += "-";
  }
})


let price = 0;
let inp = document.querySelector("#ICAP");
let papers = document.querySelectorAll(".papers");
let province = document.querySelector("#province");
let imageSize = document.getElementById("image-size");



inp.addEventListener("change", () => {
  imageSize.innerText = "";
  let files = inp.files;
  if (files.length > 0) {
    if (files[0].size > 400 * 1024) {
      imageSize.innerText = "File Size Exceeds 400kb";
    }
  }
});

let courseChart = document.querySelectorAll(".course-chart");
let courseChart2 = document.querySelectorAll(".course-chart-02");
let courseChart3 = document.querySelectorAll(".course-chart-03");
let courseCharts = [courseChart, courseChart2, courseChart3];
let count = 0;

// PAPERS COUNT //

let attempt1 = document.getElementsByName("Attempt")[0];
let attempt2 = document.getElementsByName("Attempt02")[0];
let attempt3 = document.getElementsByName("Attempt03")[0];
let attemptSelect = document.getElementsByName("Attempt")[0];
let attempt2Select = document.getElementsByName("Attempt02")[0];
let attempt3Select = document.getElementsByName("Attempt03")[0];
let paper01 = "";
let paper02 = "";
let paper03 = "";
let flag1 = true;
let flag2 = true;
let flag3 = true;
let removeFlag1 = false;
let removeFlag2 = false;
let removeFlag3 = false;


let countSpan = document.querySelector("#papers-count");

var formModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
})
var courseModal01 = new bootstrap.Modal(document.getElementById('courseModal01'), {
  keyboard: false
})
var priceModalForm = new bootstrap.Modal(document.getElementById('exampleModal3'), {
  keyboard: false
})

var modalTry = document.getElementById("courseModal01");
var pricingModal = document.getElementById("exampleModal2");
let courseImages = document.getElementsByClassName("course-image");

let plusBox01 = document.getElementById("plus-box-01");
let plusBox02 = document.getElementById("plus-box-02");
let plusBox03 = document.getElementById("plus-box-03");
let modalTryFlag = true;
let closeModal = document.getElementById("closeModal");
modalTry.addEventListener("show.bs.modal", function (e) {
  var button = e.relatedTarget;
  var recipient = button.getAttribute('data-bs-whatever');
  if (recipient === "counter01") {
    document.getElementById("myModalBody").innerHTML = `<div class="course-img mb-3">
    <div class="container">
      <div class="row">
      <div class="col-6 col-sm-4 p-3">
       <img src="./sources/CFAP 1.png" class="course-image" alt="Select" onclick="counter01(this)" value="CFAP 1: AAFR" >
      </div>
      <div class="col-6 col-sm-4 p-3">
       <img src="./sources/CFAP 2.jpg" class="course-image" alt="Select" onclick="counter01(this)" value="CFAP 2: CLAW" >
      </div>
      <div class="col-6 col-sm-4 p-3">
        <img src="./sources/CFAP 3.png"class="course-image"  alt="Select" onclick="counter01(this)" value="CFAP 3: SPM" >
      </div>
      <div class="col-6 col-sm-4 p-3">
       <img src="./sources/CFAP 4.png" class="course-image" alt="Select" onclick="counter01(this)" value="CFAP 4: BFD" >
      </div>
      <div class="col-6 col-sm-4 p-3">
       <img src="./sources/CFAP 5.jpg" class="course-image" alt="Select" onclick="counter01(this)" value="CFAP 5: TPP" >
      </div>
      <div class="col-6 col-sm-4 p-3">
        <img src="./sources/CFAP 6.png"class="course-image"  alt="Select" onclick="counter01(this)" value="CFAP 6: AARS" >
      </div>
      <div class="col-6 col-sm-4 p-3">
      <img src="./sources/MSA 1.jpg" class="course-image" alt="Select" onclick="counter01(this)" value="MSA 1:" >
     </div>
     <div class="col-6 col-sm-4 p-3">
       <img src="./sources/MSA 2.png"class="course-image"  alt="Select" onclick="counter01(this)" value="MSA 2:" >
     </div>
    </div>
  </div>`
    closeModal.setAttribute("onclick", "closeCourseModal");
  } else if (recipient === "counter02") {
    document.getElementById("myModalBody").innerHTML = `<div class="course-img mb-3">
      <div class="container">
        <div class="row">
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 1.png" class="course-image" alt="Select" onclick="counter02(this)" value="CFAP 1: AAFR" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 2.jpg" class="course-image" alt="Select" onclick="counter02(this)" value="CFAP 2: CLAW" >
        </div>
        <div class="col-6 col-sm-4 p-3">
          <img src="./sources/CFAP 3.png"class="course-image"  alt="Select" onclick="counter02(this)" value="CFAP 3: SPM" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 4.png" class="course-image" alt="Select" onclick="counter02(this)" value="CFAP 4: BFD" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 5.jpg" class="course-image" alt="Select" onclick="counter02(this)" value="CFAP 5: TPP" >
        </div>
        <div class="col-6 col-sm-4 p-3">
          <img src="./sources/CFAP 6.png"class="course-image"  alt="Select" onclick="counter02(this)" value="CFAP 6: AARS" >
        </div>
        <div class="col-6 col-sm-4 p-3">
      <img src="./sources/MSA 1.jpg" class="course-image" alt="Select" onclick="counter02(this)" value="MSA 1:" >
     </div>
     <div class="col-6 col-sm-4 p-3">
       <img src="./sources/MSA 2.png"class="course-image"  alt="Select" onclick="counter02(this)" value="MSA 2:" >
     </div>
      </div>
    </div>`
    closeModal.setAttribute("onclick", "closeCourseModal");
  } else if (recipient === "counter03") {
    document.getElementById("myModalBody").innerHTML = `<div class="course-img mb-3">
      <div class="container">
        <div class="row">
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 1.png" class="course-image" alt="Select" onclick="counter03(this)" value="CFAP 1: AAFR" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 2.jpg" class="course-image" alt="Select" onclick="counter03(this)" value="CFAP 2: ACLP" >
        </div>
        <div class="col-6 col-sm-4 p-3">
          <img src="./sources/CFAP 3.png"class="course-image"  alt="Select" onclick="counter03(this)" value="CFAP 3: SPM" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 4.png" class="course-image" alt="Select" onclick="counter03(this)" value="CFAP 4: BFD" >
        </div>
        <div class="col-6 col-sm-4 p-3">
         <img src="./sources/CFAP 5.jpg" class="course-image" alt="Select" onclick="counter03(this)" value="CFAP 5: TPP" >
        </div>
        <div class="col-6 col-sm-4 p-3">
          <img src="./sources/CFAP 6.png"class="course-image"  alt="Select" onclick="counter03(this)" value="CFAP 6: AARS" >
        </div>
        <div class="col-6 col-sm-4 p-3">
      <img src="./sources/MSA 1.jpg" class="course-image" alt="Select" onclick="counter03(this)" value="MSA 1:" >
     </div>
     <div class="col-6 col-sm-4 p-3">
       <img src="./sources/MSA 2.png"class="course-image"  alt="Select" onclick="counter03(this)" value="MSA 2:" >
     </div>
      </div>
    </div>`
    closeModal.setAttribute("onclick", "closeCourseModal");
  } else if (recipient === "payment") {
    document.getElementById("exampleModalLabel").innerHTML = "Registration Form";
    document.getElementById("myModalBody").innerHTML = `<div class="course-img mb-3">
        <div class="container">
          <div class="row">
          <div class="col-6 col-sm-4  col-md-6 p-3 bg-white" >
           <strong>Online Bank Transfer</strong><br>
           <hr class="green-line">
           <strong>Account</strong>
           <p>IQ SCHOOL OF FINANCE</p>
           <strong>Account No:</strong>
           <p>0102544192018</p>
           <strong>IBAN:</strong>
           <p class="break-word" >PK82AIIN00001025441920</p>
           <strong>Purpose:</strong>
           <p>Education</p>
           <p><strong>Bank:&nbsp;</strong><img src="./sources/albaraka.png" style="width: 100px;position: relative; bottom: 10px;" alt=""></p>
          </div>
            <div class="col-6 col-sm-8 col-md-6">
              <div class="row">
              <div class="col-12 col-sm-8 col-md-8 col-lg-5 p-3 bg-white mx-3">
              <img src="./sources/myeasypaisa.jpg" style="width: 80%;" alt=""><br>
              <hr class="green-line">
              <strong>Contact on:</strong>
              <p>+92 348 2000007</p>
              </div>
              <div class="col-12 col-sm-8 col-md-8 col-lg-5 p-3  bg-white mx-3">
                <img src="./sources/myjazzcash.jpg" style="width: 80%;" alt="60%"><br>
                <hr class="green-line">
              <strong>Contact on:</strong>
              <p>+92 348 2000007</p>
              </div>
              <div class="col-12 col-sm-12 mt-5 border border-5 border-white">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0464686667133!2d67.05666771524473!3d24.862262451307863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3394930372073%3A0x3f399dd983a02594!2sIQ%20School%20Of%20Finance%20(CA%20Institute)!5e0!3m2!1sen!2s!4v1654718142973!5m2!1sen!2s" width="100%" height="100%" style="
                border-radius: 0 18px 18px 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 col-sm-8">
              <!-- <strong>Once Done WhatsApp us at &nbsp;<i class="bi bi-whatsapp" style="color: green;">&nbsp;&nbsp; 03002092837</i></strong><br><br> -->
              <img src="./sources/mywhatsapp.PNG" alt="03002092837" style="width:100%">
              <p>A: Your Name <br>
              B: Your Course(s) Name <br>
              C: Screenshot of the SMS you get from bank (or the App Screen)
              </p>
            </div>
            <div class="col-12 col-sm-4">
              <!-- <p>GET ACCESS IN</p>
              <strong style="font-weight: bolder; font-size: 1.5rem;">12 WORKING HOURS</strong> -->
              <img src="./sources/myworkinghours.jpg" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p><strong>Note:</strong>In case you ﬁnd it diﬀicult to pay online, You can pay at campus.                    </p>
            </div>
            <div class="col-12 d-flex justify-content-center mt-3">
              <strong>THANK YOU FOR CHOOSING IQ SCHOOL OF FINANCE</strong>
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById("myModalBody").style.backgroundColor = "#f4f9fa"
  }
});

var regModal = document.getElementById("exampleModal");
regModal.addEventListener("show.bs.modal", function(e) {
  console.log("modal show");
  var button = e.relatedTarget;
  var recipient = button.getAttribute('data-bs-whatever');
  var modalBody = document.getElementById("reg-modal-body");
  var myTarget = document.getElementsByClassName("my-target");
  if(recipient === "single"){
    myTarget[0].classList.add("d-none");
    myTarget[1].classList.add("d-none");
  } else if (recipient === "3-combo"){
    myTarget[0].classList.remove("d-none");
    myTarget[1].classList.remove("d-none");
  }
})

function makePaymentModal() {
  document.getElementById("exampleModalLabel").innerHTML = "Registration Form";
  document.getElementById("myModalBody").innerHTML = `<div class="course-img mb-3">
  <div class="container">
    <div class="row">
    <div class="col-6 col-sm-4  col-md-6 p-3 bg-white" >
     <strong>Online Bank Transfer</strong><br>
     <hr class="green-line">
     <strong>Account</strong>
     <p>IQ SCHOOL OF FINANCE</p>
     <strong>Account No:</strong>
     <p>0102544192018</p>
     <strong>IBAN:</strong>
     <p class="break-word" >PK82AIIN00001025441920</p>
     <strong>Purpose:</strong>
     <p>Education</p>
     <p><strong>Bank:&nbsp;</strong><img src="./sources/albaraka.png" style="width: 100px;position: relative; bottom: 10px;" alt=""></p>
    </div>
      <div class="col-6 col-sm-8 col-md-6">
        <div class="row">
        <div class="col-12 col-sm-8 col-md-8 col-lg-5 p-3 bg-white mx-3">
        <img src="./sources/myeasypaisa.jpg" style="width: 80%;" alt=""><br>
        <hr class="green-line">
        <strong>Contact on:</strong>
        <p>+92 348 2000007</p>
        </div>
        <div class="col-12 col-sm-8 col-md-8 col-lg-5 p-3  bg-white mx-3">
          <img src="./sources/myjazzcash.jpg" style="width: 80%;" alt="60%"><br>
          <hr class="green-line">
        <strong>Contact on:</strong>
        <p>+92 348 2000007</p>
        </div>
        <div class="col-12 col-sm-12 mt-5 border border-5 border-white">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0464686667133!2d67.05666771524473!3d24.862262451307863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3394930372073%3A0x3f399dd983a02594!2sIQ%20School%20Of%20Finance%20(CA%20Institute)!5e0!3m2!1sen!2s!4v1654718142973!5m2!1sen!2s" width="100%" height="100%" style="
          border-radius: 0 18px 18px 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-sm-8">
        <!-- <strong>Once Done WhatsApp us at &nbsp;<i class="bi bi-whatsapp" style="color: green;">&nbsp;&nbsp; 03002092837</i></strong><br><br> -->
        <img src="./sources/mywhatsapp.PNG" alt="03002092837" style="width:100%">
        <p>A: Your Name <br>
        B: Your Course(s) Name <br>
        C: Screenshot of the SMS you get from bank (or the App Screen)
        </p>
      </div>
      <div class="col-12 col-sm-4">
        <!-- <p>GET ACCESS IN</p>
        <strong style="font-weight: bolder; font-size: 1.5rem;">12 WORKING HOURS</strong> -->
        <img src="./sources/myworkinghours.jpg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p><strong>Note:</strong>In case you ﬁnd it diﬀicult to pay online, You can pay at campus.                    </p>
      </div>
      <div class="col-12 d-flex justify-content-center mt-3">
        <strong>THANK YOU FOR CHOOSING IQ SCHOOL OF FINANCE</strong>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("myModalBody").style.backgroundColor = "#f4f9fa";
  formModal.toggle();
  courseModal01.toggle();
}

function myLoader(flag = false) {
  let submit = document.getElementById("submit-btn");
  let loader = document.getElementsByClassName("loader")[0];
  let submitSpan = document.getElementById("submit-span");
  if (flag) {
    submit.classList.add("d-flex");
    submit.classList.add("justify-content-center");
    loader.classList.remove("bg-none");
    submitSpan.classList.add("bg-none");
  } else {
    submit.classList.remove("d-flex");
    submit.classList.remove("justify-content-center");
    loader.classList.add("bg-none");
    submitSpan.classList.remove("bg-none");
  }

}


function toggleFormModal() {
  priceModalForm.toggle();
  formModal.toggle();
}
function closeCourseModal() {
  courseModal01.toggle();
  formModal.toggle();
}

let [box01, box02, box03] = document.getElementsByClassName("course-select-boxes");
let remove1 = document.getElementById("remove-01");
let remove2 = document.getElementById("remove-02");
let remove3 = document.getElementById("remove-03");
function counter01(e) {
  if (flag1) {
    ++count;
    countSpan.innerHTML = "0" + count;
    flag1 = false;
    removeFlag1 = true;
  }
  attempt1.classList.remove("bg-none");
  attempt1.setAttribute("required", "");
  paper01 = e.getAttribute("value");
  plusBox01.src = e.src;
  remove1.classList.remove("bg-none")
  priceCalc();
  // couponChecker(null, coupon, true);
  courseModal01.toggle();
  formModal.toggle();

}
function counter02(e) {

  if (flag2) {
    ++count;
    countSpan.innerHTML = "0" + count;
    flag2 = false;
    removeFlag2 = true;
  }
  attempt2.classList.remove("bg-none");
  attempt2.setAttribute("required", "");
  paper02 = e.getAttribute("value");
  plusBox02.src = e.src;
  remove2.classList.remove("bg-none")
  priceCalc();
  // couponChecker(null, coupon, true);
  courseModal01.toggle();
  formModal.toggle();

}
function counter03(e) {

  if (flag3) {
    ++count;
    countSpan.innerHTML = "0" + count;
    flag3 = false;
    removeFlag3 = true;
  }
  attempt3.classList.remove("bg-none");
  attempt3.setAttribute("required", "");
  paper03 = e.getAttribute("value");
  plusBox03.src = e.src;
  remove3.classList.remove("bg-none")
  priceCalc();
  // couponChecker(null, coupon, true);
  courseModal01.toggle();
  formModal.toggle();

}




// COUPON //
let couponSpan = document.querySelector("#coupon-span");
let coupon = document.querySelector("#coupon");

function couponChecker(e, b = coupon, f = false) {
  couponSpan.innerHTML = "";
  if (count > 1) {
    couponSpan.innerHTML = `Discount Received ${count}0 %`;
  }else{
    couponSpan.innerHTML = ''
  }
  discPriceCalc();
}


function removeCourse01(e, b = false) {
  couponChecker()
  if (removeFlag1) {
    (b ? count = 0 : --count);
    countSpan.innerHTML = "0" + count;
    flag1 = true;
    removeFlag1 = false;
  }
  plusBox01.src = "./sources/select-card.png";
  attemptSelect.removeAttribute("required");
  attemptSelect.classList.add("bg-none");
  e.classList.add("bg-none");
  paper01 = "";
  priceCalc();
  // couponChecker(coupon, true);


}
function removeCourse02(e, b = false) {
  couponChecker()
  if (removeFlag2) {
    (b ? count = 0 : --count);
    countSpan.innerHTML = "0" + count;
    flag2 = true;
    removeFlag2 = false;
  }
  plusBox02.src = "./sources/select-card.png";
  attempt2Select.removeAttribute("required");
  attempt2Select.classList.add("bg-none");
  e.classList.add("bg-none");
  paper02 = "";
  priceCalc();
  // couponChecker(coupon, true);
}
function removeCourse03(e, b = false) {
  couponChecker()
  if (removeFlag3) {
    (b ? count = 0 : --count);
    countSpan.innerHTML = "0" + count;
    flag3 = true;
    removeFlag3 = false;
  }
  plusBox03.src = "./sources/select-card.png";
  attempt3Select.removeAttribute("required");
  attempt3Select.classList.add("bg-none");
  e.classList.add("bg-none");
  paper03 = "";
  priceCalc();
  // couponChecker(coupon, true);
}

let amountBox = document.querySelectorAll(".rupee")[0];


function papercalc2() {
  if (paper01 && paper02) {
    if (paper01.substring(0, 6) === "CFAP 1") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 2") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 3") {
      price = 12000;
    } else if (paper01.substring(0, 6) === "CFAP 4") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 5") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 6") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "MSA 1:") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "MSA 2:") {
      price = 15000;
    }
    if (paper02.substring(0, 6) === "CFAP 1") {
      price += 20000;
    } else if (paper02.substring(0, 6) === "CFAP 2") {
      price += 15000;
    } else if (paper02.substring(0, 6) === "CFAP 3") {
      price += 12000;
    } else if (paper02.substring(0, 6) === "CFAP 4") {
      price += 15000;
    } else if (paper02.substring(0, 6) === "CFAP 5") {
      price += 20000;
    } else if (paper02.substring(0, 6) === "CFAP 6") {
      price += 20000;
    } else if (paper02.substring(0, 6) === "MSA 1:") {
      price += 15000;
    } else if (paper02.substring(0, 6) === "MSA 2:") {
      price += 15000;
    }

    // price = price + ((price / 100) * 20)
  } else if (paper01 && paper03) {

    if (paper01.substring(0, 6) === "CFAP 1") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 2") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 3") {
      price = 12000;
    } else if (paper01.substring(0, 6) === "CFAP 4") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 5") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 6") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "MSA 1:") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "MSA 2:") {
      price = 15000;
    }
    if (paper03.substring(0, 6) === "CFAP 1") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "CFAP 2") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "CFAP 3") {
      price += 12000;
    } else if (paper03.substring(0, 6) === "CFAP 4") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "CFAP 5") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "CFAP 6") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "MSA 1:") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "MSA 2:") {
      price += 15000;
    }
    // price = price + ((price / 100) * 20)
  } else if (paper02 && paper03) {
    if (paper02.substring(0, 6) === "CFAP 1") {
      price = 20000;
    } else if (paper02.substring(0, 6) === "CFAP 2") {
      price = 15000;
    } else if (paper02.substring(0, 6) === "CFAP 3") {
      price = 12000;
    } else if (paper02.substring(0, 6) === "CFAP 4") {
      price = 15000;
    } else if (paper02.substring(0, 6) === "CFAP 5") {
      price = 20000;
    } else if (paper02.substring(0, 6) === "CFAP 6") {
      price = 20000;
    } else if (paper02.substring(0, 6) === "MSA 1:") {
      price = 15000;
    } else if (paper02.substring(0, 6) === "MSA 2:") {
      price = 15000;
    }
    if (paper03.substring(0, 6) === "CFAP 1") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "CFAP 2") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "CFAP 3") {
      price += 12000;
    } else if (paper03.substring(0, 6) === "CFAP 4") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "CFAP 5") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "CFAP 6") {
      price += 20000;
    } else if (paper03.substring(0, 6) === "MSA 1:") {
      price += 15000;
    } else if (paper03.substring(0, 6) === "MSA 2:") {
      price += 15000;
    }

  }
}

function papercalc3() {
  if (paper01.substring(0, 6) === "CFAP 1") {
    price = 20000;
  } else if (paper01.substring(0, 6) === "CFAP 2") {
    price = 15000;
  } else if (paper01.substring(0, 6) === "CFAP 3") {
    price = 12000;
  } else if (paper01.substring(0, 6) === "CFAP 4") {
    price = 15000;
  } else if (paper01.substring(0, 6) === "CFAP 5") {
    price = 20000;
  } else if (paper01.substring(0, 6) === "CFAP 6") {
    price = 20000;
  } else if (paper01.substring(0, 6) === "MSA 1:") {
    price = 15000;
  } else if (paper01.substring(0, 6) === "MSA 2:") {
    price = 15000;
  }
  if (paper02.substring(0, 6) === "CFAP 1") {
    price += 20000;
  } else if (paper02.substring(0, 6) === "CFAP 2") {
    price += 15000;
  } else if (paper02.substring(0, 6) === "CFAP 3") {
    price += 12000;
  } else if (paper02.substring(0, 6) === "CFAP 4") {
    price += 15000;
  } else if (paper02.substring(0, 6) === "CFAP 5") {
    price += 20000;
  } else if (paper02.substring(0, 6) === "CFAP 6") {
    price += 20000;
  } else if (paper02.substring(0, 6) === "MSA 1:") {
    price += 15000;
  } else if (paper02.substring(0, 6) === "MSA 2:") {
    price += 15000;
  }
  if (paper03.substring(0, 6) === "CFAP 1") {
    price += 20000;
  } else if (paper03.substring(0, 6) === "CFAP 2") {
    price += 15000;
  } else if (paper03.substring(0, 6) === "CFAP 3") {
    price += 12000;
  } else if (paper03.substring(0, 6) === "CFAP 4") {
    price += 15000;
  } else if (paper03.substring(0, 6) === "CFAP 5") {
    price += 20000;
  } else if (paper03.substring(0, 6) === "CFAP 6") {
    price += 20000;
  } else if (paper03.substring(0, 6) === "MSA 1:") {
    price += 15000;
  } else if (paper03.substring(0, 6) === "MSA 2:") {
    price += 15000;
  }
  // price = price + ((price / 100) * 20)
}

function priceCalc() {
  amountBox.innerHTML = "";
  if (count === 1) {
    if (paper01.substring(0, 6) === "CFAP 1" || paper02.substring(0, 6) === "CFAP 1" || paper03.substring(0, 6) === "CFAP 1") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 2" || paper02.substring(0, 6) === "CFAP 2" || paper03.substring(0, 6) === "CFAP 2") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 3" || paper02.substring(0, 6) === "CFAP 3" || paper03.substring(0, 6) === "CFAP 3") {
      price = 12000;
    } else if (paper01.substring(0, 6) === "CFAP 4" || paper02.substring(0, 6) === "CFAP 4" || paper03.substring(0, 6) === "CFAP 4") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "CFAP 5" || paper02.substring(0, 6) === "CFAP 5" || paper03.substring(0, 6) === "CFAP 5") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "CFAP 6" || paper02.substring(0, 6) === "CFAP 6" || paper03.substring(0, 6) === "CFAP 6") {
      price = 20000;
    } else if (paper01.substring(0, 6) === "MSA 1:" || paper02.substring(0, 6) === "MSA 1:" || paper03.substring(0, 6) === "MSA 1:") {
      price = 15000;
    } else if (paper01.substring(0, 6) === "MSA 2:" || paper02.substring(0, 6) === "MSA 2:" || paper03.substring(0, 6) === "MSA 2:") {
      price = 15000;
    }
  } else if (count === 2) {
    papercalc2();
    couponChecker()
  } else if (count === 3) {
    papercalc3();
    couponChecker()
    price = Math.ceil(price / 1000) * 1000;
  } else if (count === 0) {
    price = 0;
  }
  amountBox.innerHTML = price;

}
function discPriceCalc() {
  amountBox.innerHTML = "";
  if (count === 1) {
    price = (price / 100) * 100;
    price = Math.floor(price / 1000) * 1000;
  } else if (count === 2) {
    price = (price / 100) * 80;
    price = Math.floor(price / 1000) * 1000;
  } else if (count === 3) {
    price = (price / 100) * 70;
    price = Math.floor(price / 1000) * 1000;
  }
  amountBox.innerHTML = price;
}

coupon.addEventListener("keyup", couponChecker, { once: true });

coupon.addEventListener("keyup", (e) => {
  let key = e.charCode || e.keyCode;
  // let ascii = e.target.value.charAt(e.target.value.length - 1).charCodeAt(0);
  if ((key > 64 && key < 91) || (key > 47 && key < 58) || (key == 8)) {
    // couponChecker(null, coupon);
  }

})

// SLIDER //
var slider = document.querySelector(".form-slider");
var toggle = document.getElementsByClassName("toggle");
var coursesRow = document.querySelector("#courses-row");
for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener("click", toggleSlider, true);
}

function toggleSlider() {
  if (slider.classList.contains("opened")) {
    slider.classList.remove("opened");
    slider.classList.add("closed");
    slider.classList.add("dp-none");
    coursesRow.classList.remove("dp-none");
  } else {
    slider.classList.remove("closed");
    slider.classList.add("opened");
    slider.classList.remove("dp-none");
    coursesRow.classList.add("dp-none");
  }
}

let sindhCities = ["Karachi", "Hyderabad", "Sukkar", "Larkana", "Mirpur Khas", "Nawabshah", "Shikarpur", "Jamshoro", "Jaccobabad", "Umerkot", "Sehwan Sharif", "Thatta", "Other"];

let punjabCities = ["Lahore", "Islamabad", "Faislabad", "Rawalpindi", "Gujranwala", "Multan", "Bhalwalpur", "Sargodha", "Sialkot", "Gujrat", "Sahiwal", "Jhelum", "Pakpattan", "Wazirabad", "Mianwali", "Other"];

let kpkCities = ["Peshawar", "Mardan", "Dera Ismail Khan", "Abbotabad", "Manshera", "Chitral", "Matta", "Bahrain", "Haripur", "Barikot", "Jamrud", "Other"];

let balochistanCities = ["Quetta", "Khuzdar", "Hub", "Gwadar", "Sibi", "Sui Town", "Surab", "Pishin", "Mastung", "Qilla Saifullah", "Pasni", "Dhadar", "Kohlu", "Turbat", "Khanozai", "Loralai", "Nushki", "Chitkan", "Zehri", "Other"];

let karachiAreas = ['PECHS', 'SMCHS', 'F.B Area', 'North Nazimabad', 'Gulshan-e-Iqbal', 'Gulistan-e-Jauhar', 'Gulshan-e-Shamim', 'Gulzar-e-Hijri', 'Shahrah-e-Faisal', 'Liaquatabad', 'Landhi', 'Korangi', 'Other'];

let lahoreAreas = ['Askari', 'Cantt', 'DHA Deffence', 'Bharia Town', 'Samnabad', 'Nasheman-e-Iqbal', 'Gulberg', 'Wapda Town', 'Lalazaar', 'Khayaban-e-Amin', 'Gulshan-e-Ravi', 'Islampura', 'PCSIR', 'Other'];

let quettaAreas = ['Khaizi', 'Pashtunabad', 'Shara-e-Gulistan', 'Hazara', 'Essa Nagri', 'Gulshan-e-Afrasyab', 'Qumbrani', 'Mariabad', 'Patel Bagh', 'Samungli', 'Cantt', 'Baba Fareed Housing Society', 'Other'];

let peshawarAreas = ['Hayatabad', 'Warsak', 'Gulbahar', 'Umeedabad', 'Yakatoot', 'Latifabad', 'Hashtnagri', 'Kakshal', 'Tajabad', 'Rahatabad', 'Chughal Pura', 'Gunj', 'Chamkani', 'Quaidabad', 'Civil Quarters', 'Other'];

// AREAS //

let cities = document.querySelector("#cities");
let areas = document.querySelector("#Areas");
let cityInput = document.querySelector("#city-input");
let areaInput = document.querySelector("#area-input");
let areaInputBox = document.getElementsByName("Area/Locality")[0];


province.addEventListener("change", (e) => {
  if (e.target.value.toLowerCase() === "sindh") {
    citiesListChecker(sindhCities)
    // areaInput.classList.remove("dp-none")
  } else if (e.target.value.toLowerCase() === "punjab") {
    citiesListChecker(punjabCities)
  } else if (e.target.value.toLowerCase() === "kpk") {
    citiesListChecker(kpkCities)
  } else if (e.target.value.toLowerCase() === "balochistan") {
    citiesListChecker(balochistanCities)
  }
})


cityInput.addEventListener("change", (e) => {
  if (e.target.value.toLowerCase() === "karachi") {
    areaChecker(karachiAreas)
    // areaInput.classList.remove("dp-none")
  } else if (e.target.value.toLowerCase() === "lahore") {
    areaChecker(lahoreAreas)
  } else if (e.target.value.toLowerCase() === "quetta") {
    areaChecker(quettaAreas)
  } else if (e.target.value.toLowerCase() === "peshawar") {
    areaChecker(peshawarAreas)
  } else if (e.target.classList.contains("dp-none") === false) {
    // areaInput.classList.add("dp-none")
    areaInputBox.removeAttribute("required");
    areaInputBox.setAttribute("disabled", "disabled")
    areaInputBox.value = "";

  }
})
const citiesListChecker = (citiesList) => {
  cityInput.innerHTML = "";
  let option = document.createElement("option");
  option.value = "";
  option.textContent = "Select City";
  cityInput.appendChild(option);
  citiesList.forEach(area => {
    let option = document.createElement("option");
    option.value = area;
    option.innerHTML = area;
    cityInput.appendChild(option);
  })
}

const areaChecker = (areasList) => {
  areas.innerHTML = "";
  areasList.forEach(area => {
    let option = document.createElement("option");
    option.value = area;
    option.innerHTML = area;
    areas.appendChild(option);
  })
  areaInputBox.setAttribute("required", "required");
  areaInputBox.removeAttribute("disabled");
}
cityInput.addEventListener("keyup", couponChecker);




const scriptURL = "https://script.google.com/macros/s/AKfycbxdQoEpL7Xop43vfb6TFjHQ9VsCOOagrUNjrkmnkVwU5HtHFzpSIW-0vKdHHsPn4dE8/exec";
let form = document.forms["registration-form"];
let submitBtn = document.querySelector("#submit-btn");
let loader = document.querySelectorAll(".loader")[0];
let warningSpan = document.getElementById("warning-span");

function resetForm() {
  form.reset();
  count = 0;
  price = 0;
  countSpan.innerHTML = 0;
  amountBox.innerHTML = 0;
  removeCourse01(remove1, true);
  removeCourse02(remove2, true);
  removeCourse03(remove3, true);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  warningSpan.innerHTML = "";
  let fName = document.querySelector("#name").value;
  let fGuardian = document.getElementById("guardian-name").value;
  let fPhone = document.getElementById("Phone").value;
  let fGuardianPhone = document.getElementById("guardian-phone").value;
  let fCnic = document.getElementById("cnic").value;
  let fEmail = document.getElementById("e-mail").value;
  let fState = document.getElementById("province").value;
  let fCity = document.getElementById("city-input").value;
  let fArea = document.getElementById("Areas").value;
  let fPrev = document.getElementById("college-name").value;
  // let fCoupon = document.getElementById("coupon").value;
  let fPaymentMethod = document.getElementById("paymentMethod").value;
  let fQualification = document.getElementById("qualification").value;
  let fCount = count;
  let fAmount = price;
  let fAttempt01 = document.getElementById("Attempt").value || document.getElementById("Attempt02").value
  let fAttempt02 = document.getElementById("Attempt02").value || document.getElementById("Attempt03").value
  let fAttempt03 = document.getElementById("Attempt03").value || document.getElementById("Attempt").value;
  let fPaper01 = paper01;
  let fPaper02 = paper02;
  let fPaper03 = paper03;

  let files = inp.files;
  if (files.length > 0) {
    if (files[0].size > 400 * 1024) {
      alert("File Size Exceeds 400kb");
      return false;
    }
  }

  var storageRef = firebase.storage().ref();
  var file = document.querySelector("#ICAP").files[0];
  if (!file) {
    warningSpan.innerHTML = "please fill out all fields";
  }
  var name = new Date() + "-" + file.name;
  const metaData = {
    contentType: file.type,
  };

  form["Paper Count"].value = count;
  if (paper01 && paper02 && paper03) {
    if ((paper01 === paper02) || (paper01 === paper03) || (paper02 === paper03)) {
      alert("You Have Selected Same Courses")
      return false;
    }
  } else if ((paper01 && paper02) || (paper01 && paper03) || (paper02 && paper03)) {
    if ((paper01 === paper02) || (paper01 === paper03) || (paper02 === paper03)) {
      alert("You Have Selected Same Courses")
      return false;
    }
  }


  if (count === 1) {
    // loader.classList.remove("dp-none");
    submitBtn.disabled = true;
    myLoader(true);
    // form["Paper(s)"].value = paper01 || paper02 || paper03;
    // form["Attempt"].value = fAttempt01 || fAttempt02 || fAttempt03;
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            form["ICAP Card"].value = url;
            form["Paper Count"].value = fCount;
            form["Name"].value = fName;
            form["Father/Guardian Name"].value = fGuardian;
            form["Phone"].value = fPhone;
            form["Father/Guardian Phone"].value = fGuardianPhone;
            form["CNIC"].value = fCnic;
            form["Email"].value = fEmail;
            form["State/Province"].value = fState;
            form["City"].value = fCity;
            form["Area/Locality"].value = fArea;
            form["College Name"].value = fPrev;
            // form["Coupon"].value = fCoupon;
            form["Qualification"].value = fQualification;
            form["Payment Method"].value = fPaymentMethod;
            form["Amount"].value = fAmount;
            form["Attempt"].value = fAttempt01 || fAttempt02 || fAttempt03;


          })
          .then(() => {
            form["Paper(s)"].value = fPaper01 || fPaper02 || fPaper03;
            form["Date-Time"].value = Date();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                // loader.classList.add("dp-none");
                alert(
                  "Thanks for choosing IQSF ..! We Will Contact You Soon..."
                )
                submitBtn.disabled = false;
                myLoader();
                resetForm();
                makePaymentModal();
              })
              .catch((error) => {
                console.error("Error!", error.message)
                loader.classList.add("dp-none");
                submitBtn.disabled = false;
                myLoader();
                resetForm();

              });
          })
          .catch((error) => {
            console.error("Error!", error.message)
            loader.classList.add("dp-none");
            submitBtn.disabled = false;
            myLoader();
            resetForm();
          });


      });

  } else if (count === 2) {
    // loader.classList.remove("dp-none");
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            submitBtn.disabled = true;
            myLoader(true);
            form.Attempt.value = form.Attempt.value || form.Attempt02.value;
            form["Paper(s)"].value = fPaper01 || fPaper02;
            form["ICAP Card"].value = url;
            form["Paper Count"].value = fCount;
            form["Name"].value = fName;
            form["Father/Guardian Name"].value = fGuardian;
            form["Phone"].value = fPhone;
            form["Father/Guardian Phone"].value = fGuardianPhone;
            form["CNIC"].value = fCnic;
            form["Email"].value = fEmail;
            form["State/Province"].value = fState;
            form["City"].value = fCity;
            form["Area/Locality"].value = fArea;
            form["College Name"].value = fPrev;
            // form["Coupon"].value = fCoupon;
            form["Qualification"].value = fQualification;
            form["Payment Method"].value = fPaymentMethod;
            form["Amount"].value = fAmount;
            form["Attempt"].value = fAttempt01;
            form["Date-Time"].value = Date();

          })
          .then(() => {
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                //SECOND //
                form.Attempt.value = form.Attempt03.value || form.Attempt02.value;
                form["Paper(s)"].value = fPaper03 || fPaper02;
                form["Attempt"].value = fAttempt01;
                form["Date-Time"].value = Date();
                // resetForm();
                fetch(scriptURL, {
                  method: "POST",
                  body: new FormData(form),
                }).then((response) => {
                  // loader.classList.add("dp-none");
                  submitBtn.disabled = false;
                  myLoader();
                  alert(
                    "Thankyou for choosing IQSF..! We Will Contact You Soon..."
                  )
                  resetForm();
                  makePaymentModal();
                });
              })
              .catch((error) => {
                console.error("Error!", error.message)
                loader.classList.add("dp-none");
                submitBtn.disabled = false;
                myLoader();
              });
            // resetForm();
          })
          .catch((error) => {
            console.error("Error!", error.message)
            // loader.classList.add("dp-none");
            submitBtn.disabled = false;
            myLoader();
          });
        resetForm();
      });
  } else if (count === 3) {
    // loader.classList.remove("dp-none");
    submitBtn.disabled = true;
    myLoader(true);
    storageRef
      .child(name)
      .put(file)
      .then((snapshot) => {
        storageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            form["ICAP Card"].value = url;
            form["Paper(s)"].value = fPaper01;
            form["Attempt"].value = fAttempt01;
            form["Amount"].value = fAmount;
            form["Date-Time"].value = Date();
          })
          .then(() => {
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
              .then((response) => {
                //SECOND //
                form["Paper(s)"].value = fPaper02;
                form["Attempt"].value = fAttempt02;
                form["Date-Time"].value = Date();
                // resetForm();
                fetch(scriptURL, {
                  method: "POST",
                  body: new FormData(form),
                }).then((response) => {
                  // THIRD //
                  form["Paper(s)"].value = fPaper03;
                  form["Attempt"].value = fAttempt03;
                  form["Date-Time"].value = Date();
                  // resetForm();
                  fetch(scriptURL, { method: "POST", body: new FormData(form) })
                    .then((response) => {
                      // loader.classList.add("dp-none");
                      submitBtn.disabled = false;
                      myLoader();
                      alert(
                        "Thanks for Contacting us..! We Will Contact You Soon..."
                      );
                      resetForm();
                      makePaymentModal();
                    }
                    )
                    .catch((error) => {
                      console.error("Error!", error.message)
                      // loader.classList.add("dp-none");
                      submitBtn.disabled = false;
                      myLoader();
                      resetForm();
                    });
                });
              })
              .catch((error) => {
                console.error("Error!", error.message)
                // loader.classList.add("dp-none");
                submitBtn.disabled = false;
                myLoader();
                resetForm();
              });
          })
          .catch((error) => {
            console.error("Error!", error.message)
            // loader.classList.add("dp-none");
            submitBtn.disabled = false;
            myLoader();
            resetForm();
          });
      });
  }
});



let coursesChart = document.querySelectorAll(".course-chart");
let coursesChart02 = document.querySelectorAll(".course-chart-02");
let coursesChart03 = document.querySelectorAll(".course-chart-03");



