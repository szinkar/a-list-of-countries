const getNameRegion = (e) => {
  let target = e.target
  return target.options[target.selectedIndex].innerText
}

export { getNameRegion }