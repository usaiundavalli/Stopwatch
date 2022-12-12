const accordion = document.getElementsByClassName("content-container");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classlist.toggle("active");
  });
}
