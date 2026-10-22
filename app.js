/* ==========================================================================
   دستچین — v0.1 demo
   Persian-first (RTL). All chrome strings live in T so an `en` dictionary can
   be dropped in later; every layout rule is logical-property based.
   ========================================================================== */

/* ----------------------------- icons ------------------------------------ */
const I = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M15 5l-7 7 7 7"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0112 8a3.9 3.9 0 017 2.5C19 15.4 12 20 12 20z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>',
  hanger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 6a3 3 0 116 0c0 2-3 2-3 4v1"/><path d="M12 11 3 18v2h18v-2l-9-7z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/></svg>',
};

/* ----------------------------- helpers ---------------------------------- */
const faN = new Intl.NumberFormat("fa-IR");
const fa = (n) => faN.format(n);
const money = (n) => `${fa(n)} <span class="unit">تومان</span>`;
const $ = (s) => document.querySelector(s);

/* ----------------------------- brands ----------------------------------- */
const BRANDS = {
  noor: { id: "noor", name: "آتلیه‌ نور", latin: "ATELIER NOOR", city: "تهران", since: "۱۳۹۶", cat: "رویه و کت", img: "e6.jpg", cover: "e7.jpg", story: "دوخت سفارشی و سری‌های کوچک؛ هر کت در کارگاه خودمان و در تیراژ محدود تولید می‌شود." },
  rag:  { id: "rag",  name: "رَگ", latin: "RAG", city: "تهران", since: "۱۴۰۰", cat: "استریت‌ویر", img: "e8.jpg", cover: "e2.jpg", story: "برند مستقل استریت‌ویر با تمرکز بر پارچه‌های کارگاهی و برش اورسایز." },
  k27:  { id: "k27",  name: "کارگاه ۲۷", latin: "KARGAH 27", city: "تهران", since: "۱۳۹۸", cat: "جین و کار", img: "p07.jpg", cover: "p11.jpg", story: "جین و لباس کار؛ رنگ‌ریزی و دوخت داخل ایران، بدون شستشوی شیمیایی." },
  mim:  { id: "mim",  name: "مِیم", latin: "MIM", city: "تهران", since: "۱۴۰۱", cat: "ساده‌های روزمره", img: "e9.jpg", cover: "p10.jpg", story: "پایه‌های پوشاک با پارچهٔ سنگین و فرم ساده؛ بدون طرح و لوگو." },
  segane:{ id: "segane", name: "سه‌گانه", latin: "SEGANE", city: "کرج", since: "۱۳۹۹", cat: "بافت", img: "p06.jpg", cover: "p05.jpg", story: "بافت‌های دستگاهی با پشم ایرانی؛ سه رنگ در هر فصل، نه بیشتر." },
  didar: { id: "didar", name: "دیدار", latin: "DIDAR", city: "تهران", since: "۱۴۰۰", cat: "چرم و اکسسوری", img: "d2.jpg", cover: "p15.jpg", story: "اکسسوری‌های کوچک، ساخته‌شده در کارگاه خانگی با نقرهٔ بازیافتی." },
  pust:  { id: "pust", name: "پوست", latin: "PUST", city: "تهران", since: "۱۳۹۵", cat: "کیف و کفش", img: "p13.jpg", cover: "p12.jpg", story: "کفش چرم با زیرهٔ تعویض‌پذیر؛ تعمیر در کارگاه خودمان انجام می‌شود." },
  aftab: { id: "aftab", name: "خانهٔ آفتاب", latin: "AFTAB", city: "اصفهان", since: "۱۳۹۷", cat: "پیراهن و کتان", img: "p03.jpg", cover: "e9.jpg", story: "پیراهن و کتان؛ پارچه از یزد، دوخت در اصفهان." },
};

