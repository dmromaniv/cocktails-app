!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequiref7a6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},t.parcelRequiref7a6=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return a.default(e)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return a.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a.default(e,t)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r("iE7OH").register(JSON.parse('{"EVgbq":"index.60ec1ab7.js","lUHFy":"icons-sprite.4751cb04.svg","hYG8u":"favIngridients.8290d7f5.js"}'));var c=r("bpxeT"),s=r("2TvXO");r("lyWaa");var o=r("6JpON"),i=r("1hJrM"),l=(i=r("1hJrM"),{});Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return u.default(e)||d.default(e)||p.default(e)||f.default()};var u=k(r("kMC0W")),d=k(r("7AJDX")),f=k(r("8CtQK")),p=k(r("auk6i"));function k(e){return e&&e.__esModule?e:{default:e}}var v="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";function b(){i.elementsRef.selectMobileEl.innerHTML=e(l)(v).map((function(e){return'<li class="hero__select-option" data-value="'.concat(e.toLowerCase(),'">').concat(e.toUpperCase(),"</li>")})).join(""),i.elementsRef.selectWidescreenEl.innerHTML=e(l)(v).map((function(e){return'<li class="hero__alphabets-item"><button class="hero__alphabets-button button" value="'.concat(e.toLowerCase(),'">').concat(e,"</button></li>")})).join("")}var _,m=r("f187r"),g=r("1X4Nb"),h=r("ekFVM"),y=r("a1YPt"),x=r("8gjq0"),E=r("6L0EN");function L(t){return' \n  <div class="modal cocktail js-cocktail-modal">\n      <button class="button close-btn js-modal-close-btn" type="button">\n        <svg width="32" height="32">\n          <use href="'.concat(e(_),'#close"></use>\n        </svg>\n      </button>\n       <p class="cocktail__title js-cocktail-title">').concat(t.strDrink,'</p>\n    <div class="cocktail__main-content">\n      <div class="cocktail__desc-wrapper">\n        <p class="cocktail__instruction">Instructions:</p>\n        <p class="cocktail__desc js-cocktail-desk">').concat(t.strInstructions,'</p>\n      </div>\n      <div class="cocktail__img-wrapper">\n        <img\n          class="cocktail__img js-cocktail-img"\n          src="').concat(t.strDrinkThumb,'"\n          alt="cocktail"\n        />\n      </div>\n      <div class="cocktail__info-block">\n        <p class="cocktail__info-text">INGREDIENTS</p>\n        <p class="cocktail__info-amount">Per cocktail</p>\n        <ul class="cocktail__ingredients js-cocktail-ingredients">\n        ').concat(function(e){for(var t,n,a="",r=1;r<=15;r+=1)t="strIngredient"+r,e[n="strMeasure"+r]&&e[t]&&(a+='<li cocktail[]><a data-name="'.concat(e[t],'">').concat(e[n]," ").concat(e[t],"</a></li>"));return a}(t),'\n        </ul>\n      </div>\n    </div>\n      <button class="button cocktail__button js-cocktail-add-btn">\n        Add to favorite\n      </button>\n    </div>\n  ')}_=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("lUHFy");h=r("ekFVM"),y=r("a1YPt");function w(e){return'<li class="cocktails__list-item">\n    <div class="cocktail-card" data-id="'.concat(e.idDrink,'">\n        <div class="cocktail-card__img-wrapper">\n            <img class="cocktail-card__img" src="').concat(e.strDrinkThumb,'" alt="cocktail" class="cocktails__img" />\n        </div>\n        <p class="cocktail-card__name">').concat(e.strDrink,'</p>\n        <div class="cocktail-card__btns-block">\n            <button class="button cocktail-card__btn cocktail-card__btn--accent js-btn-more">\n                Learn more\n            </button>\n            <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered js-btn-fav">\n                ').concat((0,h.updateFavBtnContent)(e.idDrink,y.constants.favCocktailStorageKey),"\n            </button>\n        </div>\n    </div>\n</li>")}m=r("f187r");var C=r("5mnqR"),R=r("dSTFh");function M(){return(M=e(c)(e(s).mark((function t(){var n,a,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=[],a=1;case 3:if(!(a<=(0,m.calcCardsPerPage)())){e.next=11;break}return e.next=6,(0,g.getRandomCocktails)();case 6:r=e.sent.drinks,n.push(r);case 8:a++,e.next=3;break;case 11:(0,m.renderGallery)(n.flat(),i.elementsRef.cocktailsListEl,w),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function j(){return(j=e(c)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,S(n.target.value,g.getCocktailsByLetter);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(e){return O.apply(this,arguments)}function O(){return(O=e(c)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.elementsRef.selectValue.firstElementChild.textContent=n.target.textContent,F(),H(),e.next=5,S(n.target.dataset.value,g.getCocktailsByLetter);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=e(c)(e(s).mark((function t(n){var a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=n.target.elements.search.value.trim()){t.next=6;break}e(o).Notify.warning("Please, enter the correct search query"),t.next=9;break;case 6:return t.next=8,S(a,g.getCocktailByName);case 8:document.querySelector(".header").classList.remove("menu-active");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(e,t){return P.apply(this,arguments)}function P(){return(P=e(c)(e(s).mark((function t(n,a){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(n);case 3:r=e.sent,(0,C.showMsgNotFound)(r,i.elementsRef.cocktailsListEl,i.elementsRef.paginationEl),r&&((0,m.createPagination)(r,i.elementsRef.cocktailsListEl,w),(0,m.renderGallery)(r,i.elementsRef.cocktailsListEl,w)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function A(){return(A=e(c)(e(s).mark((function t(n){var a,r,c,o,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.closest("BUTTON")){e.next=2;break}return e.abrupt("return");case 2:if(a=n.target.closest("[data-id]"),r=a.dataset.id,(c=n.target.closest(".js-btn-fav"))&&((0,x.updateLocalStorage)(r,y.constants.favCocktailStorageKey),c.innerHTML=(0,h.updateFavBtnContent)(r,y.constants.favCocktailStorageKey)),!n.target.classList.contains("js-btn-more")){e.next=12;break}return e.next=9,(0,g.getCocktailsById)(r);case 9:o=e.sent,i=L(o[0]),(0,E.createModal)(i,r,y.constants.favCocktailStorageKey);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function F(){i.elementsRef.selectOptions.classList.toggle("is-hidden")}function H(){i.elementsRef.selectValue.classList.add("active-letter"),i.elementsRef.selectValue.childNodes[3].classList.add("active-icon")}i.elementsRef.alphabetListEl.addEventListener("click",(function(e){return j.apply(this,arguments)})),i.elementsRef.cocktailsListEl.addEventListener("click",(function(e){return A.apply(this,arguments)})),i.elementsRef.searchFormRef.addEventListener("submit",(function(e){return T.apply(this,arguments)})),i.elementsRef.themeColorToggleEl.addEventListener("change",(function(){console.log("test"),(0,R.changeColorTheme)()})),b(),i.elementsRef.selectValue.addEventListener("click",F),i.elementsRef.selectMobileEl.addEventListener("click",N),function(){M.apply(this,arguments)}()}();
//# sourceMappingURL=index.60ec1ab7.js.map