const shell = document.querySelector(".h5-shell");
const progressBar = document.querySelector("#progressBar");
const quizButtons = document.querySelectorAll(".quiz-card button");
const feedback = document.querySelector("#feedback");

function updateProgress() {
  const maxScroll = shell.scrollHeight - shell.clientHeight;
  const progress = maxScroll <= 0 ? 0 : (shell.scrollTop / maxScroll) * 100;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

shell.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quizButtons.forEach((item) => {
      item.classList.remove("correct", "wrong");
    });

    if (button.dataset.answer === "right") {
      button.classList.add("correct");
      feedback.textContent = "答对了。骨笛证明先民已经能用材料、孔位和气流来组织声音。";
      return;
    }

    button.classList.add("wrong");
    feedback.textContent = "再想想：关键不是现代记谱，而是有意识地制作并控制音高。";
  });
});
