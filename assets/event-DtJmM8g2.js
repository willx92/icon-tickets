import{a as $,d as M,e as o,l as x,m as h,c as S,i as L,f as O,s as C,b as P}from"./format-DUTYAkNA.js";import{s as I,i as r,t as R}from"./index-VXVlpNRX.js";async function F(l){const t=await $.getEvent(l);if(!t)throw new Error("That event could not be found.");I(t.name);const a=M(t.startsAt),e=t.tiers.find(m=>m.remaining>0);return{meta:{section:"public"},html:`
      <main id="main" tabindex="-1" style="--event-accent:${t.accent}">
        <a href="/events" class="event-back" data-link>${r("back")} All events</a>
        <section class="event-hero">
          <div class="event-hero__date"><span>${a.month}</span><strong>${a.day}</strong><small>${a.year}</small></div>
          <div class="event-hero__poster"><img src="${t.image}" alt="Poster artwork for ${o(t.name)}"><span>${o(t.code)} / EVENTS</span></div>
          <div class="event-hero__title">
            <p class="kicker">${o(t.eyebrow)}</p>
            <h1>${o(t.name)}</h1>
            <p>${o(t.description)}</p>
          </div>
          <dl class="event-hero__facts">
            <div><dt>${r("calendar")} Date & time</dt><dd>${o(x(t.startsAt))}<small>${o(t.doors)}</small></dd></div>
            <div><dt>${r("pin")} Venue</dt><dd>${o(t.venue)}</dd></div>
          </dl>
        </section>

        <section class="event-body page-shell">
          <div class="event-notes">
            <div class="section-number"><span>01</span><p class="kicker">BEFORE YOU BUY</p></div>
            <h2>One tier. One order. One named pass for each person.</h2>
            <p>Choose everyone’s ticket tier together, then add a name and email for each attendee. Each person gets their own QR ticket; the purchaser keeps a full set.</p>
            <ul class="plain-list">
              <li>${r("check")} Ticket hold begins when checkout is ready for Paystack.</li>
              <li>${r("check")} All sales are final, apart from the stated exceptions.</li>
              <li>${r("check")} The QR is valid for one successful check-in.</li>
            </ul>
            <div class="event-callout"><span>DON’T GUESS</span><p>If you are buying for friends, use the names they will show at the door. You cannot change attendees yourself after payment in this version.</p></div>
          </div>

          <aside class="checkout" aria-labelledby="checkout-title">
            <header class="checkout__head"><div><p class="kicker">TICKETS</p><h2 id="checkout-title">Choose your ticket</h2></div><span class="secure-note">${r("ticket")} NGN</span></header>
            <div class="checkout-step" data-ticket-step>
              <div class="tier-list" role="radiogroup" aria-label="Ticket tier">
                ${t.tiers.map(m=>D(m,m.id===e?.id)).join("")}
              </div>
              ${e?`
                <div class="quantity-line">
                  <div><span class="field-label">How many?</span><small data-remaining>${e.remaining} left at this price</small></div>
                  <div class="stepper" aria-label="Ticket quantity">
                    <button type="button" data-quantity="minus" aria-label="Remove one ticket">${r("minus")}</button>
                    <output data-quantity-output aria-live="polite">1</output>
                    <button type="button" data-quantity="plus" aria-label="Add one ticket">${r("plus")}</button>
                  </div>
                </div>
                <div class="checkout-total checkout-total--compact">
                  <span>Estimated total</span><strong data-estimated-total>${h(S(e.priceMinor,1).totalMinor)}</strong>
                </div>
                <button class="button button--accent button--wide" type="button" data-continue>Continue with 1 ${o(e.name)} ticket ${r("arrow")}</button>
                <p class="microcopy">No inventory is held until you continue to Paystack.</p>`:'<div class="sold-note"><strong>Every tier is sold out.</strong><p>There are no tickets to reserve right now.</p></div>'}
            </div>

            <form class="checkout-form" data-checkout-form hidden novalidate>
              <div class="form-progress"><span class="is-current">1 Details</span><span>2 Review</span><span>3 Pay</span></div>
              <section class="form-section">
                <div class="form-section__head"><span>01</span><div><h3>Purchaser</h3><p>Where should we send the complete order?</p></div></div>
                <label>Full name<input name="buyer-name" autocomplete="name" required maxlength="100" placeholder="e.g. Nneka Obi"></label>
                <div class="field-pair">
                  <label>Email<input name="buyer-email" type="email" autocomplete="email" required placeholder="you@example.com"></label>
                  <label>Phone<input name="buyer-phone" type="tel" autocomplete="tel" required placeholder="0801 234 5678" inputmode="tel"></label>
                </div>
              </section>
              <section class="form-section">
                <div class="form-section__head"><span>02</span><div><h3>Attendees</h3><p>Each person receives their own named ticket.</p></div></div>
                <div data-attendee-fields></div>
              </section>
              <section class="form-section review-section">
                <div class="form-section__head"><span>03</span><div><h3>Review</h3><p>Paystack will handle the card or transfer.</p></div></div>
                <div class="price-ledger" data-price-ledger></div>
                <label class="check-line"><input type="checkbox" name="terms" required><span>I accept the <a href="/terms" data-link>ticket terms</a>. Sales are final except for cancelled events, duplicate charges or confirmed payment/platform errors.</span></label>
                <div class="form-error" data-form-error role="alert" hidden></div>
                <button class="button button--ink button--wide button--pay" type="submit" data-pay-button>Reserve for 15 minutes & continue ${r("arrow")}</button>
                <button class="text-button" type="button" data-change-selection>← Change tier or quantity</button>
              </section>
            </form>
          </aside>
        </section>
      </main>
      <div class="payment-layer" data-payment-layer hidden></div>`,mount:()=>N(t,e)}}function D(l,t){const a=l.remaining<1;return`<label class="tier-row ${a?"tier-row--sold":""}">
    <input type="radio" name="tier" value="${l.id}" ${t?"checked":""} ${a?"disabled":""}>
    <span class="tier-row__select" aria-hidden="true"></span>
    <span class="tier-row__copy"><strong>${o(l.name)}</strong><small>${o(l.description)}</small></span>
    <span class="tier-row__price"><strong>${h(l.priceMinor)}</strong>${a?"<small>SOLD OUT</small>":`<small>${l.remaining} remain</small>`}</span>
  </label>`}function N(l,t){if(!t)return;let a=t,e=1,m=crypto.randomUUID(),v,f;const k=document.querySelector("[data-ticket-step]"),p=document.querySelector("[data-checkout-form]"),q=document.querySelector("[data-attendee-fields]"),_=document.querySelector("[data-price-ledger]"),y=document.querySelector("[data-form-error]"),c=document.querySelector("[data-payment-layer]"),w=()=>S(a.priceMinor,e);function b(){document.querySelector("[data-quantity-output]").textContent=e,document.querySelector("[data-remaining]").textContent=`${a.remaining} left at this price`,document.querySelector("[data-estimated-total]").textContent=h(w().totalMinor),document.querySelector("[data-continue]").innerHTML=`Continue with ${e} ${o(a.name)} ticket${e===1?"":"s"} ${r("arrow")}`}function T(){q.innerHTML=Array.from({length:e},(i,d)=>`
      <fieldset class="attendee-fieldset">
        <legend><span>Ticket ${d+1}</span> Who is using this ticket?</legend>
        <div class="field-pair">
          <label>Attendee name<input name="attendee-name-${d}" autocomplete="name" required maxlength="100" placeholder="Full name"></label>
          <label>Attendee email<input name="attendee-email-${d}" type="email" autocomplete="email" required placeholder="name@example.com"></label>
        </div>
      </fieldset>`).join("");const n=w();_.innerHTML=`
      <div><span>${e} × ${o(a.name)}</span><strong>${h(n.subtotalMinor)}</strong></div>
      
      <div class="price-ledger__total"><span>Total due</span><strong>${h(n.totalMinor)}</strong></div>`}function E(n){a=l.tiers.find(i=>i.id===n),e=Math.min(e,a.maxPerOrder,a.remaining),b()}document.querySelectorAll('input[name="tier"]').forEach(n=>n.addEventListener("change",()=>E(n.value))),document.querySelector('[data-quantity="minus"]').addEventListener("click",()=>{e=Math.max(1,e-1),b()}),document.querySelector('[data-quantity="plus"]').addEventListener("click",()=>{const n=Math.min(a.maxPerOrder,a.remaining);if(e>=n)return R(`You can choose up to ${n} ${a.name} ticket${n===1?"":"s"} in this order.`,"warning");e+=1,b()}),document.querySelector("[data-continue]").addEventListener("click",()=>{T(),k.hidden=!0,p.hidden=!1,p.querySelector("input")?.focus()}),document.querySelector("[data-change-selection]").addEventListener("click",()=>{p.hidden=!0,k.hidden=!1,k.scrollIntoView({behavior:"smooth",block:"center"})}),p.addEventListener("submit",async n=>{if(n.preventDefault(),y.hidden=!0,!p.checkValidity()){p.reportValidity(),y.textContent="Check the highlighted details and accept the ticket terms.",y.hidden=!1;return}const i=new FormData(p),d=p.querySelector("[data-pay-button]");d.disabled=!0,d.innerHTML='<span class="button-spinner" aria-hidden="true"></span> Reserving your tickets…';try{const s=await $.initiateOrder({eventSlug:l.slug,tierId:a.id,quantity:e,buyer:{fullName:i.get("buyer-name"),email:i.get("buyer-email"),phone:i.get("buyer-phone")},attendees:Array.from({length:e},(u,g)=>({fullName:i.get(`attendee-name-${g}`),email:i.get(`attendee-email-${g}`)})),termsAccepted:i.get("terms")==="on",idempotencyKey:m});f=s.statusAccessToken,sessionStorage.setItem("tixora-status-token",f),sessionStorage.setItem("tixora-order-reference",s.orderReference),!L&&s.authorizationUrl,A(s)}catch(s){y.textContent=s.message,y.hidden=!1,d.disabled=!1,d.innerHTML=`Reserve for 15 minutes & continue ${r("arrow")}`,s.code==="sold_out"&&(m=crypto.randomUUID())}});function A(n){c.hidden=!1,c.innerHTML=`
      <div class="payment-sheet" role="dialog" aria-modal="true" aria-labelledby="payment-title">
        <div class="payment-sheet__brand"><strong>ICON TICKETS <span>×</span> PAYSTACK</strong><button type="button" data-close-payment aria-label="Return to checkout">${r("close")}</button></div>
        <div class="payment-sheet__body">
          <p class="kicker">TEST CHECKOUT / NO MONEY MOVES</p>
          <h2 id="payment-title">Pay ${h(n.pricing.totalMinor)}</h2>
          <p>Your ${e} ${o(a.name)} ticket${e===1?"":"s"} ${e===1?"is":"are"} held for <strong data-hold-clock>15:00</strong>.</p>
          <div class="payment-methods" role="group" aria-label="Demo payment method">
            <button class="payment-method is-active" type="button" data-method="card"><span>01</span><strong>Card</strong><small>Instant test approval</small></button>
            <button class="payment-method" type="button" data-method="bank_transfer"><span>02</span><strong>Bank transfer</strong><small>Simulate transfer received</small></button>
          </div>
          <div class="test-instruction"><span>TEST MODE</span><p data-method-copy>No card number is needed. Approve the test charge to exercise the verified-payment, ticket and email flow.</p></div>
          <button class="button button--accent button--wide" type="button" data-complete-payment>Approve test card payment ${r("arrow")}</button>
          <p class="payment-sheet__reference">Order ${o(n.orderReference)} · Secured on the server</p>
        </div>
      </div>`;let i="card";c.querySelectorAll("[data-method]").forEach(s=>s.addEventListener("click",()=>{i=s.dataset.method,c.querySelectorAll("[data-method]").forEach(u=>u.classList.toggle("is-active",u===s)),c.querySelector("[data-method-copy]").textContent=i==="card"?"No card number is needed. Approve the test charge to exercise the verified-payment, ticket and email flow.":"This simulates Paystack confirming a bank transfer by webhook while the inventory hold is active.",c.querySelector("[data-complete-payment]").innerHTML=`${i==="card"?"Approve test card payment":"Mark demo transfer received"} ${r("arrow")}`})),c.querySelector("[data-close-payment]").addEventListener("click",()=>{c.hidden=!0,clearInterval(v)}),c.querySelector("[data-complete-payment]").addEventListener("click",async s=>{const u=s.currentTarget;u.disabled=!0,u.innerHTML='<span class="button-spinner"></span> Paystack webhook received…';try{await $.completeDemoPayment(f,i),clearInterval(v),history.pushState({},"",`/order/status#${f}`),window.dispatchEvent(new PopStateEvent("popstate"))}catch(g){u.disabled=!1,u.textContent=g.message}});const d=()=>{const s=C(n.holdExpiresAt),u=c.querySelector("[data-hold-clock]");u&&(u.textContent=P(s)),s||clearInterval(v)};d(),v=setInterval(d,1e3),c.querySelector("[data-complete-payment]").focus()}return b(),()=>clearInterval(v)}export{F as eventView};
//# sourceMappingURL=event-DtJmM8g2.js.map
