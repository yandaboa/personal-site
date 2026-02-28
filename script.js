const { publications, experience, projects } = window.SITE_DATA;

function linkSet(links = {}) {
  return `<div class="links">${Object.entries(links)
    .map(([k, v]) => `<a href="${v}" target="_blank" rel="noreferrer">${k}</a>`)
    .join("")}</div>`;
}

document.getElementById("pub-list").innerHTML = publications.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <div class="meta">${p.venue}</div>
    <p>${p.summary}</p>
    ${linkSet(p.links)}
  </article>
`).join("");

document.getElementById("exp-list").innerHTML = experience.map(e => `
  <article class="timeline-item">
    <h3>${e.role} · ${e.org}</h3>
    <div class="meta">${e.time}</div>
    <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
  </article>
`).join("");

document.getElementById("proj-list").innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <div class="meta">${p.tech}</div>
    <p>${p.summary}</p>
    ${linkSet(p.links)}
  </article>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
