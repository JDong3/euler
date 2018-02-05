// res all multiples of 3 or 5 below 1000
const n = 1000000
function a0() {
  let sum = 0
  for(i=0; i<=n; i++) {
    if(i%3 === 0 || i%5 === 0) {
      sum+=i
    }
  }
  return sum
}

function a1() {
  let sum = 0
  for(i=3; i<=n; i+=3) {
    sum+=i
  }
  for(i=5; i<=n; i+=5) {
    sum+=i
  }
  for(i=15; i<=n; i+=15) {
    sum-=i
  }
  return sum
}

function a2() {
  let sum = 0
  let pattern = [3, 2, 1, 3, 1, 2, 3]
  let stage = -1
  for(i=0; i<=n ; i+=pattern[stage]) {
    sum+=i
    stage = (stage+1)%7
  }
  return sum
}

function time(name, fcn) {
  console.time(name)
  fcn()
  console.timeEnd(name)
}

//233333166668
console.log(a0(), a1(), a2())
time('naive', a0)
time('tiple loop', a1)
time('pattern finding', a2)
