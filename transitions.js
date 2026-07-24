(() => {
  const LEAVE_MS = 420;

  function content() {
    return document.querySelector(".page-transition-content");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const panel = content();
    if (!panel) return;

    panel.classList.add("page-enter");

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) return;

      let destination;
      try {
        destination = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (destination.origin !== window.location.origin) return;

      event.preventDefault();
      panel.classList.remove("page-enter");
      panel.classList.add("page-leave");

      window.setTimeout(() => {
        window.location.href = destination.href;
      }, LEAVE_MS);
    });
  });

  window.addEventListener("pageshow", () => {
    const panel = content();
    if (panel) panel.classList.remove("page-leave");
  });
})();