/* ----------------------------- catalogue -------------------------------- */
const P = [
  { id: "p01", brand: "noor", name: "پالتو پشمی بلند", cat: "رویه", price: 4250000,
    img: "p01.jpg", img2: "e7.jpg", color: "خاکستری دودی", fabric: "پشم ۸۰٪، کشمیر ۲۰٪", isNew: true,
    sizes: [["S",1],["M",1],["L",0],["XL",2]],
    meas: [["قد", "۱۱۸"],["دور سینه", "۱۰۸"],["دور باسن", "۱۱۲"],["قد آستین", "۶۲"]],
    desc: "برش راسته با دو جیب مورب و آستر ویسکوز. یقهٔ انگلیسی، دکمهٔ شاخ طبیعی. مناسب دمای ۵ تا ۱۵ درجه." },

  { id: "p02", brand: "noor", name: "ترنچ کتان", cat: "رویه", price: 3450000,
    img: "p02.jpg", img2: "e7.jpg", color: "شنی", fabric: "کتان ۱۰۰٪ با پوشش ضد آب سبک", isNew: true,
    sizes: [["S",1],["M",2],["L",2],["XL",0]],
    meas: [["قد", "۱۰۶"],["دور سینه", "۱۱۰"],["دور باسن", "۱۱۶"],["قد آستین", "۵۸"]],
    desc: "ترنچ دو ردیف دکمه با کمربند پارچه‌ای. چاک پشت برای راحتی حرکت." },

  { id: "p03", brand: "aftab", name: "پیراهن کتان آستری", cat: "بالاتنه", price: 1280000,
    img: "p03.jpg", img2: "p04.jpg", color: "سفید شکسته", fabric: "کتان ۱۰۰٪", isNew: true,
    sizes: [["S",2],["M",3],["L",1],["XL",0]],
    meas: [["قد", "۷۲"],["دور سینه", "۱۰۴"],["قد آستین", "۵۹"],["عرض سرشانه", "۴۲"]],
    desc: "پیراهن یقه‌گرد با آستین بلند و دکمهٔ پشت. کتان شسته‌شده، بدون آستر." },

  { id: "p04", brand: "aftab", name: "پیراهن سفید یقه‌بند", cat: "بالاتنه", price: 1150000,
    img: "p04.jpg", img2: "p03.jpg", color: "سفید", fabric: "پنبه ۹۵٪، الاستان ۵٪",
    sizes: [["S",1],["M",2],["L",2],["XL",1]],
    meas: [["قد", "۷۴"],["دور سینه", "۱۰۰"],["قد آستین", "۶۰"],["عرض سرشانه", "۴۰"]],
    desc: "برش راسته با یقهٔ بندی و مچ دکمه‌دار. پارچهٔ مات و نسبتاً ضخیم." },

  { id: "p05", brand: "segane", name: "بافت یقه‌گرد ضخیم", cat: "بافت", price: 1950000,
    img: "p05.jpg", img2: "p06.jpg", color: "شیری", fabric: "پشم مرینوس ۷۰٪، اکریلیک ۳۰٪",
    sizes: [["S",0],["M",1],["L",0],["XL",0]],
    meas: [["قد", "۶۶"],["دور سینه", "۱۱۴"],["قد آستین", "۵۶"],["عرض سرشانه", "۵۰"]],
    desc: "بافت درشت با یقهٔ کشباف. فرم اورسایز، آستین رگلان." },

  { id: "p06", brand: "segane", name: "بافت راه‌راه پشمی", cat: "بافت", price: 1720000,
    img: "p06.jpg", img2: "p05.jpg", color: "کرم و قهوه‌ای", fabric: "پشم ۶۰٪، نایلون ۴۰٪",
    sizes: [["S",2],["M",2],["L",1],["XL",1]],
    meas: [["قد", "۶۴"],["دور سینه", "۱۱۶"],["قد آستین", "۵۴"],["عرض سرشانه", "۵۲"]],
    desc: "راه‌راه افقی با رنگ‌بندی محدود فصل. کشباف کمر و مچ." },

  { id: "p07", brand: "k27", name: "کاپشن جین", cat: "رویه", price: 2380000,
    img: "p07.jpg", img2: "p11.jpg", color: "آبی روشن", fabric: "جین ۱۲ اونس، ۱۰۰٪ پنبه",
    sizes: [["S",2],["M",1],["L",1],["XL",0]],
    meas: [["قد", "۶۶"],["دور سینه", "۱۱۸"],["قد آستین", "۶۲"],["عرض سرشانه", "۴۸"]],
    desc: "جین شسته با دو جیب سینه و دکمهٔ فلزی. فرم باکس، بدون آستر." },

  { id: "p08", brand: "noor", name: "کت‌وشلوار دوتیکه", cat: "رویه", price: 5600000,
    img: "p08.jpg", img2: "e2.jpg", color: "سرمه‌ای", fabric: "پشم ۱۰۰٪ با آستر ویسکوز",
    sizes: [["S",1],["M",1],["L",1],["XL",1]],
    meas: [["قد کت", "۷۸"],["دور سینه", "۱۰۶"],["قد شلوار", "۱۰۴"],["دور کمر", "۸۲"]],
    desc: "کت دو دکمه با یقهٔ نوک‌تیز و شلوار راسته. دوخت سفارشی، تحویل ۱۰ روز کاری." },

  { id: "p09", brand: "mim", name: "کت تک اورسایز", cat: "رویه", price: 3100000,
    img: "p09.jpg", img2: "e2.jpg", color: "خاکستری", fabric: "پشم ۷۰٪، پلی‌استر ۳۰٪",
    sizes: [["S",0],["M",0],["L",0],["XL",0]],
    meas: [["قد", "۸۰"],["دور سینه", "۱۲۰"],["قد آستین", "۶۰"],["عرض سرشانه", "۵۰"]],
    desc: "کت تک با فرم اورسایز و یک دکمه. آستر کامل، جیب داخلی." },

  { id: "p10", brand: "mim", name: "تی‌شرت پنبهٔ سنگین", cat: "بالاتنه", price: 680000,
    img: "p10.jpg", img2: "p03.jpg", color: "سفید", fabric: "پنبهٔ ۲۴۰ گرم",
    sizes: [["S",4],["M",6],["L",3],["XL",2]],
    meas: [["قد", "۷۰"],["دور سینه", "۱۰۸"],["قد آستین", "۲۲"],["عرض سرشانه", "۴۶"]],
    desc: "تی‌شرت با یقهٔ کشباف و دوخت دوسوزنه. پارچهٔ سنگین، فرم ثابت پس از شست‌وشو." },

  { id: "p11", brand: "k27", name: "شلوار جین راسته", cat: "پایین‌تنه", price: 1890000,
    img: "p11.jpg", img2: "p07.jpg", color: "سرمه‌ای تیره", fabric: "جین ۱۳ اونس",
    sizes: [["S",2],["M",2],["L",1],["XL",1]],
    meas: [["قد", "۱۰۶"],["دور کمر", "۸۰"],["دور باسن", "۱۰۰"],["دم پا", "۱۹"]],
    desc: "جین راسته با کمر بلند و پنج جیب. بدون کشسانی، رنگ ثابت." },

  { id: "p12", brand: "pust", name: "بوت چرم مشکی", cat: "کفش", price: 3200000,
    img: "p12.jpg", img2: "d1.jpg", color: "مشکی", fabric: "چرم طبیعی، زیرهٔ لاستیک",
    sizes: [["۴۰",1],["۴۱",2],["۴۲",1],["۴۳",0],["۴۴",1]],
    meas: [["جنس", "چرم گاوی"],["پاشنه", "۳ سانتی‌متر"],["قد ساق", "۱۲ سانتی‌متر"],["زیره", "تعویض‌پذیر"]],
    desc: "بوت چرم با بند و زیپ کنار. آستر چرم، زیرهٔ ضدآب. قابل تعمیر در کارگاه." },

  { id: "p13", brand: "pust", name: "چلسی جیر قهوه‌ای", cat: "کفش", price: 2750000,
    img: "p13.jpg", img2: "p12.jpg", color: "قهوه‌ای", fabric: "جیر طبیعی",
    sizes: [["۴۰",1],["۴۱",1],["۴۲",2],["۴۳",1],["۴۴",0]],
    meas: [["جنس", "جیر"],["پاشنه", "۳.۵ سانتی‌متر"],["قد ساق", "۱۰ سانتی‌متر"],["زیره", "تعویض‌پذیر"]],
    desc: "چلسی بدون بند با کش کنار. مناسب استفادهٔ روزمره." },

  { id: "p14", brand: "pust", name: "کفش چرم بنددار", cat: "کفش", price: 2400000,
    img: "p14.jpg", img2: "p13.jpg", color: "عسلی", fabric: "چرم طبیعی",
    sizes: [["۴۰",1],["۴۱",1],["۴۲",1],["۴۳",1],["۴۴",1]],
    meas: [["جنس", "چرم"],["پاشنه", "۲ سانتی‌متر"],["قد ساق", "۸ سانتی‌متر"],["زیره", "چسبی"]],
    desc: "کفش بنددار با رویهٔ چرم و آستر پارچه‌ای. فرم جمع و سبک." },

  { id: "p15", brand: "didar", name: "گردن‌آویز سنگ", cat: "اکسسوری", price: 940000,
    img: "p15.jpg", img2: "d2.jpg", color: "نقره و سنگ", fabric: "نقرهٔ ۹۲۵، سنگ طبیعی",
    sizes: [["یک اندازه", 3]],
    meas: [["طول زنجیر", "۴۵ سانتی‌متر"],["جنس", "نقرهٔ ۹۲۵"],["وزن", "۶ گرم"],["ساخت", "دست‌ساز"]],
    desc: "گردن‌آویز با زنجیر نازک و سنگ طبیعی. هر قطعه به‌دلیل سنگ، کمی متفاوت است." },

  { id: "p16", brand: "didar", name: "انگشتر نقره", cat: "اکسسوری", price: 620000,
    img: "p16.jpg", img2: "d2.jpg", color: "نقره", fabric: "نقرهٔ ۹۲۵",
    sizes: [["۵۴",2],["۵۶",2],["۵۸",1]],
    meas: [["جنس", "نقرهٔ ۹۲۵"],["عرض", "۴ میلی‌متر"],["وزن", "۳ گرم"],["ساخت", "دست‌ساز"]],
    desc: "انگشتر ساده با سطح مات. قابل سفارش در سایز دیگر با ۷ روز کاری." },

  { id: "p17", brand: "mim", name: "بلوز آستین حلقه‌ای", cat: "بالاتنه", price: 1380000,
    img: "p17.jpg", img2: "p03.jpg", color: "شیری", fabric: "ویسکوز ۱۰۰٪",
    sizes: [["S",2],["M",1],["L",1],["XL",0]],
    meas: [["قد", "۶۸"],["دور سینه", "۱۰۲"],["قد آستین", "۲۴"],["عرض سرشانه", "۳۸"]],
    desc: "بلوز با آستین حلقه‌ای و یقهٔ گرد. پارچهٔ ریزش‌دار." },

  { id: "p18", brand: "rag", name: "کت تک کتان", cat: "رویه", price: 2950000,
    img: "p18.jpg", img2: "e2.jpg", color: "کرم", fabric: "کتان ۱۰۰٪",
    sizes: [["S",1],["M",2],["L",1],["XL",1]],
    meas: [["قد", "۷۶"],["دور سینه", "۱۱۴"],["قد آستین", "۵۸"],["عرض سرشانه", "۴۶"]],
    desc: "کت تک بدون آستر با جیب‌های بیرونی. مناسب فصل گرم." },
];

const P_BY_ID = Object.fromEntries(P.map((p) => [p.id, p]));
const brandOf = (p) => BRANDS[p.brand];
const CATS = ["همه", "رویه", "بالاتنه", "بافت", "پایین‌تنه", "کفش", "اکسسوری"];
const totalStock = (p) => p.sizes.reduce((a, [, n]) => a + n, 0);
const escapeHtml = (v) => String(v).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
const COLORS = ["سفید و شیری", "مشکی", "خاکستری", "قهوه‌ای و کرم", "آبی", "نقره‌ای"];
const colorGroup = (v) => /سفید|شیری/.test(v) ? COLORS[0] : /مشکی/.test(v) ? COLORS[1] : /خاکستری/.test(v) ? COLORS[2] : /قهوه‌ای|کرم|شنی|عسلی/.test(v) ? COLORS[3] : /آبی|سرمه‌ای/.test(v) ? COLORS[4] : COLORS[5];
const AUDIENCES = { women: "زنانه", men: "مردانه", kids: "بچگانه" };
const PRODUCT_AUDIENCE = {p01:"women",p02:"women",p03:"women",p04:"women",p05:"women",p06:"women",p07:"men",p08:"men",p09:"women",p10:"men",p11:"men",p12:"men",p13:"men",p14:"men",p15:"women",p16:"women",p17:"women",p18:"men"};
const storageKey = "dastchin-demo-v1";
function loadLocal() { try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { return {}; } }
const local = loadLocal();
const validIds = (ids) => Array.isArray(ids) ? ids.filter((id) => P_BY_ID[id]).slice(0, 50) : [];
const prefsDefault = { audiences: [], size: "", shoeSize: "", colors: [], maxPrice: "" };
const prefs = { ...prefsDefault, ...(local.prefs || {}) };
if (!Array.isArray(prefs.audiences)) prefs.audiences = [];
if (!Array.isArray(prefs.colors)) prefs.colors = [];

