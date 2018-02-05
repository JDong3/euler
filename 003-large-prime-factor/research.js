const List = require('immutable').List

function gaps(arr) {
  let prod = arr.reduce((a, b) => (a*b), 1)
  let ls = List()
  for(i=prod; i>=0; i--) {
    ls = ls.push(i)
  }
  arr.forEach((prime) => (
    ls = ls.filter((x) => (x%prime !== 0))
  ))
  let len = ls.size
  ls = ls.push(0)
  let gaps = List()
  for(i=0; i<len-1; i++) {
    gaps = gaps.push(ls.get(i) - ls.get(i+1))
  }
  gaps = gaps.push(2)
  console.log(gaps)
  return gaps
}

gaps([2, 3, 5])
