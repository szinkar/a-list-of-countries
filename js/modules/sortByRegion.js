import { getNameRegion } from '../utils/getNameRegion.js'
import { renderItems } from '../utils/renderItems.js'

const sortByRegion = (e, linkMap, shell, key, linkMain) => {
  if (getNameRegion(e) !== 'Filter by Region') {
    let valueQuery = localStorage.getItem(key)
    let region = getNameRegion(e).toLowerCase()
    let link
    if (region === 'all') {
      link = linkMain
    } else {
      link = `${linkMap}${region}`
    }
    localStorage.setItem(key, link)
    if (valueQuery !== link) renderItems(link, shell)
  }
}

export { sortByRegion }