/* ----------------------------- state ------------------------------------ */
const state = {
  screen: "discover",
  params: {},
  size: null,
  saved: new Set(["p03", "p09", "p12"]),
  followed: new Set(["noor"]),
  cart: null,          // { id, size, qty }
  order: null,
  query: "",
  filterCat: "همه",
  filterSize: null,
  filterBrand: "",
  filterColor: "",
  minPrice: "",
  maxPrice: "",
  brandAudience: "women",
  recentlyViewed: validIds(local.recentlyViewed),
  prefs,
  history: [],
};
function persistLocal() { try { localStorage.setItem(storageKey, JSON.stringify({ recentlyViewed: state.recentlyViewed, prefs: state.prefs })); } catch {} }
function resetSearchFilters() {
  state.filterCat = "همه"; state.filterSize = null; state.filterBrand = ""; state.filterColor = "";
  state.minPrice = ""; state.maxPrice = ""; state.query = "";
}
function recordView(id) {
  if (!P_BY_ID[id]) return;
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((x) => x !== id)].slice(0, 50);
  persistLocal();
}
function recommended(limit = 4) {
  const viewed = state.recentlyViewed.map((id) => P_BY_ID[id]).filter(Boolean);
  const seenBrands = new Set(viewed.map((p) => p.brand));
  const seenCats = new Set(viewed.map((p) => p.cat));
  const colors = state.prefs.colors;
  const audiences = state.prefs.audiences;
  return P.filter((p) => totalStock(p) > 0 && !state.recentlyViewed.includes(p.id) && (!audiences.length || audiences.includes(PRODUCT_AUDIENCE[p.id])))
    .map((p) => ({p, score: (seenBrands.has(p.brand) ? 5 : 0) + (seenCats.has(p.cat) ? 3 : 0) + (state.followed.has(p.brand) ? 2 : 0) + (state.saved.has(p.id) ? 2 : 0) + (audiences.includes(PRODUCT_AUDIENCE[p.id]) ? 3 : 0) + (colors.includes(colorGroup(p.color)) ? 2 : 0) + (state.prefs.size && p.sizes.some(([s,n]) => s === state.prefs.size && n > 0) ? 2 : 0) + (state.prefs.shoeSize && p.sizes.some(([s,n]) => s === state.prefs.shoeSize && n > 0) ? 2 : 0) + (state.prefs.maxPrice && p.price <= Number(state.prefs.maxPrice) ? 1 : 0)}))
    .sort((a,b) => b.score - a.score || a.p.id.localeCompare(b.p.id)).map(({p}) => p).slice(0, limit);
}

/* ----------------------------- chrome ----------------------------------- */
const TABS = [
  { id: "discover", label: "کشف", icon: "grid" },
  { id: "search", label: "جست‌وجو", icon: "search" },
  { id: "saved", label: "ذخیره", icon: "heart" },
  { id: "brands", label: "برندها", icon: "hanger" },
  { id: "account", label: "حساب", icon: "user" },
];
const DEEP = ["product", "brand", "allBrands", "forYou", "cart", "checkout", "order", "size", "recent", "preferences", "later"];

function renderChrome() {
  $("#cartBadge").textContent = fa(state.cart ? state.cart.qty : 0);
  $("#cartBadge").hidden = !state.cart;

  const deep = DEEP.includes(state.screen);
  $("#startBtn").innerHTML = deep ? I.back : I.menu;
  $("#startBtn").dataset.act = deep ? "back" : "index";
  $("#startBtn").setAttribute("aria-label", deep ? "بازگشت" : "منو");

  $("#tabbar").innerHTML = TABS.map((t) => {
    const on = state.screen === t.id ||
      (t.id === "discover" && ["product", "later"].includes(state.screen)) ||
      (t.id === "brands" && ["brand", "allBrands"].includes(state.screen));
    return `<button class="tab ${on ? "on" : ""}" data-act="go" data-screen="${t.id}">
      ${I[t.icon]}<span>${t.label}</span></button>`;
  }).join("");
}

/* ----------------------------- shared bits ------------------------------- */
const LETTER_SIZES = ["S", "M", "L", "XL"];
const isLetterSized = (p) => p.sizes.some(([s]) => LETTER_SIZES.includes(s));

function sizeStrip(p) {
  if (p.cat === "اکسسوری") {
    const n = totalStock(p);
    return `<div class="sizes">${n > 0 ? `موجود` : `<span class="no-mine">ناموجود</span>`}</div>`;
  }
  const lettered = isLetterSized(p);
  const dots = p.sizes.map(([s, n]) => {
    const mine = lettered && state.size === s;
    const cls = n > 0 ? (mine ? "mk" : "") : "out";
    return `<b class="${cls}">${s}</b>`;
  }).join("");
  let tail = "";
  if (lettered && state.size) {
    const hit = p.sizes.find(([s]) => s === state.size);
    if (!hit || hit[1] === 0) {
      tail = `<span class="no-mine" style="margin-inline-start:auto">سایز شما نیست</span>`;
    }
  }
  return `<div class="sizes">${dots}${tail}</div>`;
}

function card(p) {
  const out = totalStock(p) === 0;
  const b = brandOf(p);
  return `<article class="card" data-act="product" data-id="${p.id}">
    <div class="ph">
      <img src="assets/img/${p.img}" alt="" loading="lazy">
      ${out ? `<span class="flag out">ناموجود</span>` : p.isNew ? `<span class="flag">تازه</span>` : ""}
    </div>
    <div class="meta">
      <div class="brandline"><span>${b.name}</span><span>${p.cat}</span></div>
      <div class="nm">${p.name}</div>
      <div class="price">${money(p.price)}</div>
      ${sizeStrip(p)}
    </div>
  </article>`;
}

const grid = (list) => `<div class="grid">${list.map(card).join("")}</div>`;

function pickCard(p) {
  const b = brandOf(p);
  const saved = state.saved.has(p.id);
  return `<article class="pick-card">
    <div class="pick-visual"><button class="pick-photo" data-act="product" data-id="${p.id}" aria-label="دیدن ${p.name}"><img src="assets/img/${p.img}" alt="" loading="lazy"></button>
      <button class="pick-save" data-act="save" data-id="${p.id}" aria-label="${saved ? "حذف از ذخیره‌ها" : "ذخیرهٔ محصول"}">${saved ? "♥" : "♡"}</button></div>
    <button class="pick-info" data-act="product" data-id="${p.id}"><span class="pick-brand">${b.name}</span><strong>${p.name}</strong><span class="pick-price">${money(p.price)}</span><small>${p.isNew ? "تازه رسیده" : p.cat} · ${p.color}</small></button>
  </article>`;
}

const trendEdits = [
  { title: "بهترین‌های چرم", sub: "کفش و اکسسوری", img: "p13.jpg", cat: "کفش" },
  { title: "بافت‌های فصل", sub: "لایه‌های گرم پاییز", img: "p05.jpg", cat: "بافت" },
  { title: "رویه‌های تازه", sub: "برای روزهای خنک", img: "e4.jpg", cat: "رویه" },
  { title: "جزئیات کوچک", sub: "اکسسوری‌های منتخب", img: "p15.jpg", cat: "اکسسوری" },
];

/* ----------------------------- screens ---------------------------------- */
function sDiscover() {
  const fresh = P.filter((p) => p.isNew && totalStock(p) > 0);
  const seasonal = ["p01", "p05", "p06", "p12"].map((id) => P_BY_ID[id]);
  const picks = recommended();
  const hasPrefs = state.prefs.audiences.length || state.prefs.colors.length || state.prefs.size || state.prefs.shoeSize || state.prefs.maxPrice;
  const prompt = state.size
    ? ""
    : `<div class="prompt slim">
        <div class="txt"><strong>سایزت را بگو</strong> — فقط موجودی‌های سایز خودت را ببین.</div>
        <button data-act="go" data-screen="size">انتخاب</button>
      </div>`;

  return `
    <section class="hero">
      <img src="assets/img/e3.jpg" alt="">
      <div class="scrim"></div>
      <div class="hero-copy">
        <div class="k"><span>ادیت شمارهٔ ۰۱</span><span>۱۸ قطعه</span></div>
        <h1>سیاه، خاکستری،<br>و یک لکهٔ نور</h1>
        <p>انتخابی از برندهای مستقل ایرانی برای پاییز — همه با موجودی واقعی و ارسال مشخص.</p>
        <button class="cta" data-act="go" data-screen="search">دیدن ادیت <span class="arw" style="font-family:var(--serif)">→</span></button>
      </div>
    </section>

    ${prompt}

    <div class="chips">
      ${CATS.map((c) => `<button class="chip ${state.filterCat === c ? "on" : ""}" data-act="cat" data-cat="${c}">${c}</button>`).join("")}
    </div>

    <section class="home-feature personal-feature">
      <div class="feature-intro"><h2>انتخاب شده برای تو</h2><p>${state.recentlyViewed.length || hasPrefs ? "بر اساس بازدیدها و سلیقهٔ خریدت" : "اولین ادیت تو؛ با دیدن محصولات شخصی‌تر می‌شود"}</p></div>
      ${picks.length ? `<div class="pick-rail" aria-label="محصولات انتخاب شده برای تو">${picks.map(pickCard).join("")}</div>
        <button class="outline-more" data-act="go" data-screen="forYou">نمایش بیشتر</button>` : `<div class="empty"><div class="t">هنوز انتخابی برای این سلیقه نداریم</div><div class="s">مجموعهٔ دیگری را در سلیقهٔ خریدت انتخاب کن.</div></div>`}
    </section>

    <section class="home-feature trend-feature">
      <div class="feature-intro"><h2>ترندهای این روزها</h2><p>ادیت‌های منتخب دست‌چین برای کشف چیزهای تازه</p></div>
      <div class="trend-rail" id="trendRail" aria-label="ادیت‌های پرطرفدار">${trendEdits.map((edit) => `<button class="trend-tile" data-act="trend" data-cat="${edit.cat}"><img src="assets/img/${edit.img}" alt="" loading="lazy"><strong>${edit.title}</strong><span>${edit.sub}</span></button>`).join("")}</div>
      <div class="trend-dots" aria-label="اسلایدهای ادیت">${trendEdits.map((_, i) => `<button class="${i === 0 ? "on" : ""}" data-act="trend-slide" data-index="${i}" aria-label="نمایش ادیت ${fa(i + 1)}" aria-current="${i === 0 ? "true" : "false"}"></button>`).join("")}</div>
    </section>

    <div class="section-head"><h2 class="section-h">تازه رسیده‌ها</h2><button class="more" data-act="go" data-screen="search">دیدن همه <span class="arw">→</span></button></div>
    ${grid(fresh)}

    <div class="section-head"><h2 class="section-h">منتخب فصل پاییز</h2><span class="kicker">لایه‌های گرم، رنگ‌های آرام</span></div>
    ${grid(seasonal)}

    <section class="band">
      <img src="assets/img/e2.jpg" alt="">
      <div class="scrim2"></div>
      <div class="cap">دوخت سفارشی، تیراژ محدود
        <small>آتلیهٔ نور — تهران</small></div>
    </section>

    <div class="section-head">
      <h2 class="section-h">برندها</h2>
      <button class="more" data-act="go" data-screen="brands">دیدن برندها <span class="arw">→</span></button>
    </div>
    <div class="rail">
      ${Object.values(BRANDS).map((b) => `<button class="brandchip" data-act="brand" data-id="${b.id}">
        <div class="ph"><img src="assets/img/${b.cover}" alt="" loading="lazy"></div>
        <div class="nm">${b.name}</div>
        <div class="ct">${b.cat}</div>
      </button>`).join("")}
    </div>
    <div style="height:16px"></div>
  `;
}

