import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImges } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

const refs = {
  formEl: document.querySelector('.input-form'),
  infoEl: document.querySelector('.gallery'),
};
const loader = document.querySelector('.loader');

refs.formEl.addEventListener("submit", e => {
    e.preventDefault();
    
    const query = refs.formEl.elements.query.value;
    if (query === "") {
        iziToast.warning({
            color: 'yellow',
            message: 'You forgot to describe the image',
            position: 'topRight',
        });
    } else {
        refs.infoEl.innerHTML = "";
        loader.classList.remove('is-hidden');
        getImges(query)
            .then(data => {
                const markup = imagesTemplate(data.hits);
                refs.infoEl.innerHTML = markup;
                
                const lightbox = new SimpleLightbox('.gallery-link', {
                    captionsData: 'alt',
                    captionDelay: 250,
                    overlayOpacity: 0.8,
                });
                lightbox.refresh();

                if (!markup.length) {
                    iziToast.error({
                        color: 'red',
                        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
                        position: 'topRight',
                    });
                    loader.classList.add('is-hidden');
                }
            })
            .catch(err => {
                iziToast.error({
                    color: 'red',
                    message: `❌ Sorry, there was a mistake. Please try again!`,
                    position: 'topRight',
                });
                refs.infoEl.innerHTML = '';
            })
            .finally(() => {
                loader.classList.add('is-hidden');
            });
        
        
    }
});
