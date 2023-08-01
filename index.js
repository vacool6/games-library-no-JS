const linkItems = document.querySelectorAll(".linkItem");

linkItems[0].style.color = "goldenrod";
linkItems[0].style.textDecoration = "underline";

for (let item of linkItems) {
  item.addEventListener("click", () => {
    // Remove styles before adding
    for (let i of linkItems) {
      i.style.color = "";
      i.style.textDecoration = "";
    }

    item.style.color = "goldenrod";
    item.style.textDecoration = "underline";
  });
}
