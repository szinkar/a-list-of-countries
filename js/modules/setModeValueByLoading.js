import { isModeDark } from '../utils/isModeDark.js'
import { toggleColors } from '../utils/toggleColors.js'

const setModeValueByLoading = ({
  blockGhanged,
  titleGhanged,
  switchChanged,
  iconChanged,
  searchChanged,
  countriesChanged,
  groupClasses,
  bodyChanged,
}) => {
  if (isModeDark())
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

export { setModeValueByLoading }