function sForYou() {
  const picks = recommended(50);
  return `<div class="brand-page-head"><h1>انتخاب شده برای تو</h1><p>بر اساس بازدیدها، برندهای دنبال‌شده و سلیقهٔ خریدت</p></div>
    ${picks.length ? grid(picks) : `<div class="empty"><div class="t">هنوز انتخابی برای این سلیقه نداریم</div><div class="s">می‌توانی سلیقهٔ خریدت را تغییر بدهی یا محصولات بیشتری ببینی.</div></div>`}
    <button class="outline-more" data-act="go" data-screen="preferences">تنظیم سلیقهٔ خرید</button>`;
}

function sSearch() {
  const activeFilters = [state.filterBrand, state.filterColor, state.filterSize, state.minPrice, state.maxPrice, state.filterCat !== "همه"].filter(Boolean).length;
  return `
    <div class="brand-page-head search-page-head"><h1>جست‌وجو</h1><p>قطعهٔ بعدی را پیدا کن</p></div>
    <div class="searchbox">
      ${I.search}
      <input id="q" type="search" placeholder="پیراهن، بافت، برند…" value="${escapeHtml(state.query)}" autocomplete="off" aria-label="جست‌وجوی محصولات">
    </div>
    <div class="search-categories">${CATS.map((c) => `<button class="${state.filterCat === c ? "on" : ""}" data-act="cat" data-cat="${c}">${c}</button>`).join("")}</div>
    <details class="filter-panel" ${activeFilters ? "open" : ""}>
      <summary class="filter-heading"><span>فیلترها <b id="filterCount" ${activeFilters ? "" : "hidden"}>${fa(activeFilters)}</b></span><i>⌄</i></summary>
      <div class="filter-clear"><button data-act="clear-filters">پاک کردن همه</button></div>
      <div class="filter-fields">
        <label>برند<select data-filter="brand" aria-label="فیلتر برند"><option value="">همهٔ برندها</option>${Object.values(BRANDS).map((b) => `<option value="${b.id}" ${state.filterBrand === b.id ? "selected" : ""}>${b.name}</option>`).join("")}</select></label>
        <label>رنگ<select data-filter="color" aria-label="فیلتر رنگ"><option value="">همهٔ رنگ‌ها</option>${COLORS.map((c) => `<option value="${c}" ${state.filterColor === c ? "selected" : ""}>${c}</option>`).join("")}</select></label>
        <label>دسته<select data-filter="cat" aria-label="فیلتر دسته"><option value="همه">همهٔ دسته‌ها</option>${CATS.slice(1).map((c) => `<option value="${c}" ${state.filterCat === c ? "selected" : ""}>${c}</option>`).join("")}</select></label>
        <label>سایز<select data-filter="size" aria-label="فیلتر سایز"><option value="">همهٔ سایزها</option>${[...new Set(P.flatMap((p) => p.sizes.map(([s]) => s)))].map((s) => `<option value="${s}" ${state.filterSize === s ? "selected" : ""}>${s}</option>`).join("")}</select></label>
        <label>قیمت از<input data-filter="minPrice" type="number" min="0" step="10000" inputmode="numeric" value="${escapeHtml(state.minPrice)}" placeholder="تومان"></label>
        <label>قیمت تا<input data-filter="maxPrice" type="number" min="0" step="10000" inputmode="numeric" value="${escapeHtml(state.maxPrice)}" placeholder="تومان"></label>
      </div>
    </details>
    <div id="results"></div>
  `;
}

function searchResults() {
  const q = state.query.trim().toLocaleLowerCase();
  let list = P.filter((p) => {
    if (state.filterCat !== "همه" && p.cat !== state.filterCat) return false;
    if (state.filterBrand && p.brand !== state.filterBrand) return false;
    if (state.filterColor && colorGroup(p.color) !== state.filterColor) return false;
    if (state.minPrice && p.price < Number(state.minPrice)) return false;
    if (state.maxPrice && p.price > Number(state.maxPrice)) return false;
    if (state.filterSize) {
      const hit = p.sizes.find(([s, n]) => s === state.filterSize && n > 0);
      if (!hit) return false;
    }
    if (!q) return true;
    const hay = `${p.name} ${brandOf(p).name} ${brandOf(p).latin} ${p.cat} ${p.color} ${p.fabric}`.toLocaleLowerCase();
    return hay.includes(q);
  });

  if (!list.length) {
    return `<div class="empty">
      <div class="t">چیزی پیدا نشد</div>
      <div class="s">برای این جست‌وجو و فیلترها محصولی پیدا نشد. فیلترها را تغییر بده یا پاک کن.</div>
      <div class="sugs">
        <button class="chip ghost" data-act="clear-filters">پاک کردن فیلترها</button>
        <button class="chip ghost" data-act="suggest" data-q="بافت">بافت</button>
        <button class="chip ghost" data-act="suggest" data-q="پیراهن">پیراهن</button>
        <button class="chip ghost" data-act="suggest" data-q="کت">کت</button>
      </div>
    </div>`;
  }
  const inStock = list.filter((p) => totalStock(p) > 0);
  const out = list.filter((p) => totalStock(p) === 0);
  return `
    <div style="padding:6px var(--pad) 0" class="kicker">${fa(inStock.length)} نتیجهٔ موجود</div>
    ${grid(inStock)}
    ${out.length ? `<div class="section-head"><h2 class="section-h">ناموجود</h2></div>${grid(out)}` : ""}
  `;
}

