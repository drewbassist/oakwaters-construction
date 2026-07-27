(() => {
  const items = [
    {
      frame: document.querySelector(".hero"),
      image: document.querySelector(".hero img")
    },
    {
      frame: document.querySelector(".intro-image"),
      image: document.querySelector(".intro-image img")
    }
  ].filter(item => item.frame && item.image);

  if (!items.length) return;

  const TRAVEL = 360;
  let ticking = false;

  function updateItem(item) {
    const rect = item.frame.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const progress = Math.max(
      0,
      Math.min(
        1,
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height)
      )
    );

    const y = -TRAVEL * progress;

    item.image.style.transform =
      `translate3d(0, ${y}px, 0)`;
  }

  function update() {
    if (window.innerWidth <= 800) {
      items.forEach(({ image }) => {
        image.style.transform = "";
      });

      ticking = false;
      return;
    }

    items.forEach(updateItem);
    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  document.addEventListener("DOMContentLoaded", update);

  window.addEventListener("load", update);

  window.addEventListener(
    "scroll",
    requestUpdate,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    requestUpdate
  );

  update();
})();
