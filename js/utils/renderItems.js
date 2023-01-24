import { getData } from './getData.js'
import { markupItem } from './markupItem.js'

const renderItems = async (url, shell) => {
  const data = await getData(url)
  shell.innerHTML = markupItem(data)
}

export { renderItems }
