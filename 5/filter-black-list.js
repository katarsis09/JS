function filter(fullList, blackList) {
  let whiteList = []
  for (let elem of fullList) {
    if (blackList.indexOf(elem) != -1) {
      whiteList.push(elem)
    }
  }
  return whiteList
}

export default {filter}