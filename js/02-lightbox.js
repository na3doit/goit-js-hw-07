import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerElem = document.querySelector(".gallery");

const makeGalleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
`;
  })
  .join("");

//Додаю (рендерю) в хтмл розмітку
galleryContainerElem.insertAdjacentHTML("beforeend", makeGalleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
