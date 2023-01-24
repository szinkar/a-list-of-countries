import { isModeDark } from './isModeDark.js'

const toggleMode = () => {
  const wasDarkMode = isModeDark()
  localStorage.setItem('darkmode', !wasDarkMode)
  return !wasDarkMode
}

export { toggleMode }
