import { toggleMode } from '../utils/toggleMode.js'
import { toggleColors } from '../utils/toggleColors.js'

const changeColors = ({
  blockGhanged,
  titleGhanged,
  switchChanged,
  iconChanged,
  searchChanged,
  countriesChanged,
  groupClasses,
  bodyChanged,
}) => {
  toggleMode()
  toggleColors({
    blockGhanged,
    titleGhanged,
    switchChanged,
    iconChanged,
    searchChanged,
    countriesChanged,
    groupClasses,
    bodyChanged,
  })
}

export { changeColors }
