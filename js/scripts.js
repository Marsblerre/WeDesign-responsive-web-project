// Mobile Menu
navBar = document.getElementById("sliding-header-menu-outer");
hamburgerMenu = document.getElementById("hamburguer-icon");

hamburgerMenu.addEventListener("click", hamburgerMenuSeen);

function hamburgerMenuSeen() {
  navBar.style.right = "0";
}

closeX = document.getElementById("sliding-header-menu-close-button");
closeX.onclick = function () {
  navBar.style.right = "-320px";
};

// About us Tab

var aboutUs = {
  Mission:
    "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  Vision:
    "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  Values:
    "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>",
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let aboutUSTabs = document.getElementsByClassName("single-tab");

for (let i = 0; i < aboutUSTabs.length; i++) {
  aboutUSTabs[i].onclick = () => {
    let checkedValue = aboutUSTabs[i].innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[checkedValue];

    for (let j = 0; j < aboutUSTabs.length; j++) {
      aboutUSTabs[j].style.backgroundColor = unseletectedColor;
      aboutUSTabs[j].style.fontWeight = "normal";
    }

    aboutUSTabs[i].style.backgroundColor = seletectedColor;
    aboutUSTabs[i].style.fontWeight = "bold";
  };
}

// let aboutSelections = document.getElementsByClassName("single-tab");
// for (let i = 0; i < aboutSelections.length; i++) {
//   let selectedSec = aboutSelections[i];
//   aboutSelections[i].style.backgroundColor = unseletectedColor;
//   selectedSec.onclick = () => {
//     let selectedName = selectedSec.innerHTML;
//     let selectedContext = aboutUs[selectedName];
//     document.getElementById('box-text').innerHTML = selectedContext;
//     selectedSec.style.backgroundColor = seletectedColor;
//   };
// }

//! Service slider

var ourServices = [
  {
    title: "Web design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
  },

  {
    title: "Branding",
    text: "Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
  },

  {
    title: "Digital Marketing",
    text: "Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.",
  },
];
var nextArrow = document.getElementById("service-next");
var previousArrow = document.getElementById("service-previous");

var serviceTitle = document.getElementById("service-title");
var serviceText = document.getElementById("service-text");

var serviceIndex = 0;


nextArrow.onclick = () => {
  if (serviceIndex == ourServices.length - 1) {
    serviceIndex = 0;
  } else {
    serviceIndex++;
  }
  writeServiceInside(serviceIndex);
};
previousArrow.onclick = () => {
  if(serviceIndex == 0){
    serviceIndex = ourServices.length - 1;
  } else{
    serviceIndex--;
  }
  writeServiceInside(serviceIndex);
}

function writeServiceInside(index) {
  var title = ourServices[serviceIndex].title;
  var text = ourServices[serviceIndex].text;
  serviceTitle.innerHTML = title;
  serviceText.innerHTML = text;
}
// Footer
