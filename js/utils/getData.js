const getData = async (url) => {
  try {
    const request = await fetch(url)
    const json = await request.json()
    return json
  } catch (error) {
    console.log(error.message)
  }
}

export { getData }
