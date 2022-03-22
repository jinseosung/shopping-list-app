const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const btn = document.querySelector(".footer__btn");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", `${Date.now()}`);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
          <i class="fas fa-trash-alt" data-id=${Date.now()}></i>
        </button>
      </div>
      <div class="item__divider"></div>
      `;
  return itemRow;
}

btn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
