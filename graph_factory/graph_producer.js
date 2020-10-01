const alphabet = [
  'a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
]

const deepCopyAlphabet = () => JSON.parse(JSON.stringify(alphabet));
const getRandomInt = (arr) => Math.floor((Math.random() * arr.length))

let mainGraph = []
const connectNodesByNumber = ({letter, num, arr, mainGraph, isRandom}) => {
  const alphabetValue = isRandom ? getRandomInt(arr) : num
  const [removed] = arr.splice(alphabetValue, 1)
  mainGraph.push([letter, removed])
  if(num > 1){
    return connectNodesByNumber({letter, num: --num, arr, mainGraph, isRandom})
  }
  else { return mainGraph }
}
connectNodesByNumber({letter: 'a', num: 20, arr: deepCopyAlphabet(), mainGraph, isRandom: true})
connectNodesByNumber({letter: 'b', num: 20, arr: deepCopyAlphabet(), mainGraph, isRandom: false})
console.log(JSON.stringify(mainGraph))