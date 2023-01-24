const sorting = (search, country) => {
  if (country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
    country.parentElement.parentElement.style.display = 'block'
  } else {
    country.parentElement.parentElement.style.display = 'none'
  }
}

export { sorting }
