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
        <img src="images/magazine.png" />
        <div class="layer">
          <h3>Magazine</h3>
          <p>
            Click here to see the full project.
          </p>
          <a href="https://moormia.github.io/magazine/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/cafe-menu.png" />
        <div class="layer">
          <h3>Cafe-Menu Website</h3>
          <p>
            Click here to see full website.
          </p>
          <a href="https://moormia.github.io/cafe-menu/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
            <img src="images/calculator.png" />
            <div class="layer">
              <h3>Calculator</h3>
              <p>Click here to see how it works.</p>
              <a href="https://moormia.github.io/calculator/" target="_blank"
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
        <a href="https://moormia.github.io/tribute-page/" target="_blank"
          ><i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
      </div>
      <div class="work">
        <img src="images/youtube-clone.png" />
        <div class="layer">
          <h3>Youtube Clone</h3>
          <p> Click here to see the full project.</p>
          <a href="https://moormia.github.io/youtube-clone/" target="_blank"
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
          <a href="https://moormia.github.io/rock-paper-scissors-game/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
        <img src="images/colored-markers.png" />
        <div class="layer">
          <h3>Colored Markers</h3>
          <p>CSS color theory. Click here to see the full project.</p>
          <a href="https://moormia.github.io/colored-markers/" target="_blank"
            ><i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="work">
            <img src="images/penguin.png" />
            <div class="layer">
              <h3>Animated Penguin</h3>
              <p>
                CSS Animation. Click here
                to say 'Hello'.
              </p>
              <a href="https://moormia.github.io/penguin/" target="_blank"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
      `
  } else {
    button.innerHTML = "See more";
    document.querySelector(".js-work").innerHTML = '';
  }
});