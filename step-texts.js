const STEP_TEXTS = {
  "images/cover.jpg": "おしゃれな風鈴を作ろう",

  "images/page/Page (1).jpg": "1cm間隔で9本の線をひく",

  "images/page/Page (2).jpg": "下から2本を除いて図の様に線をひく",

  "images/page/Page (3).jpg": "表面に図の様に線を引き、中央が分かるように印を付ける",

  "images/page/Page (4).jpg": "柄の色紙を用意する",

  "images/page/Page (5).jpg": "柄色紙の裏面に線をひく（赤色の線）",

  "images/page/Page (6).jpg": "5の赤線を切り取る",

  "images/page/Page (7).jpg": "図の様に6をA外側　表面に貼り付ける",

  "images/page/Page (8).jpg": "外側裏面（全面線がある方）を向け図の様に切る",

  "images/page/Page (9).jpg": "3本位ずつそろえ、一つ穴パンチで中央の印が真ん中に来るように置き\n穴を開ける",

  "images/page/Page (10).jpg": "右図　8本共、穴を開ける",

  "images/page/Page (11).jpg": "1cm間隔で線をひき、縦にも図の様に線をひく",

  "images/page/Page (12).jpg": "表面に図の様に線を引き、中央が分かるように印を付ける",

  "images/page/Page (13).jpg": "キラキラ色紙の裏面に5と同様に線を引く",

  "images/page/Page (14).jpg": "13の赤線を切り取る",

  "images/page/Page (15).jpg": "B内側表面に14を貼り付ける",

  "images/page/Page (16).jpg": "内側裏面（全面線がある方）を向け線通りに切り\nパンチで穴を開ける",

  "images/page/Page (17).jpg": "①カッティングボードの上に切り取った折り紙を置き矢印の所にボンドを付ける\n②等間隔で十字に貼り付ける\n③、④　ボンドを付け斜めに貼り付ける",

  "images/page/Page (18・19)①.jpg": "18　同様に同じものをもう一個作る\n19　もう一つのパーツを等間隔に貼り付ける",

  "images/page/Page (18・19)②.jpg": "18　同様に同じものをもう一個作る\n19　もう一つのパーツを等間隔に貼り付ける",

  "images/page/Page (20).jpg": "内側のふうりんも同様に作る",

  "images/page/Page (21・22).jpg": "21　8の下から2本目の内の1本を用意する\n22　1.2cm間隔で16分割する",

  "images/page/Page (23).jpg": "22の矢印の所にボンドを付け\nメモリが入っている方を中側にして\n輪にする",

  "images/page/Page (24・25).jpg": "24　1cmの所を手前に折る（16か所全部）\n25　A（外側）の中央にボンドを付けてBをAの間に貼り付ける",

  "images/page/Page (26・27).jpg": "26　23を中央に置く\n27　Bの矢印の所にボンドを付け、23輪の内側の線に合わせて貼り付ける",

  "images/page/Page (28)①.jpg": "図の様に対角線に貼り付けていく",

  "images/page/Page (28)②.jpg": "図の様に対角線に貼り付けていく",

  "images/page/Page (28)③.jpg": "図の様に対角線に貼り付けていく",

  "images/page/Page (29・30).jpg": "29　A外側も折り曲げる\n30　ボンドを付けて今度は順番に付けていく",

  "images/page/Page (31・32).jpg": "31　ふうりんの側の出来上がり\n32　8の残りの1つを用意する",

  "images/page/Page (33).jpg": "中側に一周、貼り付ける",

  "images/page/Page (34・35).jpg": "34　短冊（3cm×12cm）は色紙を貼ったり、絵を描いたり、オリジナルなもの作って楽しみましょう。\n35　パンチで穴を開ける",

  "images/page/Page (36・37).jpg": "36　ふうりんを用意する\n37　既成の短冊をはずす",

  "images/page/Page (38・39).jpg": "38　短冊を付け替える\n39　出来上がったふうりんの側にひもを通す",

  "images/page/Page (40・41).jpg": "40　ストッパービーズを付ける\n41　かた結びをする",

  "images/page/Page (裏表紙).jpg": "これで、ふうりんの完成です！\nお疲れ様でした。",
};

