(() => {
  const stage = document.getElementById("imageStage");
  const image = document.getElementById("stepImage");
  if (!stage || !image) return;

  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let panStartX = 0;
  let panStartY = 0;
  let panOriginX = 0;
  let panOriginY = 0;
  let pinching = false;
  let panning = false;
  let suppressSwipe = false;

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "zoom-reset-btn";
  resetButton.textContent = "元の大きさ";
  resetButton.setAttribute("aria-label", "画像の拡大を元に戻す");

  const hint = document.createElement("p");
  hint.className = "zoom-hint";
  hint.textContent = "2本指で拡大できます";

  stage.append(resetButton, hint);

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function touchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }

  function clampTranslation() {
    const scaledWidth = image.offsetWidth * scale;
    const scaledHeight = image.offsetHeight * scale;
    const maxX = Math.max(0, (scaledWidth - stage.clientWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - stage.clientHeight) / 2);

    translateX = clamp(translateX, -maxX, maxX);
    translateY = clamp(translateY, -maxY, maxY);
  }

  function applyTransform() {
    clampTranslation();
    image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    const zoomed = scale > 1.01;
    stage.classList.toggle("is-zoomed", zoomed);

    if (!zoomed) {
      translateX = 0;
      translateY = 0;
      image.style.transform = "translate3d(0, 0, 0) scale(1)";
    }
  }

  function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    pinching = false;
    panning = false;
    suppressSwipe = false;
    stage.classList.remove("is-zoomed", "is-panning");
    image.style.transform = "translate3d(0, 0, 0) scale(1)";
  }

  resetButton.addEventListener("click", resetZoom);
  image.addEventListener("load", resetZoom);

  new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.attributeName === "src")) resetZoom();
  }).observe(image, { attributes: true, attributeFilter: ["src"] });

  stage.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      pinching = true;
      panning = false;
      suppressSwipe = true;
      pinchStartDistance = touchDistance(event.touches);
      pinchStartScale = scale;
      stage.classList.remove("is-panning");
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (event.touches.length === 1 && scale > 1.01) {
      panning = true;
      suppressSwipe = true;
      panStartX = event.touches[0].clientX;
      panStartY = event.touches[0].clientY;
      panOriginX = translateX;
      panOriginY = translateY;
      stage.classList.add("is-panning");
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, { passive: false });

  stage.addEventListener("touchmove", (event) => {
    if (event.touches.length === 2 && pinching) {
      const distance = touchDistance(event.touches);
      scale = clamp(pinchStartScale * (distance / Math.max(1, pinchStartDistance)), MIN_SCALE, MAX_SCALE);
      applyTransform();
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (event.touches.length === 1 && panning && scale > 1.01) {
      translateX = panOriginX + event.touches[0].clientX - panStartX;
      translateY = panOriginY + event.touches[0].clientY - panStartY;
      applyTransform();
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, { passive: false });

  stage.addEventListener("touchend", (event) => {
    if (suppressSwipe || pinching || panning || scale > 1.01) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    if (event.touches.length === 1 && scale > 1.01) {
      pinching = false;
      panning = true;
      panStartX = event.touches[0].clientX;
      panStartY = event.touches[0].clientY;
      panOriginX = translateX;
      panOriginY = translateY;
      stage.classList.add("is-panning");
      return;
    }

    if (event.touches.length === 0) {
      pinching = false;
      panning = false;
      suppressSwipe = false;
      stage.classList.remove("is-panning");
      if (scale < 1.05) resetZoom();
      else applyTransform();
    }
  }, { passive: false });

  stage.addEventListener("touchcancel", (event) => {
    if (suppressSwipe || scale > 1.01) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    pinching = false;
    panning = false;
    suppressSwipe = false;
    stage.classList.remove("is-panning");
    applyTransform();
  }, { passive: false });

  window.addEventListener("resize", () => {
    if (scale > 1.01) applyTransform();
  });
})();