function sProduct() {
  const p = P_BY_ID[state.params.id];
  const b = brandOf(p);
  const out = totalStock(p) === 0;
  const isSaved = state.saved.has(p.id);
  const sel = state.params.size;
  const selStock = sel ? (p.sizes.find(([s]) => s === sel) || [])[1] : null;

  return `
    <div class="gallery">
      <div class="slide"><img src="assets/img/${p.img}" alt=""><span class="count">۱ / ۲</span></div>
      <div class="slide"><img src="assets/img/${p.img2}" alt=""><span class="count">۲ / ۲</span></div>
    </div>

    <div class="detail">
      <button class="brandlink" data-act="brand" data-id="${b.id}">${b.name} <span class="arw" style="font-family:var(--serif);font-size:11px">→</span></button>
      <h1>${p.name}</h1>
      <div class="pricerow">
        <div class="price">${money(p.price)}</div>
        ${out ? `<span style="font-size:10px;color:var(--ox)">ناموجود</span>` : ""}
      </div>

      <div class="block" style="padding-block-start:14px">
        <div class="block-h">
          <span class="lbl">سایز</span>
          <button class="aux link" data-act="go" data-screen="size">اندازهٔ من</button>
        </div>
        <div class="sizegrid">
          ${p.sizes.map(([s, n]) => `<button class="sz ${sel === s ? "on" : ""}" ${n === 0 ? "disabled" : ""} data-act="pick-size" data-size="${s}">${s}</button>`).join("")}
        </div>
        ${!p.sizes.some(([s]) => s === state.size) && state.size
          ? `<div class="stockline">سایز ذخیره‌شدهٔ تو (${state.size}) در این محصول نیست.</div>`
          : ""}
      </div>

      <div class="specs">
        <span><i>رنگ</i> ${p.color}</span>
        <span><i>پارچه</i> ${p.fabric}</span>
      </div>

      <div class="block">
        <div class="block-h"><span class="lbl">اندازه‌ها</span><span class="kicker">سانتی‌متر</span></div>
        <table class="meas">
          ${p.meas.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("")}
        </table>
        <div class="stockline" style="margin-block-start:12px">اندازه‌ها روی خود لباس گرفته شده، نه بدن. اختلاف ۱ تا ۲ سانتی‌متر طبیعی است.</div>
      </div>

      <div class="block">
        <div class="block-h"><span class="lbl">توضیح</span></div>
        <p class="desc">${p.desc}</p>
      </div>

      <div class="block" style="border-bottom:0">
        <div class="block-h"><span class="lbl">برند</span></div>
        <div class="seller">
          <div class="av"><img src="assets/img/${b.img}" alt=""></div>
          <div class="info">
            <div class="nm">${b.name}</div>
            <div class="sub">${b.city} · از ${b.since} · ${b.cat}</div>
          </div>
          <button class="seller-link" data-act="brand" data-id="${b.id}" aria-label="دیدن برند ${b.name}">←</button>
        </div>
        <div class="terms">
          <div><i>ارسال</i><span>${fa(p.dispatchDays || 2)} روز کاری پس از تأیید سفارش، از ${b.city}</span></div>
          <div><i>بازگشت</i><span>۷ روز پس از تحویل، با شرایط اعلام‌شده</span></div>
          <div><i>اصالت</i><span>محصول مستقیماً از برند ارسال می‌شود</span></div>
        </div>
      </div>

    </div>
  `;
}

function productDock() {
  const p = P_BY_ID[state.params.id];
  if (!p) return "";
  const b = brandOf(p);
  const out = totalStock(p) === 0;
  const sel = state.params.size;
  const selStock = sel ? (p.sizes.find(([s]) => s === sel) || [])[1] : null;
  const isSaved = state.saved.has(p.id);
  const note = out
    ? "این محصول فعلاً موجود نیست"
    : !sel ? ""
    : selStock === 1 ? `آخرین عدد در سایز ${sel} — ارسال از ${b.city}`
    : selStock > 1 ? `${fa(selStock)} عدد در سایز ${sel} — ارسال از ${b.city}`
    : "این سایز ناموجود است";

  return `<div class="buybar">
      ${note ? `<div class="buynote ${out || (sel && selStock === 0) || selStock === 1 ? "warn" : ""}">${note}</div>` : ""}
      <div class="buyrow">
        <button class="btn ghost ${isSaved ? "on" : ""}" data-act="save" data-id="${p.id}">${isSaved ? "♥" : "♡"}</button>
        <button class="btn" ${out || (sel && selStock === 0) ? "disabled" : ""} data-act="add">
          ${out ? "ناموجود" : !sel ? "سایز را انتخاب کن" : "افزودن به سبد"}
        </button>
      </div>
    </div>`;
}

function sBrand() {
  const b = BRANDS[state.params.id];
  const items = P.filter((p) => p.brand === b.id);
  const following = state.followed.has(b.id);
  return `
    <section class="hero" style="height:300px">
      <img src="assets/img/${b.cover}" alt="">
      <div class="scrim"></div>
      <div class="hero-copy">
        <div class="k"><span>${b.city}</span><span>از ${b.since}</span></div>
        <h1>${b.name}</h1>
        <p>${b.story}</p>
      </div>
    </section>
    <div style="display:flex;gap:10px;padding:16px var(--pad) 4px;align-items:center">
      ${following
        ? `<button class="btn" style="flex:1;height:42px;font-size:11px;background:transparent;color:var(--ink);border:1px solid var(--line-strong)" data-act="follow" data-id="${b.id}">دنبال می‌کنی</button>`
        : `<button class="btn" style="flex:1;height:42px;font-size:11px" data-act="follow" data-id="${b.id}">دنبال کردن</button>`}
      <div style="font-size:10px;color:var(--muted)">${fa(items.filter((p) => totalStock(p) > 0).length)} قطعهٔ موجود</div>
    </div>
    <div class="section-head"><h2 class="section-h">مجموعهٔ فعلی</h2></div>
    ${grid(items)}
  `;
}

function sBrands() {
  const audience = state.brandAudience;
  const orders = {women:["noor","mim","didar","segane","aftab"],men:["pust","noor","rag","k27","mim"],kids:[]};
  const featured = orders[audience].map((id) => BRANDS[id]);
  return `
    <div class="brand-page-head"><h1>برندها</h1><p>خانه‌های مد منتخب دست‌چین</p></div>
    <div class="audience-tabs brand-tabs">${Object.entries(AUDIENCES).map(([id, label]) => `<button class="${audience === id ? "on" : ""}" data-act="brand-audience" data-audience="${id}" aria-current="${audience === id ? "page" : "false"}">${label}</button>`).join("")}</div>
    <button class="az-entry" data-act="go" data-screen="allBrands"><span><strong>برندها از آ تا ی</strong><small>همهٔ برندهای ${AUDIENCES[audience]} در یک نگاه</small></span><i>←</i></button>
    <div class="brand-list-head"><h2>برندهای منتخب</h2><span>${fa(featured.length)} برند</span></div>
    ${featured.length ? `<div class="popular-brands">${featured.map((b) => {
      const p = P.find((item) => item.brand === b.id && PRODUCT_AUDIENCE[item.id] === audience) || P.find((item) => item.brand === b.id);
      const followed = state.followed.has(b.id);
      return `<div class="popular-brand"><button class="popular-brand-main" data-act="brand" data-id="${b.id}"><span class="popular-brand-name"><strong>${b.name}</strong><small>${b.cat}</small></span><img src="assets/img/${p.img}" alt="" loading="lazy"></button><button class="popular-brand-follow" data-act="follow" data-id="${b.id}" aria-label="${followed ? "لغو دنبال کردن" : "دنبال کردن"} ${b.name}">${followed ? "♥" : "♡"}</button></div>`;
    }).join("")}</div>` : `<div class="empty"><div class="t">هنوز برند بچگانه‌ای در این نمونه نیست</div><div class="s">این بخش برای برندهای بچگانه آماده است؛ با اضافه شدن مجموعه، اینجا نمایش داده می‌شوند.</div></div>`}
    <button class="outline-more brand-more" data-act="go" data-screen="allBrands">دیدن همهٔ برندها</button>
  `;
}

function sAllBrands() {
  const audience = state.brandAudience;
  const brands = Object.values(BRANDS).filter((b) => P.some((p) => p.brand === b.id && PRODUCT_AUDIENCE[p.id] === audience)).sort((a,b) => a.name.localeCompare(b.name, "fa"));
  return `
    <div class="brand-page-head"><h1>برندها از آ تا ی</h1><p>همهٔ برندهای ${AUDIENCES[audience]}</p></div>
    <div class="audience-tabs brand-tabs">${Object.entries(AUDIENCES).map(([id, label]) => `<button class="${audience === id ? "on" : ""}" data-act="brand-audience" data-audience="${id}">${label}</button>`).join("")}</div>
    ${brands.length ? `<div class="brand-directory">${brands.map((b) => `<button class="brand-directory-item" data-act="brand" data-id="${b.id}"><img src="assets/img/${b.img}" alt=""><span><strong>${b.name}</strong><small>${b.cat} · ${b.city}</small></span><i>←</i></button>`).join("")}</div>` : `<div class="empty"><div class="t">هنوز برند بچگانه‌ای در این نمونه نیست</div><div class="s">با اضافه شدن مجموعهٔ بچگانه، برندهای آن اینجا دیده می‌شوند.</div></div>`}
  `;
}

function sSaved() {
  if (!state.saved.size) {
    return `<div class="empty" style="padding-block-start:80px">
      <div class="t">هنوز چیزی ذخیره نکرده‌ای</div>
      <div class="s">هر چیزی را که دوست داری ذخیره کن؛ اگر تمام شد، جایگزینش را نشانت می‌دهیم.</div>
    </div>`;
  }
  const items = [...state.saved].map((id) => P_BY_ID[id]).filter(Boolean);
  const avail = items.filter((p) => totalStock(p) > 0);
  const gone = items.filter((p) => totalStock(p) === 0);

  return `
    <div class="screen-title">ذخیره‌شده</div>
    <div class="screen-sub">${fa(avail.length)} موجود · ${fa(gone.length)} ناموجود</div>
    ${avail.length ? grid(avail) : ""}
    ${gone.length ? `
      <div class="section-head"><h2 class="section-h">از موجودی خارج شد</h2></div>
      <div style="padding:0 var(--pad) 12px" class="kicker">ذخیره‌ات باقی می‌ماند. جایگزین‌های نزدیک را پیشنهاد می‌دهیم.</div>
      ${gone.map((p) => `<div class="sold">
        <div class="ph"><img src="assets/img/${p.img}" alt=""></div>
        <div class="body">
          <div class="nm">${p.name}</div>
          <div class="sub">${brandOf(p).name} · همهٔ سایزها تمام شد</div>
          <button data-act="alt" data-id="${p.id}">دیدن جایگزین‌ها</button>
        </div>
      </div>`).join("")}
    ` : ""}
  `;
}

