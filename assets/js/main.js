document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));

  const track = document.querySelector(".news-ticker .track");
  if (track) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  }
});