let myInput = document.querySelector(".input");
let myBtn = document.querySelector(".btn");
let myIdea = document.querySelector(".idea");

// Array

let myArray = [];

if (localStorage.getItem("idea")) {
  myArray = JSON.parse(localStorage.getItem("idea"));
}

// Trigger Get Data From Local Storag Function

getDFLocalS();
//
myBtn.onclick = function () {
  if (myInput.value != "") {
    addIdeaToArray(myInput.value);
    myInput.value = "";
  }
};

// Add click event listener to delete button
myIdea.addEventListener("click", (e) => {
  if (e.target.classList.contains("span1")) {
    // Remove Task From Local Storage
    let taskId = e.target.parentElement.getAttribute("data-id");
    DeleteTaskW(taskId);

    // Remove Element From Page
    e.target.parentElement.remove();
  }
});

//
function addIdeaToArray(IdeaText) {
  const idea = {
    id: Date.now(),
    title: IdeaText,
    completed: false,
  };

  // Push Task to Array

  myArray.push(idea);

  // Add task to page
  addElementsToPage(myArray);

  //
  addArrayTolocalS(myArray);
}

// Add Element To PAge

function addElementsToPage(myArray) {
  myIdea.innerHTML = "";

  myArray.forEach((idea) => {
    // Creat Mine Div

    let myDiv = document.createElement("div");
    myDiv.className = "theidea";

    if (idea.completed) {
      myDiv.className = "theidea done";
    }

    myDiv.setAttribute("data-id", idea.id);

    myDiv.appendChild(document.createTextNode(idea.title));

    // Delete Btn // Span
    let mySpan = document.createElement("span");
    mySpan.className = "span1";
    mySpan.appendChild(document.createTextNode("Delete"));
    myDiv.appendChild(mySpan);

    // Add myDiv in my Idea
    myIdea.appendChild(myDiv);
  });
}

function addArrayTolocalS(myArray) {
  window.localStorage.setItem("idea", JSON.stringify(myArray));
}

function getDFLocalS() {
  let LocalS = window.localStorage.getItem("idea");
  if (LocalS) {
    idea7 = JSON.parse(LocalS);
    addElementsToPage(idea7);
  }
}

function DeleteTaskW(ideaID) {
  myArray = myArray.filter((idea) => idea.id != ideaID);
  addArrayTolocalS(myArray);
}

// sc-btn



let mySbtn = document.querySelector(".sc-btn");

window.onscroll = function () {
  if (window.scrollY >=2000 ) {
    mySbtn.style.display = "block"
  } else {
    mySbtn.style.display = "none"
  }
}

mySbtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Add audio 

let myAudio = document.getElementById("myaudio")

mySbtn.addEventListener("click", function() {
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
    myAudio.currentTime = 0;
  }
});



