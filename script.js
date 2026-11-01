/* ===== EDIT HERE ===== */
const CONFIG = {
  // Paste a form-service URL (Formspree, Web3Forms, your own API) to enable the booking form.
  // While empty, the form does NOT send anything; it offers a WhatsApp message instead.
  FORM_ENDPOINT: "",
  WA: "919823687619",
  LINKS: {
    maps: "https://maps.app.goo.gl/SkgwHjf4RwX1MAQM6",
    fb1: "https://www.facebook.com/share/1JrHJF1Cds/",
    fb2: "https://www.facebook.com/share/1HncwjQZCr/",
    jd: "https://www.justdial.com/hi/Goa/Once-Again-Salon-Opposite-Techno-Cidade-Porvorim/0832PX832-X832-131001111511-Y2L6_BZDET/photos?newAddress=Opposite+Techno+Cidade+Porvorim&cname=Once+Again+Salon&paid=0&datacity=&ds=0&stxt=Once+Again+Salon&nid=&stype=company_list&docid=0832PX832-X832-131001111511-Y2L6&show_open_abd=0&show_jd_genie=0&source=detail_page&trkid=2639018986-fcomp-cmpco&subtab=&isLogin=1"
  }
};

const T = {
en: {
home:"Home",about:"About Us",services:"Services",prices:"Price List",gallery:"Gallery",booking:"Book Now",contact:"Contact",
h1:"Look good. Feel renewed.",sub:"Hair, skin and spa care for men and women at Once Again Unisex Salon.",book:"Book an Appointment",explore:"Explore Services",
aboutP:"Once Again Unisex Salon offers hair, skin, nail and spa services for men and women. Call or message us to plan your visit.",
s1:"Haircut & Styling",d1:"Cuts, blow-dry and styling for men and women.",s2:"Hair Colour",d2:"Global colour, root touch-up and highlights.",s3:"Facial & Skin Care",d3:"Clean-ups, facials and skin treatments.",s4:"Hair Spa",d4:"Hair spa and treatments for scalp and hair.",s5:"Beard Styling",d5:"Beard trim, shave and moustache shaping.",s6:"Spa & Massage",d6:"Relaxing massages, scrubs and body therapies.",
cM:"Men’s Hair & Beard",cW:"Women’s Hair & Colour",cC:"Hair Spa, Texture & Styling",cF:"Facial & Skin",cX:"Waxing & Threading",cB:"Bleach & De-Tan",cN:"Nails",cS:"Massage & Spa",
pnote:"Prices follow the salon menu and may change. Please confirm at the salon.",inq:"On inquiry",
fName:"Full name",fPhone:"Phone number",fSvc:"Preferred service",fDate:"Preferred date",fTime:"Preferred time",fMsg:"Additional message",submit:"Send Request",choose:"Select a service",other:"Other",
eName:"Please enter your full name.",ePhone:"Enter a valid 10-digit mobile number.",eService:"Please choose a service.",eDate:"Choose today or a future date.",eTime:"Please choose a time.",eFix:"Please correct the highlighted fields.",
notConn:"Online booking is not connected yet, so your request has not been sent. Send these details on WhatsApp instead:",viaWA:"Send on WhatsApp",sent:"Request sent. The salon will contact you to confirm your appointment.",failed:"Could not send. Please call or WhatsApp us.",
call:"Call or WhatsApp",wa:"WhatsApp",dir:"Get Directions",addr:"Address",addrV:"Address to be added (see Google Maps)",hrs:"Opening hours",hrsV:"Opening hours to be added",follow:"Find us online",rights:"All rights reserved."
},
hi: {
home:"होम",about:"हमारे बारे में",services:"सेवाएँ",prices:"मूल्य सूची",gallery:"गैलरी",booking:"अभी बुक करें",contact:"संपर्क",
h1:"सुंदर दिखें, तरोताज़ा महसूस करें।",sub:"वन्स अगेन यूनिसेक्स सैलून में पुरुषों और महिलाओं के लिए हेयर, स्किन और स्पा केयर।",book:"अपॉइंटमेंट बुक करें",explore:"सेवाएँ देखें",
aboutP:"वन्स अगेन यूनिसेक्स सैलून पुरुषों और महिलाओं के लिए हेयर, स्किन, नेल और स्पा सेवाएँ देता है। अपनी विज़िट तय करने के लिए हमें कॉल या मैसेज करें।",
s1:"हेयरकट और स्टाइलिंग",d1:"पुरुषों और महिलाओं के लिए कट, ब्लो-ड्राई और स्टाइलिंग।",s2:"हेयर कलर",d2:"ग्लोबल कलर, रूट टच-अप और हाइलाइट्स।",s3:"फेशियल और स्किन केयर",d3:"क्लीन-अप, फेशियल और स्किन ट्रीटमेंट।",s4:"हेयर स्पा",d4:"बालों और स्कैल्प के लिए हेयर स्पा व ट्रीटमेंट।",s5:"बियर्ड स्टाइलिंग",d5:"बियर्ड ट्रिम, शेव और मूँछों की शेपिंग।",s6:"स्पा और मसाज",d6:"आरामदायक मसाज, स्क्रब और बॉडी थेरेपी।",
cM:"पुरुष हेयर और बियर्ड",cW:"महिला हेयर और कलर",cC:"हेयर स्पा, टेक्सचर और स्टाइलिंग",cF:"फेशियल और स्किन",cX:"वैक्सिंग और थ्रेडिंग",cB:"ब्लीच और डी-टैन",cN:"नाख़ून",cS:"मसाज और स्पा",
pnote:"कीमतें सैलून मेन्यू के अनुसार हैं और बदल सकती हैं। कृपया सैलून में पुष्टि करें।",inq:"पूछताछ पर",
fName:"पूरा नाम",fPhone:"फ़ोन नंबर",fSvc:"पसंदीदा सेवा",fDate:"पसंदीदा तारीख़",fTime:"पसंदीदा समय",fMsg:"अतिरिक्त संदेश",submit:"अनुरोध भेजें",choose:"सेवा चुनें",other:"अन्य",
eName:"कृपया अपना पूरा नाम लिखें।",ePhone:"सही 10 अंकों का मोबाइल नंबर लिखें।",eService:"कृपया सेवा चुनें।",eDate:"आज या आगे की तारीख़ चुनें।",eTime:"कृपया समय चुनें।",eFix:"कृपया चिह्नित फ़ील्ड सुधारें।",
notConn:"ऑनलाइन बुकिंग अभी जुड़ी नहीं है, इसलिए आपका अनुरोध भेजा नहीं गया है। कृपया यही जानकारी WhatsApp पर भेजें:",viaWA:"WhatsApp पर भेजें",sent:"अनुरोध भेज दिया गया। सैलून अपॉइंटमेंट की पुष्टि के लिए आपसे संपर्क करेगा।",failed:"भेजा नहीं जा सका। कृपया कॉल या WhatsApp करें।",
call:"कॉल या WhatsApp",wa:"WhatsApp",dir:"रास्ता देखें",addr:"पता",addrV:"पता जोड़ा जाएगा (Google Maps देखें)",hrs:"खुलने का समय",hrsV:"खुलने का समय जोड़ा जाएगा",follow:"हमें ऑनलाइन खोजें",rights:"सर्वाधिकार सुरक्षित।"
},
bn: {
home:"হোম",about:"আমাদের সম্পর্কে",services:"সেবাসমূহ",prices:"মূল্য তালিকা",gallery:"গ্যালারি",booking:"এখনই বুক করুন",contact:"যোগাযোগ",
h1:"সুন্দর দেখুন, সতেজ অনুভব করুন।",sub:"ওয়ান্স অ্যাগেইন ইউনিসেক্স সেলুনে পুরুষ ও মহিলাদের জন্য হেয়ার, স্কিন ও স্পা কেয়ার।",book:"অ্যাপয়েন্টমেন্ট বুক করুন",explore:"সেবা দেখুন",
aboutP:"ওয়ান্স অ্যাগেইন ইউনিসেক্স সেলুন পুরুষ ও মহিলাদের জন্য হেয়ার, স্কিন, নেইল ও স্পা সেবা দেয়। আপনার ভিজিট ঠিক করতে আমাদের কল বা মেসেজ করুন।",
s1:"হেয়ারকাট ও স্টাইলিং",d1:"পুরুষ ও মহিলাদের জন্য কাট, ব্লো-ড্রাই ও স্টাইলিং।",s2:"হেয়ার কালার",d2:"গ্লোবাল কালার, রুট টাচ-আপ ও হাইলাইট।",s3:"ফেশিয়াল ও স্কিন কেয়ার",d3:"ক্লিন-আপ, ফেশিয়াল ও স্কিন ট্রিটমেন্ট।",s4:"হেয়ার স্পা",d4:"চুল ও স্কাল্পের জন্য হেয়ার স্পা ও ট্রিটমেন্ট।",s5:"বিয়ার্ড স্টাইলিং",d5:"বিয়ার্ড ট্রিম, শেভ ও গোঁফের শেপিং।",s6:"স্পা ও ম্যাসাজ",d6:"আরামদায়ক ম্যাসাজ, স্ক্রাব ও বডি থেরাপি।",
cM:"পুরুষদের চুল ও দাড়ি",cW:"মহিলাদের চুল ও কালার",cC:"হেয়ার স্পা, টেক্সচার ও স্টাইলিং",cF:"ফেশিয়াল ও স্কিন",cX:"ওয়াক্সিং ও থ্রেডিং",cB:"ব্লিচ ও ডি-ট্যান",cN:"নখ",cS:"ম্যাসাজ ও স্পা",
pnote:"দাম সেলুনের মেনু অনুযায়ী এবং বদলাতে পারে। অনুগ্রহ করে সেলুনে নিশ্চিত করুন।",inq:"জিজ্ঞাসা করুন",
fName:"পুরো নাম",fPhone:"ফোন নম্বর",fSvc:"পছন্দের সেবা",fDate:"পছন্দের তারিখ",fTime:"পছন্দের সময়",fMsg:"অতিরিক্ত বার্তা",submit:"অনুরোধ পাঠান",choose:"সেবা বেছে নিন",other:"অন্যান্য",
eName:"অনুগ্রহ করে পুরো নাম লিখুন।",ePhone:"সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।",eService:"অনুগ্রহ করে সেবা বেছে নিন।",eDate:"আজ বা ভবিষ্যতের তারিখ বেছে নিন।",eTime:"অনুগ্রহ করে সময় বেছে নিন।",eFix:"চিহ্নিত ঘরগুলি ঠিক করুন।",
notConn:"অনলাইন বুকিং এখনও যুক্ত হয়নি, তাই আপনার অনুরোধ পাঠানো হয়নি। এই তথ্য WhatsApp-এ পাঠান:",viaWA:"WhatsApp-এ পাঠান",sent:"অনুরোধ পাঠানো হয়েছে। সেলুন অ্যাপয়েন্টমেন্ট নিশ্চিত করতে যোগাযোগ করবে।",failed:"পাঠানো যায়নি। অনুগ্রহ করে কল বা WhatsApp করুন।",
call:"কল বা WhatsApp",wa:"WhatsApp",dir:"দিকনির্দেশ",addr:"ঠিকানা",addrV:"ঠিকানা যোগ করা হবে (Google Maps দেখুন)",hrs:"খোলার সময়",hrsV:"খোলার সময় যোগ করা হবে",follow:"অনলাইনে আমাদের খুঁজুন",rights:"সর্বস্বত্ব সংরক্ষিত।"
}
};

