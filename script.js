const STEPS = [
  { page: "images/cover.jpg", badge: "表紙", text: "ふうりんを作ろう！\n8月度　親子工作" },
  { page: "images/page1.jpg", num: 1, text: "1cm間隔で9本の線をひく" },
  { page: "images/page1.jpg", num: 2, text: "下から2本を除いて図の様に線をひく" },
  { page: "images/page1.jpg", num: 3, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page1.jpg", num: 4, text: "柄の色紙を用意する" },
  { page: "images/page2.jpg", num: 5, text: "柄色紙の裏面に線をひく（赤色の線）" },
  { page: "images/page2.jpg", num: 6, text: "5の赤線を切り取る" },
  { page: "images/page2.jpg", num: 7, text: "図の様に6をA外側　表面に貼り付ける" },
  { page: "images/page2.jpg", num: 8, text: "外側裏面（全面線がある方）を向け図の様に切る\n下から2本は後から使います" },
  { page: "images/page2.jpg", num: 9, text: "3本位ずつそろえ、一つ穴パンチで中央の印が真ん中に来るように置き\n穴を開ける" },
  { page: "images/page3.jpg", num: 10, text: "右図　8本共、穴を開ける" },
  { page: "images/page3.jpg", num: 11, text: "1cm間隔で線をひき、縦にも図の様に線をひく" },
  { page: "images/page3.jpg", num: 12, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page3.jpg", num: 13, text: "キラキラ色紙の裏面に5と同様に線を引く" },
  { page: "images/page4.jpg", num: 14, text: "13の赤線を切り取る" },
  { page: "images/page4.jpg", num: 15, text: "B内側表面に14を貼り付ける" },
  { page: "images/page4.jpg", num: 16, text: "内側裏面（全面線がある方）を向け線通りに切り\nパンチで穴を開ける" },
  { page: "images/page4.jpg", num: 17, text: "①カッティングボードの上に切り取った折り紙を置き矢印の所にボンドを付ける\n②等間隔で十字に貼り付ける\n③、④　ボンドを付け斜めに貼り付ける" },
  { page: "images/page5.jpg", num: 18, text: "左図　同様に同じものをもう一個作る" },
  { page: "images/page5.jpg", num: 19, text: "右図　もう一つのパーツを等間隔に貼り付ける" },
  { page: "images/page5.jpg", num: 20, text: "内側のふうりんも同様に作る" },
  { page: "images/page5.jpg", num: 21, text: "8の下から2本目の内の1本を用意する" },
  { page: "images/page5.jpg", num: 22, text: "1.2cm間隔で16分割する" },
  { page: "images/page6.jpg", num: 23, text: "22の矢印の所にボンドを付け\nメモリが入っている方を中側にして\n輪にする" },
  { page: "images/page6.jpg", num: 24, text: "左図　1cmの所を手前に折る（16か所全部）" },
  { page: "images/page6.jpg", num: 25, text: "右図　A（外側）の中央にボンドを付けてBをAの間に\n貼り付ける" },
  { page: "images/page6.jpg", num: 26, text: "左図　23を中央に置く" },
  { page: "images/page6.jpg", num: 27, text: "右図　Bの矢印の所にボンドを付け、23輪の内側\nの線に合わせて貼り付ける" },
  { page: "images/page6.jpg", num: 28, text: "図の様に対角線に貼り付けていく" },
  { page: "images/page7.jpg", num: 29, text: "左図　A外側も折り曲げる" },
  { page: "images/page7.jpg", num: 30, text: "右図　ボンドを付けて今度は順番に付けていく" },
  { page: "images/page7.jpg", num: 31, text: "左図　ふうりんの側の出来上がり" },
  { page: "images/page7.jpg", num: 32, text: "右図　8の残りの1つを用意する" },
  { page: "images/page7.jpg", num: 33, text: "左図　中側に一周、貼り付ける" },
  { page: "images/page7.jpg", num: 34, text: "左図　短冊（3cm×12cm）は色紙を貼ったり、絵を描いたり\nオリジナルなもの作って楽しみましょう。" },
  { page: "images/page7.jpg", num: 35, text: "右図　パンチで穴を開ける" },
  { page: "images/page7.jpg", num: 36, text: "左図　ふうりんを用意する" },
  { page: "images/page7.jpg", num: 37, text: "右図　既成の短冊をはずす" },
  { page: "images/page8.jpg", num: 38, text: "左図　短冊を付け替える" },
  { page: "images/page8.jpg", num: 39, text: "右図　出来上がったふうりんの側にひもを通す" },
  { page: "images/page8.jpg", num: 40, text: "左図　ストッパービーズを付ける" },
  { page: "images/page8.jpg", num: 41, text: "右図　かた結びをする" },
  { page: "images/page8.jpg", badge: "完成🎐", text: "これで、ふうりんの完成です！\nお疲れ様でした。" },
];

// 区切り位置は画像の余白を解析して決定する。rows/cols は解析失敗時の目安にも使う。
const LAYOUTS = {
  "images/page1.jpg": { count: 4, rows: 2, cols: 2 },
  "images/page2.jpg": { count: 5, rows: 3, cols: 2 },
  "images/page3.jpg": { count: 4, rows: 2, cols: 2 },
  "images/page4.jpg": { count: 4, rows: 2, cols: 2 },
  "images/page5.jpg": { count: 5, rows: 3, cols: 2 },
  "images/page6.jpg": { count: 6, rows: 3, cols: 2 },
  "images/page7.jpg": { count: 9, rows: 5, cols: 2 },
  "images/page8.jpg": { count: 4, rows: 2, cols: 2 },
};

const TOTAL = STEPS.filter((step) => step.num).length;
const cache = new Map();
let current = 0;
let renderId = 0;
let objectUrl = null;

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

const pageCounters = new Map();
for (const step of STEPS) {
  if (!step.num) continue;
  const index = pageCounters.get(step.page) || 0;
  step.panelIndex = index;
  pageCounters.set(step.page, index + 1);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`画像を読み込めません: ${src}`));
    image.src = src;
  });
}

