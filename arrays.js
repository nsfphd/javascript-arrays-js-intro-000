var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, myElement){
  var newArray=[myElement, ...myArray]
  return newArray
}

function addElementToEndOfArray(myArray, myElement){
  var newArray=[...myArray, myElement]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, myElement){
   myArray.unshift(myElement)
   return myArray
}

function destructivelyAddElementToEndOfArray(myArray, myElement){
  return myArray.push(myElement)
}

function accessElementInArray(myArray, ix){
  return myArray[ix]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray){
  return myArray.shift()
}

function removeElementFromBeginningOfArray(myArray){
  var newArray=myArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(myArray){
  return myArray.pop()
}

function removeElementFromEndOfArray(myArray){
  var newArray=myArray.slice(0, myArray.length-1)
  return newArray
}
