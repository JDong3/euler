const n = 4000000

function a0() {
  let a = 1
  let b = 2
  let c = 3
  let d = undefined
  let sum = 2
  while (c<=n) {
    if(c%2 === 0) {
      sum+=c
    }
    d = c
    c = a+b
    a = b
    b = d
  }
  return sum
}

function time(name, fcn) {
  console.time(name)
  fcn()
  console.timeEnd(name)
}

//4613732
time('naive', a0)
