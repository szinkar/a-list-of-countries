import { sorting } from '../utils/sorting.js'

const liveSearch = (groupClasses, search) => {
  Array.from(groupClasses).forEach((country) => sorting(search, country))
}

export { liveSearch }
