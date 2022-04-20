import "normalize.css";
import "./styles.scss";
("");
function initializePage() {
  document.getElementById("app").innerHTML = ``;
  var fragment = document.createDocumentFragment();
  [...Array(11).keys()].splice(1).forEach((i) => {
    fragment.appendChild(
      (() => {
        let img = document.createElement("img");
        img.src = `./images/members/${i}.jpg`;
        return img;
      })()
    );
  });
  document.querySelector(".mem-container").appendChild(fragment);
}
console.log("abt to initializeaa");
initializePage();
