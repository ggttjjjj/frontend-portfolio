// 卡片本身是 <a> 链接，默认直接跳转。
// 如果以后想统一改成新窗口打开，给卡片加上 data-url 属性即可生效。
const grid = document.querySelector(".works");

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (card === null) return;

  const target = card.dataset.url;
  if (target) {
    event.preventDefault();
    window.open(target);
  }
});