function sCart() {
  if (!state.cart) {
    return `<div class="empty" style="padding-block-start:80px">
      <div class="t">سبد خالی است</div>
      <div class="s">هر سفارش فقط از یک برند ارسال می‌شود؛ می‌توانی چند قطعه از یک فروشنده را با هم بگیری.</div>
      <div style="padding-block-start:20px"><button class="chip" data-act="go" data-screen="discover">دیدن مجموعه</button></div>
    </div>`;
  }
  const p = P_BY_ID[state.cart.id];
  const b = brandOf(p);
  const sub = p.price * state.cart.qty;
  const ship = 89000;
  return `
    <div class="screen-title">سبد</div>
    <div class="brandbar" style="margin:0 var(--pad) 4px">
      <span>این سفارش از <strong style="font-weight:600">${b.name}</strong> ارسال می‌شود · ${b.city}</span>
    </div>
    <div class="pad">
      <div class="cartitem">
        <div class="ph"><img src="assets/img/${p.img}" alt=""></div>
        <div class="info">
          <div class="bm">${b.name}</div>
          <div class="nm">${p.name}</div>
          <div class="vr">سایز ${state.cart.size} · ${p.color}</div>
          <div class="pr">${money(sub)}</div>
          <div class="qty">
            <button data-act="qty" data-d="1">+</button>
            <span>${fa(state.cart.qty)}</span>
            <button data-act="qty" data-d="-1">−</button>
          </div>
        </div>
      </div>
      <div class="totals">
        <div class="ln"><span>جمع کالا</span><span>${money(sub)}</span></div>
        <div class="ln"><span>ارسال از ${b.city} · ${fa(p.dispatchDays || 2)} روز کاری</span><span>${money(ship)}</span></div>
        <div class="ln big"><span>مبلغ قابل پرداخت</span><span>${money(sub + ship)}</span></div>
      </div>
      <div class="note">قیمت نهایی شامل ارسال است. مرجوعی تا ۷ روز پس از تحویل، طبق شرایط فروشنده.</div>
      <button class="btn" style="width:100%;margin-block-end:26px" data-act="go" data-screen="checkout">رفتن به پرداخت</button>

      ${P.filter((x) => x.brand === p.brand && x.id !== p.id && totalStock(x) > 0).length
        ? `<div class="section-head" style="padding-inline:0;padding-block-start:0">
             <h2 class="section-h">همین برند</h2>
             <span class="kicker">${b.name}</span>
           </div>
           <div class="grid" style="padding:0 0 26px">
             ${P.filter((x) => x.brand === p.brand && x.id !== p.id && totalStock(x) > 0).slice(0, 2).map(card).join("")}
           </div>`
        : ""}
    </div>
  `;
}

function sCheckout() {
  if (!state.cart) return sCart();
  const p = P_BY_ID[state.cart.id];
  const b = brandOf(p);
  const sub = p.price * state.cart.qty;
  const total = sub + 89000;
  return `
    <div class="screen-title">پرداخت</div>
    <div class="screen-sub">یک سفارش، یک فروشنده. مبلغ تا تأیید درگاه نزد ما معلق می‌ماند.</div>
    <div class="pad">
      <div class="block" style="padding-block-start:0">
        <div class="block-h"><span class="lbl">تحویل</span><button class="aux">تغییر</button></div>
        <div style="font-size:11px;line-height:2;color:var(--ink-2)">
          سارا محمدی<br>تهران، خیابان کریم‌خان، کوچهٔ نهم، پلاک ۱۲<br>۰۹۱۲ ۰۰۰ ۰۰۰۰
        </div>
      </div>
      <div class="block">
        <div class="block-h"><span class="lbl">روش پرداخت</span></div>
        <div class="brandbar"><span>درگاه پرداخت داخلی · انتقال به صفحهٔ امن بانک</span></div>
        <div class="note" style="padding-block-start:8px">اطلاعات کارت فقط در صفحهٔ بانک وارد می‌شود و در دستچین ذخیره نمی‌شود.</div>
      </div>
      <div class="block" style="border-bottom:0">
        <div class="ln"><span>جمع کالا</span><span>${money(sub)}</span></div>
        <div class="ln"><span>ارسال</span><span>${money(89000)}</span></div>
        <div class="ln big"><span>قابل پرداخت</span><span>${money(total)}</span></div>
      </div>
      <button class="btn" style="width:100%;margin-block:12px 24px" data-act="pay">پرداخت ${money(total)}</button>
      <div class="note" style="text-align:center;padding-block-start:0">با پرداخت، شرایط بازگشت ۷ روزه و سیاست حریم خصوصی را می‌پذیری.</div>
    </div>
  `;
}

function sOrder() {
  const o = state.order || { id: "p03", no: 1042, size: "M", qty: 1 };
  const p = P_BY_ID[o.id] || P_BY_ID.p03;
  const b = brandOf(p);
  const total = p.price * (o.qty || 1) + 89000;
  return `
    <div style="padding:32px var(--pad) 0;text-align:center">
      <div class="kicker" style="margin-block-end:12px">شمارهٔ سفارش ${fa(o.no)}</div>
      <h1 class="title" style="font-size:22px;margin-block-end:8px">سفارش ثبت شد</h1>
      <div style="font-size:10.5px;color:var(--muted);line-height:1.9">پرداخت تأیید شد. ${b.name} سفارش را آماده می‌کند.</div>
    </div>
    <div class="pad" style="padding-block-start:22px">
      <div class="orderitem">
        <div class="ph"><img src="assets/img/${p.img}" alt=""></div>
        <div class="body">
          <div class="nm">${p.name}</div>
          <div class="sub">سایز ${o.size || "—"} · ${b.name}</div>
        </div>
        <div class="pr">${money(total)}</div>
      </div>
      <div class="brandbar" style="margin-block-end:16px">
        <span>ارسال از <strong style="font-weight:600">${b.name}</strong> · ${b.city} · تخمین ${fa(p.dispatchDays || 2)} روز کاری</span>
      </div>
      <div class="timeline">
        <div class="tl done"><div class="dot"></div><div class="body"><div class="t">پرداخت تأیید شد</div><div class="s">همین حالا · کد پیگیری ۸۴۲۹۱۷</div></div></div>
        <div class="tl now"><div class="dot"></div><div class="body"><div class="t">در حال آماده‌سازی</div><div class="s">فروشنده تا ۲ روز کاری آینده ارسال می‌کند</div></div></div>
        <div class="tl"><div class="dot"></div><div class="body"><div class="t">تحویل به پست</div><div class="s">کد رهگیری پس از تحویل نمایش داده می‌شود</div></div></div>
        <div class="tl"><div class="dot"></div><div class="body"><div class="t">تحویل به شما</div><div class="s">۷ روز فرصت بازگشت از این مرحله شروع می‌شود</div></div></div>
      </div>
      <div style="display:flex;gap:8px;margin-block:20px 8px">
        <button class="btn" style="flex:1;height:44px;font-size:11px" data-act="go" data-screen="discover">ادامهٔ خرید</button>
        <button class="btn" style="flex:1;height:44px;font-size:11px;background:transparent;color:var(--ink);border:1px solid var(--line-strong)">درخواست مرجوعی</button>
      </div>
      <div class="note">اگر تا موعد مقرر ارسال نشد، از همین صفحه پیگیری کن؛ پشتیبانی دستچین وارد می‌شود.</div>
    </div>
  `;
}

