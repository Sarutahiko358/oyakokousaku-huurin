const STEPS = [
  {
    page: "images/cover.jpg",
    badge: "表紙",
    text: "ふうりんを作ろう！\n8月度　親子工作",
  },
  { page: "images/page1.jpg", num: 1, text: "1cm間隔で9本の線をひく" },
  { page: "images/page1.jpg", num: 2, text: "下から2本を除いて図の様に線をひく" },
  { page: "images/page1.jpg", num: 3, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page1.jpg", num: 4, text: "柄の色紙を用意する" },

  { page: "images/page2.jpg", num: 5, text: "柄色紙の裏面に線をひく（赤色の線）" },
  { page: "images/page2.jpg", num: 6, text: "5の赤線を切り取る" },
  { page: "images/page2.jpg", num: 7, text: "図の様に6をA外側　表面に貼り付ける" },
  {
    page: "images/page2.jpg",
    num: 8,
    text: "外側裏面（全面線がある方）を向け図の様に切る\n下から2本は後から使います",
  },
  {
    page: "images/page2.jpg",
    num: 9,
    text: "3本位ずつそろえ、一つ穴パンチで中央の印が真ん中に来るように置き\n穴を開ける",
  },

  { page: "images/page3.jpg", num: 10, text: "右図　8本共、穴を開ける" },
  { page: "images/page3.jpg", num: 11, text: "1cm間隔で線をひき、縦にも図の様に線をひく" },
  { page: "images/page3.jpg", num: 12, text: "表面に図の様に線を引き、中央が分かるように印を付ける" },
  { page: "images/page3.jpg", num: 13, text: "キラキラ色紙の裏面に5と同様に線を引く" },

  { page: "images/page4.jpg", num: 14, text: "13の赤線を切り取る" },
  { page: "images/page4.jpg", num: 15, text: "B内側表面に14を貼り付ける" },
  {
    page: "images/page4.jpg",
    num: 16,
    text: "内側裏面（全面線がある方）を向け線通りに切り\nパンチで穴を開ける",
  },
  {
    page: "images/page4.jpg",
    num: 17,
    text:
      "①カッティングボードの上に切り取った折り紙を置き矢印の所にボンドを付ける\n②等間隔で十字に貼り付ける\n③、④　ボンドを付け斜めに貼り付ける",
  },

  { page: "images/page5.jpg", num: 18, text: "左図　同様に同じものをもう一個作る" },
  { page: "images/page5.jpg", num: 19, text: "右図　もう一つのパーツを等間隔に貼り付ける" },
  { page: "images/page5.jpg", num: 20, text: "内側のふうりんも同様に作る" },
  { page: "images/page5.jpg", num: 21, text: "8の下から2本目の内の1本を用意する" },
  { page: "images/page5.jpg", num: 22, text: "1.2cm間隔で16分割する" },

  {
    page: "images/page6.jpg",
    num: 23,
    text: "22の矢印の所にボンドを付け\nメモリが入っている方を中側にして\n輪にする",
  },
  { page: "images/page6.jpg", num: 24, text: "左図　1cmの所を手前に折る（16か所全部）" },
  {
    page: "images/page6.jpg",
    num: 25,
    text: "右図　A（外側）の中央にボンドを付けてBをAの間に\n貼り付ける",
  },
  { page: "images/page6.jpg", num: 26, text: "左図　23を中央に置く" },
  {
    page: "images/page6.jpg",
    num: 27,
    text: "右図　Bの矢印の所にボンドを付け、23輪の内側\nの線に合わせて貼り付ける",
  },
  { page: "images/page6.jpg", num: 28, text: "図の様に対角線に貼り付けていく" },

  { page: "images/page7.jpg", num: 29, text: "左図　A外側も折り曲げる" },
  { page: "images/page7.jpg", num: 30, text: "右図　ボンドを付けて今度は順番に付けていく" },
  { page: "images/page7.jpg", num: 31, text: "左図　ふうりんの側の出来上がり" },
  { page: "images/page7.jpg", num: 32, text: "右図　8の残りの1つを用意する" },
  { page: "images/page7.jpg", num: 33, text: "左図　中側に一周、貼り付ける" },
  {
    page: "images/page7.jpg",
    num: 34,
    text:
      "左図　短冊（3cm×12cm）は色紙を貼ったり、絵を描いたり\nオリジナルなもの作って楽しみましょう。",
  },
  { page: "images/page7.jpg", num: 35, text: "右図　パンチで穴を開ける" },
  { page: "images/page7.jpg", num: 36, text: "左図　ふうりんを用意する" },
  { page: "images/page7.jpg", num: 37, text: "右図　既成の短冊をはずす" },

  { page: "images/page8.jpg", num: 38, text: "左図　短冊を付け替える" },
  { page: "images/page8.jpg", num: 39, text: "右図　出来上がったふうりんの側にひもを通す" },
  { page: "images/page8.jpg", num: 40, text: "左図　ストッパービーズを付ける" },
  { page: "images/page8.jpg", num: 41, text: "右図　かた結びをする" },

  {
    page: "images/page8.jpg",
    badge: "完成🎐",
    text: "これで、ふうりんの完成です！\nお疲れ様でした。",
  },
];

const TOTAL_STEPS = STEPS.filter((s) => s.num).length;

let current = 0;

const stepImage = document.getElementById("stepImage");
const stepBadge = document.getElementById("stepBadge");
const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const qrBlock = document.getElementById("qrBlock");

function render() {
  const step = STEPS[current];

  stepImage.src = step.page;
  stepText.textContent = step.text;
  stepBadge.textContent = step.badge ? step.badge : `手順 ${step.num} / ${TOTAL_STEPS}`;

  const progressCount = step.num ? step.num : current === 0 ? 0 : TOTAL_STEPS;
  progressFill.style.width = `${(progressCount / TOTAL_STEPS) * 100}%`;
  progressLabel.textContent = `${progressCount} / ${TOTAL_STEPS}`;

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === STEPS.length - 1;

  qrBlock.style.display = current === 0 ? "flex" : "none";
}

function goPrev() {
  if (current > 0) {
    current -= 1;
    render();
  }
}

function goNext() {
  if (current < STEPS.length - 1) {
    current += 1;
    render();
  }
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goPrev();
  if (e.key === "ArrowRight") goNext();
});

render();
