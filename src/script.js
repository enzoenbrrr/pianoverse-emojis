document.querySelectorAll(".emoji").forEach(emoji => {
    emoji.addEventListener("click", function () {
      console.log("Emoji clicked:", this.querySelector("img").src);
    });
});

const container = document.querySelector('.emojis-container');
const categoryButtons = document.querySelectorAll('.categories i[data-target]');
const categorySections = document.querySelectorAll('.emojis-container > div[id]');

function setActiveCategory(targetId) {
categoryButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetId);
});
}

const observer = new IntersectionObserver(
(entries) => {
    const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
    const activeSection = visible[0].target;
    setActiveCategory(activeSection.id);
    }
},
{
    root: container,
    threshold: [0.25, 0.5, 0.75],
}
);

categorySections.forEach(section => observer.observe(section));

categoryButtons.forEach(btn => {
btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
});