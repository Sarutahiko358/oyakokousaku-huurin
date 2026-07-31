(() => {
  const currentSectionLabel = document.getElementById("currentSectionLabel");
  const progressLabel = document.getElementById("progressLabel");
  const stepBadge = document.getElementById("stepBadge");

  if (!currentSectionLabel || !progressLabel || !stepBadge) return;

  const sections = [
    { start: 1, end: 10, title: "外側飾りの準備" },
    { start: 11, end: 16, title: "内側飾りの準備" },
    { start: 17, end: 20, title: "飾りを放射状に組み立てる" },
    { start: 21, end: 33, title: "放射状の飾りを風鈴形にする" },
    { start: 34, end: 37, title: "短冊を付け替える準備" },
    { start: 38, end: 41, title: "風鈴に短冊・飾りを取り付ける" },
  ];

  function updateCurrentSection() {
    const badge = stepBadge.textContent.trim();
    let title = "作り方の目次";

    if (badge.includes("完成")) {
      title = "完成";
    } else {
      const progress = Number.parseInt(progressLabel.textContent, 10);
      const section = sections.find(({ start, end }) => progress >= start && progress <= end);
      if (section) title = section.title;
    }

    currentSectionLabel.textContent = title;
  }

  const observer = new MutationObserver(updateCurrentSection);
  observer.observe(progressLabel, { childList: true, characterData: true, subtree: true });
  observer.observe(stepBadge, { childList: true, characterData: true, subtree: true });

  updateCurrentSection();
})();
