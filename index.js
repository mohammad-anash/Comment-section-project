const InputEl = document.querySelector("#input");
const iconEl = document.querySelector(".icon");
const textContainer = document.querySelector(".text-container");
const countEl = document.querySelector(".count");

const textTransfrom = () => {
  const createDiv = document.createElement("div");
  createDiv.classList.add("text");
  createDiv.textContent = InputEl.value;
  InputEl.value = "";
  textContainer.appendChild(createDiv);
};

let count = 1;
iconEl.addEventListener("click", () => {
  if (InputEl.value.length >= 1) {
    textTransfrom();
    countEl.textContent = count++;
  }
});
