import { setModeValueByLoading } from './modules/setModeValueByLoading.js'
import { changeColors } from './modules/changeColors.js'
import { liveSearch } from './modules/liveSearch.js'
import { sortByRegion } from './modules/sortByRegion.js'
import { setLastSearch } from './modules/setLastSearch.js'


const blockSwitch = document.querySelector('.header__switch')
const blockHeader = document.querySelector('.header')
const blockHeaderTitle = document.querySelector('.header__title')
const blockHeaderSwitch = document.querySelector('.header__text')
const blockHeaderIcon = document.querySelector('.header__switch-icon')
const blockSearch = document.querySelector('.search')
const blockCountries = document.querySelector('.countries')
const blockBody = document.querySelector('body')

const parametrsForMode = {
  blockGhanged: blockHeader,
  titleGhanged: blockHeaderTitle,
  switchChanged: blockHeaderSwitch,
  iconChanged: blockHeaderIcon,
  searchChanged: blockSearch,
  countriesChanged: blockCountries,
  groupClasses: '.countries__item',
  bodyChanged: blockBody,
}

const itemsWrapper = document.querySelector('.countries__main')
const searchField = document.querySelector('.search__field')
const nameCountry = document.getElementsByClassName('coutry-name')
const selectFilter = document.querySelector('.search__filter-field')

const linkAll = 'https://restcountries.com/v3.1/all'
const linkRegion = 'https://restcountries.com/v3.1/region/'


document.addEventListener('DOMContentLoaded', () => setModeValueByLoading(parametrsForMode))
document.addEventListener('DOMContentLoaded', () => setLastSearch('query', itemsWrapper, linkAll, selectFilter))
blockSwitch.addEventListener('click', () => changeColors(parametrsForMode))
searchField.addEventListener('input', () => liveSearch(nameCountry, searchField))
selectFilter.addEventListener('click', (e) => sortByRegion(e, linkRegion, itemsWrapper, 'query', linkAll))