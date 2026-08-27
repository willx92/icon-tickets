import{a as d,d as c,e as s,m as p}from"./format-DUTYAkNA.js";import{s as m,i}from"./index-VXVlpNRX.js";async function $(){m("What’s happening next");const e=await d.listEvents();return{meta:{section:"public"},html:`
      <main id="main" tabindex="-1">
        <section class="programme-head page-shell">
          <div>
            <p class="kicker">EVENTS / UPCOMING</p>
            <h1>What’s happening next</h1>
          </div>
          
        </section>
        <section class="event-programme" aria-label="Upcoming events">
          ${e.map(h).join("")}
        </section>

      </main>`,mount(){const t=document.querySelector("[data-dispatch]"),a=n=>{n.preventDefault(),t.innerHTML='<p class="dispatch__thanks"><strong>You’re on the list.</strong><br>We’ll send the next bill here.</p>'};return t?.addEventListener("submit",a),()=>t?.removeEventListener("submit",a)}}}function h(e,t){const a=c(e.startsAt),n=e.tiers.filter(o=>o.remaining>0),l=Math.min(...n.map(o=>o.priceMinor)),r=n.length===0;return`
    <article class="event-row" style="--event-accent:${e.accent}">
      <div class="event-row__number">${String(t+1).padStart(2,"0")}</div>
      <div class="event-row__date"><strong>${a.day}</strong><span>${a.month}<br>${a.year}</span></div>
      <a href="/event/${encodeURIComponent(e.slug)}" data-link class="event-row__poster" aria-label="See ${s(e.name)} tickets">
        <img src="${e.image}" alt="" loading="${t?"lazy":"eager"}">
        <span class="poster-stamp">${s(e.code)}</span>
      </a>
      <div class="event-row__copy">
        <p class="kicker">${s(e.eyebrow)}</p>
        <h2><a href="/event/${encodeURIComponent(e.slug)}" data-link>${s(e.name)}</a></h2>
        <dl class="event-facts">
          <div><dt>${i("calendar")} When</dt><dd>${a.weekday}, ${a.day} ${a.month} · ${a.time}</dd></div>
          <div><dt>${i("pin")} Where</dt><dd>${s(e.venue)}</dd></div>
        </dl>
      </div>
      <div class="event-row__price">
        ${r?'<span class="status-label status-label--sold">Sold out</span>':`<span>From</span><strong>${p(l)}</strong>`}
        <a class="arrow-link" href="/event/${encodeURIComponent(e.slug)}" data-link>${r?"Event details":"See tickets"} ${i("arrow")}</a>
      </div>
    </article>`}export{$ as eventsView};
//# sourceMappingURL=events-Bfm-DJpr.js.map
