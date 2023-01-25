import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");

const makeGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img class="gallery__image lazyload"
              loading="lazy"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
  })
  .join("");

//Додаю розмітку в html
galleryContainerEl.insertAdjacentHTML("beforeend", makeGallery);

galleryContainerEl.addEventListener("click", onGallaryContainerClick);
function onGallaryContainerClick(evt) {
  //Відключаю  відкриття в новому вікні
  evt.preventDefault();

  //Додавю Click по IMG
  const isGalleryImage = evt.target.closest(".gallery__image");
  if (!isGalleryImage) {
    return;
  }
  //Add BasicLigthBox
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">`);

  instance.show();
  const visible = basicLightbox.visible();

  //Перевірка на відкриту модалку
  if (visible) {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        //Закриваємо вікно при натисканні "Escape"
        instance.close();
        // Pнімаємо слухача з клавіатури, піс я натискання
        document.removeEventListener("keydown", evt);
      }
    });
  }
}
