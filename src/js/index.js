//////////////////////////
// IMPORT CSS
//////////////////////////
import '../css/style.sass';
const showMenu = document.getElementById("header-navbar");
const Menubtn = document.getElementById("header-menu");
const MenuCategoryBtn = document.getElementById("category-btn");
const showCategories = document.getElementById("main_navbar");
const mosaic = document.getElementById("main__portfolio__mosaic");
import originalURL from "./data.json";
let urlArray = originalURL;

function showHeaderMenu() {
  if (showMenu.style.display === "none") {
    showMenu.style.display = "flex";
  } else {
    showMenu.style.display = "none";
  }
}

function showCategory() {
  if (showCategories.style.display === "none") {
    showCategories.style.display = "flex";
  } else {
    showCategories.style.display = "none";
  }
}

const printImages=()=>{
  const view = `
    ${urlArray
      .map(
        (img) => `
      <figure class="grid__img"><img  src="${img.url}"/><div class="hover--img"><h2>CREATIVE LOGO</h2><p>Branding</p></div></figure>
      `
      )
      .join("")}
    `;
    mosaic.innerHTML=view
}



document.addEventListener("DOMContentLoaded", function () {
  printImages()

  Menubtn.addEventListener('click',(()=>{
    showHeaderMenu()
  }))

  MenuCategoryBtn.addEventListener("click", () => {
    showCategory();
  });


});