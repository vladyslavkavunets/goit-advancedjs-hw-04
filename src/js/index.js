import { save, load } from './local-storage.js';
import localStorageObj from './local-storage.js';
import SimpleLightbox from 'simplelightbox';

new SimpleLightbox('.js-gallery-link', {
    captionsData: 'alt',
    captionDelay: 1000,
});

console.log(localStorageObj);

const refs = {
  readLsBtn: document.querySelector('.js-read-ls-btn'),
};

const product = {
  title: 'Apples',
  price: 100,
};

save('product-info', product);

const onReadLsBtnClick = event => {
    const dataFromLS = load('product-info');

    if (dataFromLS === null) {
      return;
    }

    console.log(dataFromLS);
};

refs.readLsBtn.addEventListener('click', onReadLsBtnClick);