function sSize() {
  const sizes = ["S", "M", "L", "XL"];
  const map = { S: "۸۶–۹۰", M: "۹۶–۱۰۰", L: "۱۰۴–۱۰۸", XL: "۱۱۲–۱۱۶" };
  const matches = state.size
    ? P.filter((p) => p.sizes.some(([s, n]) => s === state.size && n > 0))
    : [];

  return `
    <div class="screen-title">اندازهٔ من</div>
    <div class="screen-sub">یک‌بار انتخاب کن؛ از این به بعد روی هر محصول می‌بینی سایز تو موجود است یا نه.</div>
    <div class="pad">
      <div class="block" style="padding-block-start:6px">
        <div class="block-h"><span class="lbl">سایز معمول تو</span></div>
        <div class="sizegrid">
          ${sizes.map((s) => `<button class="sz ${state.size === s ? "on" : ""}" style="min-width:62px;height:46px" data-act="set-size" data-size="${s}">${s}</button>`).join("")}
        </div>
        ${state.size
          ? `<div class="stockline">سایز ${state.size} حدوداً معادل دور سینهٔ ${map[state.size]} سانتی‌متر است. این عدد روی بدن است، نه لباس.</div>`
          : `<div class="stockline">اگر مطمئن نیستی، اندازه‌های هر لباس را در صفحهٔ محصول ببین.</div>`}
      </div>

      ${state.size
        ? `<div class="block">
            <div class="block-h">
              <span class="lbl">با سایز ${state.size}</span>
              <span class="kicker">${fa(matches.length)} قطعه موجود</span>
            </div>
          </div>
          ${matches.length ? `<div class="grid" style="padding:0 0 8px">${matches.slice(0, 4).map(card).join("")}</div>` : `<div class="note">الان چیزی در سایز ${state.size} موجود نیست.</div>`}`
        : ""}

      <div class="block">
        <div class="block-h"><span class="lbl">چرا اندازه‌های لباس مهم‌اند</span></div>
        <p class="desc">«M» در هر برند متفاوت است. دستچین اندازه‌های واقعی هر لباس را نشان می‌دهد تا مقایسه ممکن باشد. اگر سایزت نبود، هشدار می‌دهیم.</p>
      </div>
      <button class="btn" style="width:100%;margin-block:8px 24px" data-act="save-size">ذخیره</button>
    </div>
  `;
}

function sAccount() {
  return `
    <div style="padding:26px var(--pad) 18px;border-bottom:1px solid var(--line)">
      <div style="font-size:14px;font-weight:600">سارا محمدی</div>
      <div style="font-size:10px;color:var(--muted);margin-block-start:5px">۰۹۱۲ ۰۰۰ ۰۰۰۰ · ${state.size ? "سایز " + state.size : "سایز ثبت نشده"}</div>
    </div>
    <div class="pad">
      <button class="row" data-act="go" data-screen="order"><span class="lead">سفارش‌ها<small>۱ سفارش در جریان</small></span><span class="chev">›</span></button>
      <button class="row" data-act="go" data-screen="saved"><span class="lead">ذخیره‌شده‌ها<small>${fa(state.saved.size)} قطعه</small></span><span class="chev">›</span></button>
      <button class="row" data-act="go" data-screen="recent"><span class="lead">تاریخچهٔ بازدید<small>${fa(state.recentlyViewed.length)} محصول اخیر، تا ۵۰ محصول</small></span><span class="chev">›</span></button>
      <button class="row" data-act="go" data-screen="preferences"><span class="lead">سلیقهٔ خرید من<small>مجموعه، سایز، رنگ و بودجه</small></span><span class="chev">›</span></button>
      <button class="row" data-act="go" data-screen="size"><span class="lead">اندازهٔ من<small>${state.size ? "سایز " + state.size : "ثبت نشده"}</small></span><span class="chev">›</span></button>
      <button class="row" data-act="lang"><span class="lead">نسخهٔ انگلیسی<small>در نقشهٔ راه — پس از فاز اول</small></span><span class="chev">›</span></button>
      <button class="row" data-act="go" data-screen="later"><span class="lead">دستچین در آینده<small>نقشهٔ محصول و قابلیت‌های بعدی</small></span><span class="chev">›</span></button>
    </div>
    <div style="padding:20px var(--pad) 30px;font-size:9px;color:var(--muted);line-height:2">
      نسخهٔ ۰.۱ — نمونهٔ نمایشی<br>
      تصاویر و محصولات فرضی‌اند. برندها تخیلی‌اند.
    </div>
  `;
}

function sRecent() {
  const items = state.recentlyViewed.map((id) => P_BY_ID[id]).filter(Boolean);
  return `<div class="screen-title">تاریخچهٔ بازدید</div>
    <div class="screen-sub">۵۰ محصول آخری که باز کرده‌ای، از جدید به قدیم. فقط روی همین دستگاه ذخیره می‌شود.</div>
    ${items.length ? grid(items) : `<div class="empty"><div class="t">هنوز محصولی باز نکرده‌ای</div><div class="s">محصولاتی که می‌بینی اینجا نگه داشته می‌شوند.</div><button class="chip" data-act="go" data-screen="discover">دیدن محصولات</button></div>`}`;
}

function sPreferences() {
  const pr = state.prefs;
  const choice = (kind, value, label, on) => `<button class="chip ${on ? "on" : ""}" data-act="pref-toggle" data-kind="${kind}" data-value="${value}" aria-pressed="${on}">${label}</button>`;
  return `<div class="screen-title">سلیقهٔ خرید من</div>
    <div class="screen-sub">این انتخاب‌ها پیشنهادهای صفحهٔ اصلی را مرتب می‌کنند و فقط روی همین دستگاه ذخیره می‌شوند.</div>
    <div class="pref-form">
      <div class="pref-group"><div class="pref-label">برای چه مجموعه‌ای خرید می‌کنی؟</div><div class="pref-choices">${Object.entries(AUDIENCES).map(([id,label]) => choice("audiences", id, label, pr.audiences.includes(id))).join("")}</div></div>
      <div class="pref-group"><label class="pref-label" for="prefSize">سایز پوشاک</label><select id="prefSize" data-pref="size"><option value="">انتخاب نشده</option>${LETTER_SIZES.map((s) => `<option value="${s}" ${pr.size === s ? "selected" : ""}>${s}</option>`).join("")}</select></div>
      <div class="pref-group"><label class="pref-label" for="prefShoe">سایز کفش</label><select id="prefShoe" data-pref="shoeSize"><option value="">انتخاب نشده</option>${["۴۰","۴۱","۴۲","۴۳","۴۴"].map((s) => `<option value="${s}" ${pr.shoeSize === s ? "selected" : ""}>${s}</option>`).join("")}</select></div>
      <div class="pref-group"><div class="pref-label">رنگ‌های دلخواه</div><div class="pref-choices">${COLORS.map((c) => choice("colors", c, c, pr.colors.includes(c))).join("")}</div></div>
      <div class="pref-group"><label class="pref-label" for="prefBudget">سقف بودجهٔ هر محصول (تومان)</label><input id="prefBudget" data-pref="maxPrice" type="number" min="0" step="10000" inputmode="numeric" value="${escapeHtml(pr.maxPrice)}" placeholder="بدون سقف"></div>
      <button class="btn" data-act="save-preferences">ذخیرهٔ سلیقه</button>
    </div>`;
}

function sLater() {
  const cards = [
    ["01", "جست‌وجوی تصویری", "عکس یک استایل را بده، قطعه‌های مشابه از برندهای ایرانی را پیدا کن.", "فاز ۳"],
    ["02", "اطلاع از موجودی", "وقتی سایز تو دوباره موجود شد، یک پیام — نه بیشتر.", "فاز ۱"],
    ["03", "ادیت‌های کیوریتوری", "افراد و طراحان، ادیت شخصی می‌سازند و از فروش سهم می‌گیرند.", "فاز ۲"],
    ["04", "پنل برند و تسویه", "فروشنده موجودی، سفارش و صورت‌حساب تسویه را در یک صفحه می‌بیند.", "فاز ۲"],
    ["05", "اپلیکیشن", "پس از آنکه وب، بازگشتِ واقعی نشان داد — نه قبل از آن.", "فاز ۳"],
  ];
  return `
    <div class="screen-title">دستچین در آینده</div>
    <div class="screen-sub">آنچه عمداً در نسخهٔ اول نیست. هر کدام بعد از رسیدن به شاهدِ واقعی ساخته می‌شود.</div>
    ${cards.map(([n, t, d, tag]) => `<div class="vcard">
      <div class="num">${n}</div>
      <div class="body"><div class="t">${t}</div><div class="d">${d}</div></div>
      <div class="tag">${tag}</div>
    </div>`).join("")}
    <div class="vision-note">
      این نسخه روی یک چیز تمرکز دارد: اینکه هر محصول، موجود، قابل خرید و قابل بازگشت باشد.
      بقیهٔ قابلیت‌ها به‌ترتیبِ شاهد ساخته می‌شوند، نه به‌ترتیب جذابیت.
    </div>
  `;
}

const RENDER = {
  discover: sDiscover, forYou: sForYou, search: sSearch, product: sProduct, brand: sBrand, brands: sBrands, allBrands: sAllBrands,
  saved: sSaved, cart: sCart, checkout: sCheckout, order: sOrder,
  size: sSize, account: sAccount, recent: sRecent, preferences: sPreferences, later: sLater,
};

/* ----------------------------- router ----------------------------------- */
function go(screen, params = {}) {
  if (screen !== state.screen) state.history.push({screen: state.screen, params: state.params});
  state.screen = screen;
  state.params = params;
  if (screen === "product") recordView(params.id);
  render();
}

