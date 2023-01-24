import { renderItems } from '../utils/renderItems.js'
import { setSelectOption } from '../utils/setSelectOption.js'

const setLastSearch = (key, shell, linkMain, select) => {
  let link = localStorage.getItem(key)
  if (link) renderItems(link, shell)
  if (!link) renderItems(linkMain, shell)

  const valueOfSearch = link.substring(link.lastIndexOf('/') + 1)
  const array = Array.from(select.options)
  setSelectOption(array, valueOfSearch, 'selected', 'selected')
}

export { setLastSearch }
