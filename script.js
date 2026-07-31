const TOTAL_STEPS = 41;

const SLIDES = [
  {
    page: "images/cover.jpg",
    badge: "表紙",
    progress: 0,
    text: "ふうりんを作ろう！\n8月度　親子工作",
  },
  { page: "images/page/Page (1).jpg", start: 1, end: 1, text: "1cm間隔で9本の線をひく" },
  { page: "images/page/Page (2).jpg", start: 2, end: 2, text: "下から2本を除いて図の様に線をひく" },
  { page: "images/page/Page (3).jpg", start: 3, end: 3, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page/Page (4).jpg", start: 4, end: 4, text: "柄の色紙を用意する" },
  { page: "images/page/Page (5).jpg", start: 5, end: 5, text: "柄色紙の裏面に線をひく（赤色の線）" },
  { page: "images/page/Page (6).jpg", start: 6, end: 6, text: "5の赤線を切り取る" },
  { page: "images/page/Page (7).jpg", start: 7, end: 7, text: "図の様に6をA外側　表面に貼り付ける" },
  {
    page: "images/page/Page (8).jpg",
    start: 8,
    end: 8,
    text: "外側裏面（全面線がある方）を向け図の様に切る\n下から2本は後から使います",
  },
  {
    page: "images/page/Page (9).jpg",
    start: 9,
    end: 9,
    text: "3本位ずつそろえ、一つ穴パンチで中央の印が真ん中に来るように置き\n穴を開ける",
  },
  { page: "images/page/Page (10).jpg", start: 10, end: 10, text: "右図　8本共、穴を開ける" },
  { page: "images/page/Page (11).jpg", start: 11, end: 11, text: "1cm間隔で線をひき、縦にも図の様に線をひく" },
  { page: "images/page/Page (12).jpg", start: 12, end: 12, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page/Page (13).jpg", start: 13, end: 13, text: "キラキラ色紙の裏面に5と同様に線を引く" },
  { page: "images/page/Page (14).jpg", start: 14, end: 14, text: "13の赤線を切り取る" },
  { page: "images/page/Page (15).jpg", start: 15, end: 15, text: "B内側表面に14を貼り付ける" },
  {
    page: "images/page/Page (16).jpg",
    start: 16,
    end: 16,
    text: "内側裏面（全面線がある方）を向け線通りに切り\nパンチで穴を開ける",
  },
  {
    page: "images/page/Page (17).jpg",
    start: 17,
    end: 17,
    text: "①カッティングボードの上に切り取った折り紙を置き矢印の所にボンドを付ける\n②等間隔で十字に貼り付ける\n③、④　ボンドを付け斜めに貼り付ける",
  },
  {
    page: "images/page/Page (18・19)①.jpg",
    start: 18,
    end: 19,
    part: 1,
    parts: 2,
    text: "18　同様に同じものをもう一個作る\n19　もう一つのパーツを等間隔に貼り付ける",
  },
  {
    page: "images/page/Page (18・19)②.jpg",
    start: 18,
    end: 19,
    part: 2,
    parts: 2,
    text: "18　同様に同じものをもう一個作る\n19　もう一つのパーツを等間隔に貼り付ける",
  },
  { page: "images/page/Page (20).jpg", start: 20, end: 20, text: "内側のふうりんも同様に作る" },
  {
    page: "images/page/Page (21・22).jpg",
    start: 21,
    end: 22,
    text: "21　8の下から2本目の内の1本を用意する\n22　1.2cm間隔で16分割する",
  },
  {
    page: "images/page/Page (23).jpg",
    start: 23,
    end: 23,
    text: "22の矢印の所にボンドを付け\nメモリが入っている方を中側にして\n輪にする",
  },
  {
    page: "images/page/Page (24・25).jpg",
    start: 24,
    end: 25,
    text: "24　1cmの所を手前に折る（16か所全部）\n25　A（外側）の中央にボンドを付けてBをAの間に貼り付ける",
  },
  {
    page: "images/page/Page (26・27).jpg",
    start: 26,
    end: 27,
    text: "26　23を中央に置く\n27　Bの矢印の所にボンドを付け、23輪の内側の線に合わせて貼り付ける",
  },
  {
    page: "images/page/Page (28)①.jpg",
    start: 28,
    end: 28,
    part: 1,
    parts: 3,
    text: "図の様に対角線に貼り付けていく",
  },
  {
    page: "images/page/Page (28)②.jpg",
    start: 28,
    end: 28,
    part: 2,
    parts: 3,
    text: "図の様に対角線に貼り付けていく",
  },
  {
    page: "images/page/Page (28)③.jpg",
    start: 28,
    end: 28,
    part: 3,
    parts: 3,
    text: "図の様に対角線に貼り付けていく",
  },
  {
    page: "images/page/Page (29・30).jpg",
    start: 29,
    end: 30,
    text: "29　A外側も折り曲げる\n30　ボンドを付けて今度は順番に付けていく",
  },
  {
    page: "images/page/Page (31・32).jpg",
    start: 31,
    end: 32,
    text: "31　ふうりんの側の出来上がり\n32　8の残りの1つを用意する",
  },
  { page: "images/page/Page (33).jpg", start: 33, end: 33, text: "中側に一周、貼り付ける" },
  {
    page: "images/page/Page (34・35).jpg",
    start: 34,
    end: 35,
    text: "34　短冊（3cm×12cm）は色紙を貼ったり、絵を描いたり、オリジナルなもの作って楽しみましょう。\n35　パンチで穴を開ける",
  },
  {
    page: "images/page/Page (36・37).jpg",
    start: 36,
    end: 37,
    text: "36　ふうりんを用意する\n37　既成の短冊をはずす",
  },
  {
    page: "images/page/Page (38・39).jpg",
    start: 38,
    end: 39,
    text: "38　短冊を付け替える\n39　出来上がったふうりんの側にひもを通す",
  },
  {
    page: "images/page/Page (40・41).jpg",
    start: 40,
    end: 41,
    text: "40　ストッパービーズを付ける\n41　かた結びをする",
  },
  {
    page: "images/page/Page (裏表紙).jpg",
    badge: "完成🎐",
    progress: TOTAL_STEPS,
    text: "これで、ふうりんの完成です！\nお疲れ様でした。",
  },
];

let current = 0;
let touchStartX = 0;

const stepImage = document.getElementById("stepImage");
const imageStage = document.getElementById("imageStage");
const imageStatus = document.getElementById("imageStatus");
const stepBadge = document.getElementById("stepBadge");
const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const qrBlock = document.getElementById("qrBlock");

function getStepLabel(slide) {
  if (slide.badge) return slide.badge;

  const range = slide.start === slide.end
    ? `${slide.start}`
    : `${slide.start}・${slide.end}`;
  const part = slide.parts ? `（${slide.part}/${slide.parts}）` : "";

  return `手順 ${range}${part} / ${TOTAL_STEPS}`;
}

function getProgress(slide) {
  if (typeof slide.progress === "number") return slide.progress;
  return slide.end || 0;
}

function preload(index) {
  const slide = SLIDES[index];
  if (!slide) return;
  const image = new Image();
  image.src = slide.page;
}

function render() {
  const slide = SLIDES[current];
  const progress = getProgress(slide);

  imageStage.classList.remove("is-loading");
  imageStatus.hidden = true;
  stepImage.src = slide.page;
  stepImage.alt = slide.badge || `手順${slide.start}${slide.end !== slide.start ? `から${slide.end}` : ""}の写真`;
  stepBadge.textContent = getStepLabel(slide);
  stepText.textContent = slide.text;

  progressFill.style.width = `${(progress / TOTAL_STEPS) * 100}%`;
  progressLabel.textContent = `${progress} / ${TOTAL_STEPS}`;

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === SLIDES.length - 1;
  qrBlock.style.display = current === 0 ? "flex" : "none";

  preload(current - 1);
  preload(current + 1);
}

function goPrev() {
  if (current <= 0) return;
  current -= 1;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goNext() {
  if (current >= SLIDES.length - 1) return;
  current += 1;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

stepImage.addEventListener("load", () => {
  imageStage.classList.remove("is-loading");
  imageStatus.hidden = true;
});

stepImage.addEventListener("error", () => {
  imageStage.classList.remove("is-loading");
  imageStatus.hidden = false;
  imageStatus.textContent = "画像を読み込めませんでした。ページを再読み込みしてください。";
});

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goPrev();
  if (event.key === "ArrowRight") goNext();
});

imageStage.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

imageStage.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) < 50) return;
  if (distance < 0) goNext();
  else goPrev();
}, { passive: true });

render();
