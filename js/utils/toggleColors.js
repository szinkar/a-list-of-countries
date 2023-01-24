import { toggleColorExtra } from './toggleColorExtra.js'

const toggleColors = ({
  blockGhanged,
  titleGhanged,
  switchChanged,
  iconChanged,
  searchChanged,
  countriesChanged,
  groupClasses,
  bodyChanged,
}) => {
  blockGhanged.classList.toggle('header__active')
  titleGhanged.classList.toggle('active')
  switchChanged.classList.toggle('active')
  iconChanged.classList.toggle('active__icon')
  searchChanged.classList.toggle('active__bg')
  countriesChanged.classList.toggle('active__bg')
  toggleColorExtra(groupClasses)
  bodyChanged.classList.toggle('active__bg')
}

export { toggleColors }