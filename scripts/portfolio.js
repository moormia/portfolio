const tablinks = document.getElementsByClassName("tab-links");
      const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbnDn0XuLLcQybWBlCVMReuTMiA-mbwOiQ7jlOkJgCw2GNKzfiH0TGQWWBe3w2Xj9f/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

let seeMoreText = document.querySelector(".js-work");
const button = document.getElementById("show-more");


button.addEventListener("click", event => {
  if (seeMoreText.innerHTML === '') {
    button.innerHTML = "See less";
    document.querySelector(".js-work").innerHTML = `
      <div class="work">
      <img src="images/balance-sheet.png" />
      <div class="layer">
        <h3>Balance Sheet</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/balance-sheet/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/cat-painting.png" />
        <div class="layer">
          <h3>Cat Painting</h3>
          <p>Click here to see the full project.</p>
          <a href="https://moccaa.github.io/cat-painting/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
            <img src="images/cafe-menu.png" />
            <div class="layer">
              <h3>Cafe-Menu Website</h3>
              <p>
                This is an online menu for a local cafe. Click here to see full
                website.
              </p>
              <a href="https://moccaa.github.io/cafe-menu/" target="_blank"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
      <div class="work">
      <img src="images/city-skyline.png" />
      <div class="layer">
        <h3>City Skyline</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/city-skyline/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/colored-markers.png" />
        <div class="layer">
          <h3>Colored Markers</h3>
          <p>I coded this to learn CSS color theory. Click here to see the full project.</p>
          <a href="https://moccaa.github.io/colored-markers/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/documentation-page.png" />
        <div class="layer">
          <h3>Documentation Page</h3>
          <p>
          Click here to see the full project.
          </p>
          <a href="https://moccaa.github.io/documentation-page/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
      <img src="images/ferris-wheel.png" />
      <div class="layer">
        <h3>Ferris Wheel</h3>
        <p>
        First CSS Animation attempt.
        Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/ferris-wheel/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/magazine.png" />
        <div class="layer">
          <h3>Magazine</h3>
          <p>
            Click here to see the full project.
          </p>
          <a href="https://moccaa.github.io/magazine/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
      <img src="images/nutrition-label.png" />
      <div class="layer">
        <h3>Nutrition Label</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/nutrition-label/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/photo-gallery.png" />
        <div class="layer">
          <h3>Photo Gallery</h3>
          <p>Click here to see the full project.</p>
          <a href="https://moccaa.github.io/photo-gallery/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/piano.png" />
        <div class="layer">
          <h3>Piano</h3>
          <p>
            Click here to see the full project.
          </p>
          <a href="https://moccaa.github.io/piano/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
      <img src="images/quiz.png" />
      <div class="layer">
        <h3>Quiz</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/quiz/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/registration-form.png" />
        <div class="layer">
          <h3>Registration Form</h3>
          <p>Click here to see the full project.</p>
          <a href="https://moccaa.github.io/registration-form/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/rock-paper-scissors-game.png" />
        <div class="layer">
          <h3>Rock Paper Scissors Game</h3>
          <p>
            Click here to see the full project.
          </p>
          <a href="https://moccaa.github.io/rock-paper-scissors-game/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
      <img src="images/rothko-painting.png" />
      <div class="layer">
        <h3>Rothko Painting</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/rothko-painting/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/survey-form.png" />
        <div class="layer">
          <h3>Survey Form</h3>
          <p>Click here to see the full project.</p>
          <a href="https://moccaa.github.io/survey-form/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/to-do-list.png" />
        <div class="layer">
          <h3>To-Do List</h3>
          <p>
            Click here to see the full project.
          </p>
          <a href="https://moccaa.github.io/to-do-list/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
      <img src="images/tribute-page.png" />
      <div class="layer">
        <h3>Tribute Page</h3>
        <p>
          Click here to see the full project.
        </p>
        <a href="https://moccaa.github.io/tribute-page/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work none"></div>
      <div class="work">
        <img src="images/youtube-clone.png" />
        <div class="layer">
          <h3>Youtube Clone</h3>
          <p> Click here to see the full project.</p>
          <a href="https://moccaa.github.io/youtube-clone/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work none"></div>
      `
  } else {
    button.innerHTML = "See more";
    document.querySelector(".js-work").innerHTML = '';
  }
});
