import { galleryItems } from './gallery-items.js';
// Change code below this line

// строим галерею
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems))

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
         
    })  
    .join('');
}

// делаем делегирование
galleryContainer.addEventListener('click', onImageClick);

// рисуем модалку
function onImageClick(event) {
    event.preventDefault();
    
    // проверка на область нажатия (исключаем "молоко")
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };

    // закрытие по нажатию ESC
    document.addEventListener('keydown', ev => {
        if (ev.key === 'Escape') {
            instance.close();
        };
    })   
    
    // получаем ссылку на большую картинку
    const largeImageURL = event.target.dataset.source;

    // библиотека показывает модалку
    const instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`)
    
    instance.show();
}

