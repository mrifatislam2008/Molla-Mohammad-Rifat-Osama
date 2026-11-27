// Edit the URLs in links.js to add your own accounts.
const roleNames = ["Android App Developer", "Website Developer", "Technology Enthusiast", "Cybersecurity Learner"];
const roleElement = document.getElementById("roleText");
let roleIndex = 0;
if (roleElement) {
  setInterval(() => {
    roleElement.classList.add("role-changing");
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roleNames.length;
      roleElement.textContent = roleNames[roleIndex];
      roleElement.classList.remove("role-changing");
    }, 220);
  }, 2600);
}

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle?.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
siteNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const progress = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");
function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = percent + "%";
  backTop.classList.toggle("show", window.scrollY > 450);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.getElementById("year").textContent = new Date().getFullYear();

const groupsRoot = document.getElementById("socialGroups");
const socialGroups = window.RIFAT_SOCIAL_LINKS || [];
const iconMap = { Facebook:"f", Telegram:"➤", GitHub:"⌘", YouTube:"▶", TikTok:"♪" };
socialGroups.forEach(group => {
  const section = document.createElement("section");
  section.className = "social-group reveal";
  const heading = document.createElement("h3");
  heading.textContent = group.title;
  const count = document.createElement("span");
  count.textContent = String(group.links.length).padStart(2, "0") + " LINKS";
  heading.appendChild(count);
  const links = document.createElement("div");
  links.className = "social-links";
  group.links.forEach(item => {
    const a = document.createElement("a");
    a.className = "social-link";
    a.href = item.url || "#";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = (iconMap[group.title] || "↗") + "  " + item.label + "  ↗";
    if (!item.url || item.url === "#") {
      a.href = "#";
      a.addEventListener("click", e => e.preventDefault());
      a.title = "Add your real URL in js/links.js";
      a.style.opacity = ".65";
    }
    links.appendChild(a);
  });
  section.append(heading, links);
  groupsRoot.appendChild(section);
  revealObserver.observe(section);
});