/* Price list: "name|price" per line. "500+" = onwards, "inq" = on inquiry. Edit freely. */
const CATS = {
cM: `Hair Cut|350
Hair Wash|200
Shave|250
Beard Trim|300
Hair Styling|200
Moustache / Side Locs Trim|100
Top Hair Stylish (L’Oréal wash + blow-dry)|1000
Beard Colour|500
Global Colour|900
Global Colour (Ammonia Free)|1000
Highlights (Cap)|inq
Highlights (Foil)|inq`,
cW: `Hair Cut / Fringe|500
Hair Wash + Conditioner|500+
Hair Cut|1000/1200+
Top Hair Stylish (L’Oréal wash + blow-dry)|1500+
Root Touch Up|1800
Root Touch Up (Ammonia Free)|2000
Highlights – Crown|3000+
Highlights – Per Streak|350+
Global Colour|3500+`,
cC: `Hair Spa (Men/Women)|1000/1500+
Anti Dandruff Treatment|1000/1500+
Luxury Hair Spa|3000+
Straightening / Rebonding|5000+
Nano Plastia|6000+
Botox Treatment|6000+
Blow Dry|500+
Ironing|1000+
Tongs|1200+`,
cF: `Hydravital Cleanup|1300
Puravittal Cleanup|1300
O3 Cleanup|1500
Ultimo Oyster Pearl Skin Whitening Facial|4500
Ultimo 24 Karat Leaves Gold Facial|5000
Japanese Facial – Sensi-ace|4800
Japanese Facial – Upendica|5200
Japanese Facial – Blanch|6400
Gold Sheen Facial|2500
4 Layers Advance Anti-aging Facial|3000
4 Layers Advanced Skin Whitening Facial|2800
O3 Whitening Facial|3000
O3 Sea Weed Facial|3700+
Preservita Papaya Facial|3500
Preservita Bearberry Facial|3200`,
cX: `Threading – Forehead|70
Threading – Eyebrows|150
Threading – Upper Lip|70
Threading – Lower Lip|70
Threading – Sides & Jawline|150
Threading – Chin|70
Threading – Full Face|550
Waxing – Forehead|200
Waxing – Upper Lip|150
Waxing – Sides & Jawline|250
Waxing – Chin|200
Waxing – Full Face|700
Waxing – Half Arms|500
Waxing – Full Arms|600
Waxing – Underarm|300
Waxing – Half Front / Back|800
Waxing – Full Front / Back|1000
Waxing – Stomach|500
Waxing – Bikini Line|300
Waxing – Half Legs|600
Waxing – Full Legs|800
Waxing – Full Body|4500
Waxing – Bikini|1500
Gent’s Waxing – Underarms|450
Gent’s Waxing – Full Arms|800/1000
Gent’s Waxing – Full Legs|1200/1400
Gent’s Waxing – Front|1300/1500
Gent’s Waxing – Back|1300/1500
Gent’s Waxing – Full Body|5500`,
cB: `Bleach – Full Face|600
Bleach – Half Arms|600
Bleach – Full Arms|700
Bleach – Back|800
Bleach – Half Legs|700
Bleach – Full Legs|800
Bleach – Full Body|3500
Bleach – Half Back / Front|600/600
Bleach – Full Back / Front|700/700
De-Tan – O3 Face & Neck|1000
De-Tan – Half Arms|700
De-Tan – Full Arms|800
De-Tan – Half Leg|800
De-Tan – Full Leg|1000
De-Tan – Full Body|4000`,
cN: `Nail Cut & File|150
Regular Polish|200
Nail Cut, File & Regular Polish|400
Manicure – Classic|700
Pedicure – Classic|800
Manicure – Crystal Spa|1100
Pedicure – Crystal Spa|1100
Manicure – Strawberry|1800
Pedicure – Strawberry|1800
Alga Manicure|2000
Alga Pedicure|2000
Gel Nail Paint|1000
Gel Removal|500
Extension Removal|700
Nail Art Per Finger|200
Nail Extension|2000
Ombre|1500
Chrome|1500
French Tips|1400
Cat Eye|1500`,
cS: `Face Massage (20 min)|500
Hand Massage (20 min)|500
Head Massage M/F (30 min)|700/800
Head Massage with Moroccan Oil (30 min)|1000
Foot Reflexology (30/45/60 min)|900/1200/1800
Head / Neck / Shoulder (45 min)|1600
Back Soother Massage (40 min)|1700
Aroma Massage (60/90/120 min)|2400/3600/4800
Swedish Massage (60/90/120 min)|2400/3600/4800
Balinese Massage (60/90/120 min)|2600/3900/5200
Deep Tissue Massage (60/90/120 min)|2800/4200/5600
Thai Massage (60 min)|3500
Candle Oil Massage (60 min)|3500
Lava Hot Stone Massage (90 min)|4000
Once Again Gold Body Package (120 min)|6000
Body Scrub – Coconut Lime (45 min)|1900
Body Scrub – Chocolate (45 min)|1800
Body Scrub – Mango Honey (45 min)|1700
Body Scrub – Papaya Honey (45 min)|2000
Body Scrub – Rice & Oats (45 min)|3000`
};

