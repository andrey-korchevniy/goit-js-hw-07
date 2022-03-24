import { galleryItems } from './gallery-items.js';
// Change code below this line

// строим галерею
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems))

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
         
    })  
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.9,
    captionsData: 'alt',
    captionDelay: 250,
});