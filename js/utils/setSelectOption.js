const setSelectOption = (arrayOptions, valueSearch, name, value) => {
  arrayOptions.forEach((item) => {
    if (valueSearch === item.value.toLowerCase()) {
      item.setAttribute(name, value, item)
    }
  })
}

export { setSelectOption }
