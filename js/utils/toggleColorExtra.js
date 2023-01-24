const toggleColorExtra = (groupClasses) => {
  if (document.querySelectorAll(groupClasses)) {
    const nodeItems = document.querySelectorAll(groupClasses)
    const arrayItems = [...nodeItems]
    arrayItems.forEach((item) => item.classList.toggle('active__item'))
  }
}

export { toggleColorExtra }