const STEP_GUIDANCE = {
  "images/page/Page (1).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "後から切る目印です。",
  },
  "images/page/Page (2).jpg": {
    type: "later",
    label: "📌 あとで使います",
    text: "下の2本は別用途に使います。",
  },
  "images/page/Page (3).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "後から穴を開ける目印です。",
  },
  "images/page/Page (5).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "9cm×1cmのものは、9cm×7cmのものと組み合わせて、9cm×8cmのものと同じように使います。",
  },
  "images/page/Page (7).jpg": {
    type: "warning",
    label: "⚠️ 注意",
    text: "端がめくれやすいので、しっかり貼り付けてください。",
  },
  "images/page/Page (8).jpg": {
    type: "later",
    label: "📌 あとで使います",
    text: "下から2本は後から使います。",
  },
  "images/page/Page (12).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "後ほど穴を開ける目印です。",
  },
  "images/page/Page (13).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "手順5と同じ方法で、8.5cm×8cm、8.5cm×7cm、8.5cm×1cmになるように線を引いてください。",
  },
  "images/page/Page (21・22).jpg": {
    type: "point",
    label: "💡 ポイント",
    text: "のりしろを残して、16等分してください。\n4つおきに印を付けておくと、後で貼り付ける位置が分かりやすくなります。",
  },
};

if (typeof SLIDES !== "undefined") {
  SLIDES.forEach((slide) => {
    if (Object.prototype.hasOwnProperty.call(STEP_TEXTS, slide.page)) {
      slide.text = STEP_TEXTS[slide.page];
    }
    slide.guidance = STEP_GUIDANCE[slide.page] || null;
  });

  const stepInfo = document.querySelector(".step-info");
  const stepBadgeElement = document.getElementById("stepBadge");
  const stepTextElement = document.getElementById("stepText");
  const stepImageElement = document.getElementById("stepImage");

  if (stepInfo && stepBadgeElement && stepTextElement && stepImageElement) {
    const taskLabel = document.createElement("p");
    taskLabel.className = "step-task-label";
    taskLabel.textContent = "やること";
    stepInfo.insertBefore(taskLabel, stepTextElement);

    const guidanceBox = document.createElement("aside");
    guidanceBox.className = "step-guidance";
    guidanceBox.hidden = true;
    guidanceBox.setAttribute("aria-live", "polite");

    const guidanceLabel = document.createElement("strong");
    guidanceLabel.className = "step-guidance-label";

    const guidanceText = document.createElement("p");
    guidanceText.className = "step-guidance-text";

    guidanceBox.append(guidanceLabel, guidanceText);
    stepInfo.appendChild(guidanceBox);

    const updateGuidance = () => {
      const currentPage = stepImageElement.getAttribute("src") || "";
      const slide = SLIDES.find((item) => item.page === currentPage);
      const isRegularStep = Boolean(slide && Number.isInteger(slide.start));

      taskLabel.hidden = !isRegularStep;

      if (!slide || !slide.guidance || !isRegularStep) {
        guidanceBox.hidden = true;
        guidanceBox.className = "step-guidance";
        guidanceLabel.textContent = "";
        guidanceText.textContent = "";
        return;
      }

      guidanceBox.hidden = false;
      guidanceBox.className = `step-guidance step-guidance--${slide.guidance.type}`;
      guidanceLabel.textContent = slide.guidance.label;
      guidanceText.textContent = slide.guidance.text;
    };

    new MutationObserver(updateGuidance).observe(stepImageElement, {
      attributes: true,
      attributeFilter: ["src"],
    });

    if (typeof render === "function") {
      render();
    }
    updateGuidance();
  } else if (typeof render === "function") {
    render();
  }
}
