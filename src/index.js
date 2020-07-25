import debounce from 'lodash.debounce';
import './styles.css';
import getCountries from './js/getCountries.js';
import getCountriesSQ from './js/getCountriesSQ.js';

const refs = {
  form: document.querySelector('.serch__form'),
  input: document.querySelector('.serch__input'),
  ul: document.querySelector('.countries'),
};

refs.input.addEventListener(
  'input',
  debounce(() => {
    setUrl();
  }, 500),
);

function setUrl() {
  let inputValue = refs.input.value;

  if (inputValue === '') {
    return;
  }
  refs.ul.innerHTML = '';
  getCountries(inputValue).then(getCountriesSQ);
}
