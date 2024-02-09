// Scrolling effect

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//TypeWritter

var hello = document.getElementById("hello");

var typewriter = new Typewriter(hello, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Hello, ")
  .pauseFor(300)
  .typeString("<div>my name is <strong>Johanna</strong></div>")
  .pauseFor(900)
  .start();
