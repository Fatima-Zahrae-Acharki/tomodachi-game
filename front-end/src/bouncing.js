const bouncy = document.querySelector(".tomo");

bouncy.addEventListener("mouseenter", toggleRubberBand);

function toggleRubberBand(e){
  bouncy.classList.add("bouncing");
  bouncy.classList.remove("bouncing");
}