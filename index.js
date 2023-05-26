const upload_btn = document.querySelector("#upload-btn");
var uploaded_logo = "";

upload_btn.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_logo = reader.result;
    document.querySelector(
      "#logo-div"
    ).style.backgroundImage = `url(${uploaded_logo})`;
  });
  reader.readAsDataURL(this.files[0]);
});

const choose_color = document.querySelector(".color-btn");
const image = document.querySelector("#img-div >img");
const load_button = document.querySelector(".icon-container");
choose_color.addEventListener("click", function (e) {
  console.log(e.target);
  let color = e.target.id;
  image.setAttribute("src", "img/loader_icon.svg");
  setTimeout(() => {
    load_button.style.backgroundColor = color;
    image.setAttribute("src", `img/${color}umbrella.png`);
  }, 1000);
});