const GALLERY = [
  ["hero.jpg","Styling stations with large black mirrors and wash basins"],
  ["storefront.jpg","Once Again Unisex Salon shopfront"],
  ["reception.jpg","Reception desk with L’Oréal Professionnel display"],
  ["spa-forest.jpg","Spa treatment room with forest wall mural"],
  ["spa-waterfall.jpg","Spa treatment room with waterfall wall mural"],
  ["treatment-room.jpg","Treatment bed with towel flowers"],
  ["foot-lounge.jpg","Relaxation lounge with black reclining chairs"],
  ["pedicure.jpg","Pedicure station with wash basins"]
];
/* ===== END EDIT ===== */

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let lang = "en", cat = "cM";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
if (!T[lang]) lang = "en";
const t = k => T[lang][k] || T.en[k] || k;
const price = v => /^\d/.test(v) ? "₹" + v : t(v);

function renderPrices() {
  $("#tabs").innerHTML = Object.keys(CATS).map(c => `<button type="button" data-c="${c}" aria-pressed="${c === cat}">${t(c)}</button>`).join("");
  $("#plist").innerHTML = CATS[cat].trim().split("\n").map(l => { const [n, p] = l.split("|"); return `<li><span>${n}</span><b>${price(p)}</b></li>`; }).join("");
}
function renderSelect() {
  const s = $("#service"), v = s.value;
  s.innerHTML = `<option value="">${t("choose")}</option>` + Object.keys(CATS).map(c => `<option value="${T.en[c]}">${t(c)}</option>`).join("") + `<option value="Other">${t("other")}</option>`;
  s.value = v;
}
function setLang(l) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (e) {}
  document.documentElement.lang = l;
  $("#lang").value = l;
  $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $$(".err").forEach(e => e.textContent = "");
  $("#status").textContent = "";
  renderPrices(); renderSelect();
}