function render() {
  const html = (RENDER[state.screen] || sDiscover)();
  $("#screen").innerHTML = html;
  $("#screen").scrollTop = 0;
  $("#dock").innerHTML = state.screen === "product" ? productDock() : "";
  renderChrome();
  if (state.screen === "search") {
    const q = $("#q");
    $("#results").innerHTML = searchResults();
    q.addEventListener("input", (e) => {
      state.query = e.target.value;
      $("#results").innerHTML = searchResults();
    });
  }
  if (state.screen === "discover") {
    const rail = $("#trendRail");
    rail?.addEventListener("scroll", () => {
      const tiles = [...rail.querySelectorAll(".trend-tile")];
      const right = rail.getBoundingClientRect().right;
      const index = tiles.reduce((best, tile, i) => Math.abs(tile.getBoundingClientRect().right - right) < Math.abs(tiles[best].getBoundingClientRect().right - right) ? i : best, 0);
      document.querySelectorAll(".trend-dots button").forEach((dot, i) => { dot.classList.toggle("on", i === index); dot.setAttribute("aria-current", i === index ? "true" : "false"); });
    }, {passive:true});
  }
}

/* ----------------------------- feedback ---------------------------------- */
let toastT;
function toast(msg) {
  const old = $(".toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  $(".phone").appendChild(el);
  clearTimeout(toastT);
  toastT = setTimeout(() => el.remove(), 2600);
}

function openSheet(kind) {
  const sheet = $("#sheet");
  if (kind === "index") {
    const rows = [
      ["discover", "کشف — صفحهٔ اصلی"], ["search", "جست‌وجو و فیلترها"],
      ["product", "صفحهٔ محصول — موجودی هر سایز"], ["brand", "صفحهٔ برند"],
      ["brands", "خانه‌های مد"], ["allBrands", "همهٔ برندها"],
      ["saved", "ذخیره‌شده‌ها + حالت ناموجود"], ["cart", "سبد یک‌برندی"],
      ["checkout", "پرداخت و مرز ارسال"], ["order", "وضعیت سفارش"],
      ["size", "اندازهٔ من"], ["recent", "تاریخچهٔ بازدید"], ["preferences", "سلیقهٔ خرید من"], ["later", "دستچین در آینده"], ["account", "حساب"],
    ];
    sheet.innerHTML = `<div class="sheet-inner">
      <div class="h"><span class="t">صفحه‌ها</span><button data-act="close-sheet">بستن</button></div>
      ${rows.map(([s, l]) => `<button class="row" data-act="jump" data-screen="${s}">
        <span class="lead">${l}</span><span class="chev">›</span></button>`).join("")}
    </div>`;
  }
  sheet.hidden = false;
}

/* ----------------------------- actions ----------------------------------- */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.dataset.act;

  if (act === "go") { go(el.dataset.screen); return; }
  if (act === "back") {
    const prev = state.history.pop() || {screen: "discover", params: {}};
    state.screen = prev.screen; state.params = prev.params; render(); return;
  }
  if (act === "index") { openSheet("index"); return; }
  if (act === "close-sheet") { $("#sheet").hidden = true; return; }
  if (act === "jump") {
    $("#sheet").hidden = true;
    const s = el.dataset.screen;
    if (s === "product") go("product", { id: "p01" });
    else if (s === "brand") go("brand", { id: "noor" });
    else if (s === "order") { if (!state.order) state.order = { id: "p03", no: 1042 }; go("order"); }
    else if (s === "checkout" && !state.cart) { state.cart = { id: "p01", size: "M", qty: 1 }; go("checkout"); }
    else go(s);
    return;
  }

  if (act === "product") { go("product", { id: el.dataset.id }); return; }
  if (act === "brand") { go("brand", { id: el.dataset.id }); return; }
  if (act === "trend") { resetSearchFilters(); state.filterCat = el.dataset.cat; go("search"); return; }
  if (act === "trend-slide") { const tile = $("#trendRail")?.querySelectorAll(".trend-tile")[Number(el.dataset.index)]; tile?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}); return; }
  if (act === "brand-audience") { state.brandAudience = el.dataset.audience; render(); return; }
  if (act === "clear-filters") {
    resetSearchFilters(); render(); return;
  }
  if (act === "pref-toggle") {
    const values = state.prefs[el.dataset.kind];
    const value = el.dataset.value;
    if (values.includes(value)) state.prefs[el.dataset.kind] = values.filter((v) => v !== value);
    else state.prefs[el.dataset.kind] = [...values, value];
    persistLocal(); render(); return;
  }
  if (act === "save-preferences") { persistLocal(); toast("سلیقهٔ خریدت ذخیره شد"); go("account"); return; }

  if (act === "cat") {
    if (state.screen !== "search") resetSearchFilters();
    state.filterCat = el.dataset.cat;
    go("search");
    return;
  }
  if (act === "filter-size") {
    const s = el.dataset.size || null;
    state.filterSize = state.filterSize === s ? null : s;
    render();
    return;
  }
  if (act === "suggest") {
    state.query = el.dataset.q;
    render();
    return;
  }

  if (act === "pick-size") {
    state.params.size = el.dataset.size;
    render();
    return;
  }

  if (act === "save") {
    const id = el.dataset.id;
    if (state.saved.has(id)) { state.saved.delete(id); toast("از ذخیره‌ها حذف شد"); }
    else { state.saved.add(id); toast("ذخیره شد — اگر تمام شد خبرت می‌کنیم"); }
    if (state.screen === "discover" && el.classList.contains("pick-save")) {
      const saved = state.saved.has(id);
      el.textContent = saved ? "♥" : "♡";
      el.setAttribute("aria-label", saved ? "حذف از ذخیره‌ها" : "ذخیرهٔ محصول");
    } else render();
    return;
  }

  if (act === "add") {
    const p = P_BY_ID[state.params.id];
    const size = state.params.size;
    if (!size) { toast("اول سایز را انتخاب کن"); return; }
    state.cart = { id: p.id, size, qty: 1 };
    go("cart");
    return;
  }

  if (act === "qty") {
    const d = parseInt(el.dataset.d, 10);
    const p = P_BY_ID[state.cart.id];
    const max = p.sizes.find(([s]) => s === state.cart.size)[1];
    state.cart.qty = Math.max(1, Math.min(max, state.cart.qty + d));
    render();
    return;
  }

  if (act === "pay") {
    const phone = $(".phone");
    const ov = document.createElement("div");
    ov.className = "verify";
    ov.innerHTML = `<div><div class="spinner"></div>
      <div class="t">در حال استعلام پرداخت</div>
      <div class="s">نتیجه از درگاه بانک تأیید می‌شود. این صفحه را نبند و دوباره پرداخت نکن.</div></div>`;
    phone.appendChild(ov);
    setTimeout(() => {
      ov.remove();
      state.order = { id: state.cart.id, no: 1042, size: state.cart.size, qty: state.cart.qty };
      state.cart = null;
      go("order");
    }, 1700);
    return;
  }

  if (act === "set-size") {
    state.size = el.dataset.size;
    render();
    return;
  }
  if (act === "save-size") {
    if (!state.size) { toast("یک سایز انتخاب کن"); return; }
    toast("سایز " + state.size + " ذخیره شد");
    setTimeout(() => { state.screen = "discover"; state.params = {}; render(); }, 700);
    return;
  }
  if (act === "follow") {
    const id = el.dataset.id;
    if (state.followed.has(id)) { state.followed.delete(id); toast("دیگر دنبال نمی‌کنی"); }
    else { state.followed.add(id); toast("دنبال می‌کنی — محصولات تازه را می‌بینی"); }
    const scroll = $("#screen").scrollTop;
    render();
    $("#screen").scrollTop = scroll;
    return;
  }
  if (act === "alt") {
    const p = P_BY_ID[el.dataset.id];
    resetSearchFilters();
    state.filterCat = p.cat;
    go("search");
    return;
  }
  if (act === "lang") {
    toast("نسخهٔ انگلیسی بعد از فاز اول — ساختار آماده است");
    return;
  }
});

document.addEventListener("change", (e) => {
  const filter = e.target.dataset.filter;
  if (filter) {
    const key = {brand:"filterBrand",color:"filterColor",cat:"filterCat",size:"filterSize",minPrice:"minPrice",maxPrice:"maxPrice"}[filter];
    if (key) state[key] = e.target.value;
    $("#results").innerHTML = searchResults();
    const n = [state.filterBrand, state.filterColor, state.filterSize, state.minPrice, state.maxPrice, state.filterCat !== "همه"].filter(Boolean).length;
    const count = $("#filterCount");
    if (count) { count.textContent = fa(n); count.hidden = !n; }
  }
  const pref = e.target.dataset.pref;
  if (pref) { state.prefs[pref] = e.target.value; persistLocal(); }
});

document.addEventListener("keydown", (e) => { if (e.key === "Escape") $("#sheet").hidden = true; });
$("#sheet").addEventListener("click", (e) => { if (e.target.id === "sheet") $("#sheet").hidden = true; });

/* ----------------------------- boot -------------------------------------- */
// exposed for the demo: window.demo.go('product', {id:'p03'})
window.demo = { go, render, state, P, BRANDS };
render();
