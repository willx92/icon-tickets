import{s as T,i as o,_ as w}from"./index-VXVlpNRX.js";import{a as y,e as i,l as k}from"./format-DUTYAkNA.js";async function L(d){T("Door scanner");const s=await y.listScanEvents(),r=d.split("/")[2],a=s.find(n=>n.id===r||n.slug===r)||s[0];return{meta:{section:"scanner"},html:`<main id="main" class="scanner-page" tabindex="-1" style="--event-accent:${a?.accent||"#e45a2a"}">
      <header class="scanner-head">
        <div><p class="kicker">DOOR / ONLINE</p><h1>Scan a ticket</h1><p>Every result is checked against the selected event on the server.</p></div>
        <label>Checking in for<select data-scan-event>${s.map(n=>`<option value="${n.id}" ${n.id===a?.id?"selected":""}>${i(n.name)}</option>`).join("")}</select></label>
      </header>
      <section class="scanner-workspace">
        <div class="camera-station">
          <div class="camera-view" data-camera-view>
            <video data-camera-video muted playsinline></video>
            <div class="camera-placeholder">${o("camera",42)}<strong>Camera is off</strong><span>Start it when you’re ready to scan.</span></div>
            <div class="scan-frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          </div>
          <div class="camera-actions"><button class="button button--accent" type="button" data-start-camera>${o("camera")} Start camera</button><button class="button button--outline" type="button" data-stop-camera hidden>Stop camera</button></div>
          <p class="camera-privacy">Video stays in this browser. Only decoded ticket data is sent for verification.</p>
        </div>
        <aside class="scan-side">
          <section class="scan-event-slip"><span>${i(a?.code||"")}</span><div><p class="kicker">SELECTED EVENT</p><h2 data-selected-event>${i(a?.name||"")}</h2><p>${a?i(k(a.startsAt)):""}<br>${i(a?.venue||"")}</p></div></section>
          <section class="manual-scan"><p class="kicker">CAMERA WON’T READ IT?</p><h2>Enter the printed number.</h2><form data-manual-scan><label>Ticket number<input name="ticket" autocomplete="off" autocapitalize="characters" placeholder="4SHC26-REG-XXXX-XXXX" required></label><button class="button button--ink button--wide" type="submit">Check ticket ${o("arrow")}</button></form>
          </section>
        </aside>
      </section>
      <div class="scan-result-layer" data-scan-result hidden></div>
    </main>`,mount:()=>S(s,a)}}function S(d,s){let r=s?.id,a,n,u=!1;const g=document.querySelector("[data-camera-video]"),h=document.querySelector("[data-camera-view]"),c=document.querySelector("[data-start-camera]"),m=document.querySelector("[data-stop-camera]"),l=document.querySelector("[data-scan-result]");document.querySelector("[data-scan-event]").addEventListener("change",t=>{r=t.target.value;const e=d.find(v=>v.id===r);document.querySelector("[data-selected-event]").textContent=e.name,document.querySelector(".scanner-page").style.setProperty("--event-accent",e.accent)});async function b(t){if(!u){u=!0;try{const e=await y.checkIn({eventId:r,value:t});p(e),e.valid&&navigator.vibrate&&navigator.vibrate(100),!e.valid&&navigator.vibrate&&navigator.vibrate([120,70,120])}catch(e){p({valid:!1,reason:"network_error",message:e.message})}finally{u=!1}}}document.querySelector("[data-manual-scan]").addEventListener("submit",t=>{t.preventDefault();const e=t.currentTarget.elements.ticket;b(e.value),e.value=""}),document.querySelector("[data-use-demo]")?.addEventListener("click",()=>{document.querySelector("[data-manual-scan] input").value="LAD26-VIP-7K9M-4Q2P"}),c.addEventListener("click",async()=>{c.disabled=!0,c.textContent="Opening camera…";try{const{BrowserQRCodeReader:t}=await w(async()=>{const{BrowserQRCodeReader:e}=await import("./index-iPjrJSYw.js");return{BrowserQRCodeReader:e}},[]);n=new t(void 0,{delayBetweenScanAttempts:250}),a=await n.decodeFromVideoDevice(void 0,g,e=>{e&&!u&&b(e.getText())}),h.classList.add("is-live"),c.hidden=!0,m.hidden=!1}catch(t){console.error(t),c.disabled=!1,c.innerHTML=`${o("camera")} Try camera again`,p({valid:!1,reason:"camera_error",message:"Camera access was unavailable. Use the printed-number field instead."})}}),m.addEventListener("click",f);function f(){a?.stop(),n?.reset?.(),h.classList.remove("is-live"),c.hidden=!1,m.hidden=!0,c.disabled=!1,c.innerHTML=`${o("camera")} Start camera`}function p(t){const e=t.valid,v=$(t.reason,t.message);l.hidden=!1,l.innerHTML=`<div class="scan-result scan-result--${e?"valid":"invalid"}" role="dialog" aria-modal="true" aria-labelledby="scan-result-title">
      <div class="scan-result__icon">${o(e?"check":"close",52)}</div>
      <p class="kicker">${e?"ADMIT / FIRST SCAN":"DO NOT ADMIT"}</p>
      <h2 id="scan-result-title">${e?i(t.attendeeName):v.title}</h2>
      <p>${e?`${i(t.tier)} · ${i(t.ticketNumber)}`:v.body}</p>
      ${t.checkedInAt?`<small>Recorded ${i(k(t.checkedInAt))}</small>`:""}
      <button class="button ${e?"button--ink":"button--paper"} button--wide" type="button" data-next-scan>Scan the next ticket</button>
    </div>`,l.querySelector("[data-next-scan]").addEventListener("click",()=>{l.hidden=!0,document.querySelector("[data-manual-scan] input").focus()}),l.querySelector("[data-next-scan]").focus()}return f}function $(d,s){const r={already_checked_in:["Already checked in","This ticket has already passed through the door."],wrong_event:["Wrong event","This ticket is real, but it belongs to a different event."],ticket_void:["Ticket is void","The admin cancelled or replaced this ticket."],invalid_signature:["Invalid signature","The QR data was altered or did not come from ICON TICKETS."],ticket_not_found:["Ticket not found","Check the printed number and selected event, then try again."],event_not_assigned:["Event not assigned","Your staff account cannot check people into this event."],camera_error:["Camera unavailable",s],network_error:["Could not reach the server",s||"Check the connection before trying again."]},[a,n]=r[d]||["Ticket rejected",s||"The server could not validate this ticket."];return{title:a,body:n}}export{L as scannerView};
//# sourceMappingURL=scanner-BqyiTox4.js.map