function setLoading(on, text = "画像からコマを自動切り出し中…") {
  imageStage.classList.toggle("is-loading", on);
  imageStatus.hidden = !on;
  imageStatus.textContent = text;
}

function makeAnalysis(image) {
  const scale = Math.min(1, 1000 / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvasを利用できません");
  ctx.drawImage(image, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;
  const ink = new Uint8Array(width * height);
  for (let i = 0, p = 0; i < data.length; i += 4, p += 1) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const light = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    ink[p] = light < 238 || (light < 248 && chroma > 18) ? 1 : 0;
  }
  return { width, height, scale, ink };
}

function project(a, box, axis) {
  const x0 = Math.max(0, Math.floor(box.x));
  const y0 = Math.max(0, Math.floor(box.y));
  const x1 = Math.min(a.width, Math.ceil(box.x + box.w));
  const y1 = Math.min(a.height, Math.ceil(box.y + box.h));
  const length = axis === "x" ? x1 - x0 : y1 - y0;
  const scores = new Float32Array(Math.max(0, length));
  if (axis === "x") {
    const h = Math.max(1, y1 - y0);
    for (let x = x0; x < x1; x += 1) {
      let total = 0;
      for (let y = y0; y < y1; y += 1) total += a.ink[y * a.width + x];
      scores[x - x0] = total / h;
    }
  } else {
    const w = Math.max(1, x1 - x0);
    for (let y = y0; y < y1; y += 1) {
      let total = 0;
      for (let x = x0; x < x1; x += 1) total += a.ink[y * a.width + x];
      scores[y - y0] = total / w;
    }
  }
  return scores;
}

function contentBounds(a) {
  const full = { x: 0, y: 0, w: a.width, h: a.height };
  const xs = project(a, full, "x");
  const ys = project(a, full, "y");
  let l = 0, r = a.width - 1, t = 0, b = a.height - 1;
  while (l < r && xs[l] < 0.006) l += 1;
  while (r > l && xs[r] < 0.006) r -= 1;
  while (t < b && ys[t] < 0.006) t += 1;
  while (b > t && ys[b] < 0.006) b -= 1;
  const pad = Math.max(4, Math.round(Math.min(a.width, a.height) * 0.008));
  return {
    x: Math.max(0, l - pad),
    y: Math.max(0, t - pad),
    w: Math.min(a.width, r + pad + 1) - Math.max(0, l - pad),
    h: Math.min(a.height, b + pad + 1) - Math.max(0, t - pad),
  };
}

function findDivider(scores, target, radius) {
  const start = Math.max(2, Math.floor(target - radius));
  const end = Math.min(scores.length - 3, Math.ceil(target + radius));
  let best = Math.round(target);
  let bestScore = Infinity;
  for (let i = start; i <= end; i += 1) {
    const smooth = scores[i - 2] * 0.1 + scores[i - 1] * 0.2 + scores[i] * 0.4 + scores[i + 1] * 0.2 + scores[i + 2] * 0.1;
    const score = smooth + Math.abs(i - target) / Math.max(1, radius) * 0.012;
    if (score < bestScore) {
      best = i;
      bestScore = score;
    }
  }
  return best;
}

function trimBox(a, box) {
  const xs = project(a, box, "x");
  const ys = project(a, box, "y");
  let l = 0, r = xs.length - 1, t = 0, b = ys.length - 1;
  while (l < r && xs[l] < 0.008) l += 1;
  while (r > l && xs[r] < 0.008) r -= 1;
  while (t < b && ys[t] < 0.008) t += 1;
  while (b > t && ys[b] < 0.008) b -= 1;
  const pad = Math.max(4, Math.round(Math.min(box.w, box.h) * 0.025));
  const x = Math.max(box.x, box.x + l - pad);
  const y = Math.max(box.y, box.y + t - pad);
  const x2 = Math.min(box.x + box.w, box.x + r + 1 + pad);
  const y2 = Math.min(box.y + box.h, box.y + b + 1 + pad);
  return { x, y, w: Math.max(1, x2 - x), h: Math.max(1, y2 - y) };
}

function density(a, box) {
  let total = 0, samples = 0;
  const x0 = Math.floor(box.x), y0 = Math.floor(box.y);
  const x1 = Math.ceil(box.x + box.w), y1 = Math.ceil(box.y + box.h);
  for (let y = y0; y < y1; y += 2) {
    for (let x = x0; x < x1; x += 2) {
      total += a.ink[y * a.width + x] || 0;
      samples += 1;
    }
  }
  return samples ? total / samples : 0;
}

function detectBoxes(a, layout) {
  const area = contentBounds(a);
  const xs = project(a, area, "x");
  const ys = project(a, area, "y");
  const xb = [0], yb = [0];
  for (let c = 1; c < layout.cols; c += 1) {
    const target = xs.length * c / layout.cols;
    xb.push(findDivider(xs, target, xs.length / layout.cols / 3));
  }
  xb.push(xs.length);
  for (let r = 1; r < layout.rows; r += 1) {
    const target = ys.length * r / layout.rows;
    yb.push(findDivider(ys, target, ys.length / layout.rows / 3));
  }
  yb.push(ys.length);

  const cells = [];
  for (let r = 0; r < layout.rows; r += 1) {
    for (let c = 0; c < layout.cols; c += 1) {
      const box = trimBox(a, {
        x: area.x + xb[c], y: area.y + yb[r],
        w: xb[c + 1] - xb[c], h: yb[r + 1] - yb[r],
      });
      cells.push({ box, score: density(a, box), order: r * layout.cols + c });
    }
  }

  return cells
    .sort((one, two) => two.score - one.score)
    .slice(0, layout.count)
    .sort((one, two) => one.order - two.order)
    .map((cell) => cell.box);
}

function toBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("切り出しに失敗しました")), "image/jpeg", 0.94);
  });
}

