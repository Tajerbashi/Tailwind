let $ = document;
const tabs = $.querySelectorAll(".tab");
const panels = $.querySelectorAll(".panel");
const onTabClick = (e) => {
  tabs.forEach((element) => {
    element.children[0].classList.remove("border-b-4");
  });
  panels.forEach((item) => item.classList.add("hidden"));
  e.target.classList.add("border-gray-400", "border-b-4");
  const classString = e.target.getAttribute("data-targtet");
  $.getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
};

tabs.forEach((element) => {
  element.addEventListener("click", onTabClick);
});
