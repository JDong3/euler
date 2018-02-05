const n = 600851475143

function a0() {
  let i = Math.floor(Math.sqrt(n))
  console.log(i)
}



function primeCheck(x) {
  let isPrime = true
  let n = Math.floor(Math.sqrt(x))
  if (n%2 === )
  for(i=n; i>=5; i++) {
    if(x%i === 0) {
      isPrime = false
      break
    }
  }
  return isPrime
}

function time(name, fcn) {
  console.time(name)
  fcn()
  console.timeEnd(name)
}

a0()
