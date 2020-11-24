// Your code here
function mapToNegativize(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] * -1 )
    }
    return arr
}

function mapToNoChange(array) {
    return array 
}

function mapToDouble(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] * 2)
    }
    return arr
}

function mapToSquare(array) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] ** 2)
    }
    return arr
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }

  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
  