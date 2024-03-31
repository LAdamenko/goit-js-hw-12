import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImges } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

const refs = {
  formEl: document.querySelector('.input-form'),
  infoEl: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-btn'),
  card: document.querySelector(".gallery"),
};

let query;
let currentPage = 1;
let maxPage = 0;
const per_page = 15;
const loader = document.querySelector('.loader');

refs.formEl.addEventListener("submit", async e => {
    e.preventDefault();
    
    query = refs.formEl.elements.query.value;
    currentPage = 1;

    if (query === "") {
        iziToast.warning({
            color: 'yellow',
            message: 'You forgot to describe the image',
            position: 'topRight',
        });
      refs.infoEl.innerHTML = "";
    } else {
        refs.infoEl.innerHTML = "";
        loader.classList.remove('is-hidden');
        try {
            const data = await getImges(query, currentPage);
            maxPage = Math.ceil(data.totalHits / per_page);
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
        } catch (err) {
            iziToast.error({
                    color: 'red',
                    message: `❌ Sorry, there was a mistake. Please try again!`,
                    position: 'topRight',
                });
                refs.infoEl.innerHTML = '';
        } finally {
            loader.classList.add('is-hidden');
            checkBtnStatus();
            };        
    }
});

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  currentPage += 1;
  loader.classList.remove('is-hidden');
  try {
    const data = await getImges(query, currentPage);
    const markup = imagesTemplate(data.hits);
    refs.infoEl.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    iziToast.error({
                    color: 'red',
                    message: `❌ Sorry, there was a mistake. Please try again!`,
                    position: 'topRight',
                });
                refs.infoEl.innerHTML = '';
  }

  myScroll();
  checkBtnStatus();
  loader.classList.add('is-hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    refs.btnLoadMore.classList.add('is-hidden');
    iziToast.info({
            color: 'blue',
            message: "We're sorry, but you've reached the end of search results.",
            position: 'bottomCenter',
        });
  } else {
    refs.btnLoadMore.classList.remove('is-hidden');
  }
}

function myScroll() {
  const height = refs.card.firstChild.getBoundingClientRect().height * 2;
  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}