$("#lang").onchange = e => setLang(e.target.value);
$("#tabs").onclick = e => { const b = e.target.closest("button"); if (b) { cat = b.dataset.c; renderPrices(); } };
$$("[data-link]").forEach(a => a.href = CONFIG.LINKS[a.dataset.link]);
$("#yr").textContent = new Date().getFullYear();

/* Menu */
const nav = $("#nav"), burger = $("#burger");
burger.onclick = () => { const on = nav.classList.toggle("on"); burger.setAttribute("aria-expanded", on); };
nav.onclick = e => { if (e.target.tagName === "A") { nav.classList.remove("on"); burger.setAttribute("aria-expanded", false); } };

/* Gallery + lightbox */
$("#gal").innerHTML = GALLERY.map(([f, a], i) => `<button type="button" data-i="${i}" aria-label="${a}"><img src="images/${f}" alt="${a}" loading="lazy"></button>`).join("");
const lb = $("#lb"), closeLb = () => lb.classList.remove("on");
$("#gal").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  const [f, a] = GALLERY[b.dataset.i];
  $("#lbi").src = "images/" + f; $("#lbi").alt = a;
  lb.classList.add("on"); $("#lbx").focus();
};
$("#lbx").onclick = closeLb;
lb.onclick = e => { if (e.target === lb) closeLb(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

/* Booking form */
const form = $("#bf"), status = $("#status");
const today = new Date().toLocaleDateString("en-CA");
$("#date").min = today;
const setErr = (id, key) => { $("#e-" + id).textContent = key ? t(key) : ""; $("#" + id).setAttribute("aria-invalid", !!key); return !key; };

form.addEventListener("submit", async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const ph = (d.phone || "").replace(/[\s-]/g, "");
  const ok = [
    setErr("name", d.name.trim().length >= 2 ? "" : "eName"),
    setErr("phone", /^(\+?91)?[6-9]\d{9}$/.test(ph) ? "" : "ePhone"),
    setErr("service", d.service ? "" : "eService"),
    setErr("date", d.date && d.date >= today ? "" : "eDate"),
    setErr("time", d.time ? "" : "eTime")
  ].every(Boolean);
  if (!ok) { status.textContent = t("eFix"); return; }
  if (!CONFIG.FORM_ENDPOINT) {
    const msg = `Hello, I would like to request an appointment.\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nDate: ${d.date} ${d.time}\n${d.message || ""}`;
    status.innerHTML = `${t("notConn")}<a class="btn" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.WA}?text=${encodeURIComponent(msg)}">${t("viaWA")}</a>`;
    return;
  }
  try {
    const r = await fetch(CONFIG.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
    if (!r.ok) throw new Error(r.status);
    status.textContent = t("sent"); form.reset();
  } catch (err) { status.textContent = t("failed"); }
});

setLang(lang);
