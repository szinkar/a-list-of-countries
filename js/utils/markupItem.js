
import { isModeDark } from './isModeDark.js'

const markupItem = (data) => {
  const out = data.map((item) => {
    return `<div class="countries__item ${isModeDark() ? 'active__item' : ''}">
              <div class="countries__img"><img class="countries__img-img" src="${item.flags.png}" alt="${
      item.name.common
    }"></div>
              <div class="countries__item-description">
                <p class="countries__description-name coutry-name">${item.name.common}</p>
                <p class="countries__description-population description"><span class="countries__description-part">Population:</span> ${
                  item.population
                }</p>
                <p class="countries__description-region description"><span class="countries__description-part">Region:</span> ${
                  item.region
                }</p>
                <p class="countries__description-capital description"><span class="countries__description-part">Capital:</span> ${
                  item.capital
                }</p>
              </div>
            </div>`
  })
  return out.join('')
}

export { markupItem }