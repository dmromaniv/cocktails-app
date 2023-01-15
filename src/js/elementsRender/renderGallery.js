// import './alphabet'

// import { drinksData } from '../api';

import sprite from '../../images/svg/icons-sprite.svg';

import { elementsRef } from '../elementsRefs/references';
import { createCocktailCardMarkup } from '../elementsMarkup/cocktailCard';
import Pagination from 'tui-pagination';

let currentPage = 1;
let cardsPerPage = calcCardsPerPage();

// Generate cocktails list
export function renderGallery(cocktailsData, elementRef, createCardMarkup) {
  let cocktailsListMarkup = '';
  cocktailsData
    .filter((_, index) => {
      let start = (currentPage - 1) * cardsPerPage;
      let end = currentPage * cardsPerPage;

      if (index >= start && index < end) return true;
    })
    .forEach(cocktail => {
      cocktailsListMarkup += createCardMarkup(cocktail);
    });
  elementRef.innerHTML = cocktailsListMarkup;
}

export function calcCardsPerPage() {
  const width = window.innerWidth;

  if (width > 768 && width < 1199) {
    return 6;
  } else if (width > 1199) {
    return 9;
  } else {
    return 3;
  }
}

export function createPagination(drinksData, elementRef, cardMarkup) {
  currentPage = 1;
  elementsRef.paginationEl.innerHTML = '';
  console.log(cardsPerPage, drinksData.length);
  if (cardsPerPage < drinksData.length) {
    console.log('Page: ', currentPage);
    const options = {
      totalItems: drinksData.length,
      itemsPerPage: cardsPerPage,
      visiblePages: 3,
      page: 1,
      centerAlign: false,
    };
    const pagination = new Pagination(elementsRef.paginationEl, options);

    pagination.on('afterMove', event => {
      currentPage = event.page;
      console.log('Current: ', currentPage);
      renderGallery(drinksData, elementRef, cardMarkup);
    });
  }
}