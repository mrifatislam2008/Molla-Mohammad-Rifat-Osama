(() => {
  const config = window.RIFAT_PROFILE || {groups:[]};
  const container = document.getElementById("socialGroups");
  const isPlaceholder = value => /YOUR-|ADD SECOND|ADD THIRD|SECOND_USERNAME|THIRD_USERNAME|FACEBOOK-URL/i.test(value || "");
  if (container) {
    config.groups.forEach(group => {
      const validLinks = (group.links || []).filter(item => item.url && !isPlaceholder(item.url) && !isPlaceholder(item.name));
      const groupEl = document.createElement("section");
      groupEl.className = "social-group";
      const heading = document.createElement("h3");
      heading.textContent = `${group.icon || "↗"}  ${group.title}`;
      groupEl.appendChild(heading);
      if (!validLinks.length) {
        const p = document.createElement("p");
        p.className = "empty-social";
        p.textContent = "Add your real public account details in assets/profile-config.js.";
        groupEl.appendChild(p);
      }
      validLinks.forEach(item => {
        const a = document.createElement("a");
        a.className = "social-link";
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        const left = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = item.name;
        const small = document.createElement("small");
        small.textContent = `${item.username || ""}${item.description ? " · " + item.description : ""}`;
        left.append(strong, small);
        const out = document.createElement("span");
        out.className = "out";
        out.textContent = "↗";
        a.append(left, out);
        groupEl.appendChild(a);
      });
      container.appendChild(groupEl);
    });
  }

  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    }));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const progress = document.getElementById("scrollProgress");
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + "%";
  };
  window.addEventListener("scroll", updateProgress, {passive:true});
  updateProgress();

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }), {threshold:.12});
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add("visible"));

  const typed = document.getElementById("typed");
  if (typed) {
    const words = ["Cybersecurity & Development", "Ethical Security Research", "Android & Website Developer", "Technology Enthusiast"];
    let i = 0, j = words[0].length, deleting = true;
    const tick = () => {
      const word = words[i];
      typed.textContent = word.slice(0, j);
      if (deleting) { j--; if (j <= 0) { deleting = false; i = (i + 1) % words.length; } }
      else { j++; if (j >= words[i].length) { deleting = true; setTimeout(tick, 1100); return; } }
      setTimeout(tick, deleting ? 38 : 65);
    };
    setTimeout(tick, 1500);
  }
})();