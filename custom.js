var menus = document.getElementsByClassName("menu");
var menuIcon = document.getElementsByClassName("fa-plus");
var actives = document.getElementsByClassName("active");
var activeChannel = document.getElementsByClassName("activeChannel");
var sidebar = document.getElementById("sidebar");
var socialityTag = document.getElementById("socialityTag");
var sociality = document.getElementById("sociality");
var logo = document.getElementsByClassName("logo");
var tabs = document.getElementsByClassName("tab");

logo[2].style.opacity = "1";

for (var i = 0; i < menus.length; i++) {
  menus[i].onclick = function () {
    var panel = this.nextElementSibling;
    this.lastElementChild.firstElementChild.classList.toggle("fa-minus");
    this.lastElementChild.firstElementChild.classList.toggle("fa-plus");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      // tabs[i].style.backgroundColor = "#485460";
    } else {
      removeMenuClasses();
      panel.style.maxHeight = panel.scrollHeight + "px";
      // tabs[i].style.backgroundColor = "#ff4d4d";
    }
  };
}

function removeMenuClasses() {
  for (var i = 0; i < menus.length; i++) {
    var panel = menus[i].nextElementSibling;
    panel.style.maxHeight = null;
  }
}

for (var i = 0; i < actives.length; i++) {
  actives[i].onclick = function () {
    var panel = this.firstElementChild;

    if (panel.classList.contains("activeChannel")) {
      if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
        sociality.style.width = "310px";
        socialityTag.innerHTML =
          "<h4 id=" + "socialityTag" + ">sociality.<span>io</span></h4>";
      } else {
        sidebar.style.display = "none";
        sociality.style.width = "80px";
        socialityTag.innerHTML =
          "<h4 id=" + "socialityTag" + ">s.<span>io</span></h4>";
      }
    } else {
      null;
    }
    removeActiveClasses();
    panel.classList.remove("notActiveChannel");
    panel.classList.add("activeChannel");
    panel.nextElementSibling.style.opacity = "1";
  };
}

function removeActiveClasses() {
  for (var i = 0; i < actives.length; i++) {
    var panel = actives[i].firstElementChild;
    panel.classList.remove("activeChannel");
    panel.classList.add("notActiveChannel");
    panel.nextElementSibling.style.opacity = "0.2";
  }
}