async function crop(image, a, box) {
  const ratio = 1 / a.scale;
  const sx = Math.max(0, Math.floor(box.x * ratio));
  const sy = Math.max(0, Math.floor(box.y * ratio));
  const sw = Math.min(image.naturalWidth - sx, Math.ceil(box.w * ratio));
  const sh = Math.min(image.naturalHeight - sy, Math.ceil(box.h * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, sw);
  canvas.height = Math.max(1, sh);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvasを利用できません");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
  return toBlob(canvas);
}

async function makePanels(page) {
  const layout = LAYOUTS[page];
  const image = await loadImage(page);
  const analysis = makeAnalysis(image);
  const boxes = detectBoxes(analysis, layout);
  return Promise.all(boxes.map((box) => crop(image, analysis, box)));
}

function getPanels(page) {
  if (!cache.has(page)) {
    cache.set(page, makePanels(page).catch((error) => {
      cache.delete(page);
      throw error;
    }));
  }
  return cache.get(page);
}

async function showImage(step, id) {
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }
  imageStage.classList.remove("has-warning");
  imageStatus.hidden = true;

  if (!step.num) {
    setLoading(false);
    stepImage.src = step.page;
    stepImage.alt = step.badge === "表紙" ? "ふうりん工作の表紙" : "完成したふうりん";
    return;
  }

  setLoading(true);
  stepImage.removeAttribute("src");
  stepImage.alt = `手順${step.num}の画像`;
  try {
    const panels = await getPanels(step.page);
    if (id !== renderId) return;
    const panel = panels[step.panelIndex];
    if (!panel) throw new Error("該当コマがありません");
    objectUrl = URL.createObjectURL(panel);
    stepImage.src = objectUrl;
    setLoading(false);
  } catch (error) {
    console.error(error);
    if (id !== renderId) return;
    stepImage.src = step.page;
    setLoading(false);
    imageStage.classList.add("has-warning");
    imageStatus.hidden = false;
    imageStatus.textContent = "自動切り出しに失敗したため、元ページを表示しています。";
  }
}

function preloadNext() {
  const next = STEPS[current + 1];
  if (!next?.num || cache.has(next.page)) return;
  const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 250));
  schedule(() => getPanels(next.page).catch(() => {}));
}

function render() {
  const step = STEPS[current];
  const id = ++renderId;
  stepText.textContent = step.text;
  stepBadge.textContent = step.badge || `手順 ${step.num} / ${TOTAL}`;
  const done = step.num || (current === 0 ? 0 : TOTAL);
  progressFill.style.width = `${done / TOTAL * 100}%`;
  progressLabel.textContent = `${done} / ${TOTAL}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === STEPS.length - 1;
  qrBlock.style.display = current === 0 ? "flex" : "none";
  showImage(step, id).then(preloadNext);
}

function move(amount) {
  const next = current + amount;
  if (next < 0 || next >= STEPS.length) return;
  current = next;
  render();
}

prevBtn.addEventListener("click", () => move(-1));
nextBtn.addEventListener("click", () => move(1));
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

let touchX = null;
imageStage.addEventListener("touchstart", (event) => {
  touchX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });
imageStage.addEventListener("touchend", (event) => {
  if (touchX === null) return;
  const distance = (event.changedTouches[0]?.clientX ?? touchX) - touchX;
  touchX = null;
  if (Math.abs(distance) >= 55) move(distance > 0 ? -1 : 1);
}, { passive: true });

render();
