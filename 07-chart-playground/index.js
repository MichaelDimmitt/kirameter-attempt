
const alphabet = [
  'a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
]

const deepCopyAlphabet = () => JSON.parse(JSON.stringify(alphabet));
const getRandomArrInt = (arr) => Math.floor((Math.random() * arr.length))
const getRandomInt = (num) => Math.floor((Math.random() * num+1))


const connectNodesByNumber = ({letter, num, arr, mainGraph, isRandom}) => {
  const alphabetValue = isRandom ? getRandomArrInt(arr) : num
  const [removed] = arr.splice(alphabetValue, 1)
  mainGraph.push([letter, removed])
  if(num > 1){
    return connectNodesByNumber({letter, num: --num, arr, mainGraph, isRandom, mainGraph})
  }
  else { return mainGraph }
}

const dataValues1 = [
  ['B', 'N'],
  ['B', 'G'],
  ['B', 'C'],
  ['C', 'D'],
  ['D', 'O'],
  ['G', 'P'],
  ['F', 'Q'],
  ['F', 'R'],
  ['H', 'S'],
  ['E', 'T'],
  ['E', 'U']
  ['A', 'I'],
  ['A', 'J'],
  ['A', 'E'],
  ['A', 'F'],
  ['A', 'K'],
  ['A', 'L'],
  ['A', 'B'],
  ['A', 'M'],
]
const dataValues2 = [
  ['A', 'I'],
  ['A', 'J'],
  ['A', 'E'],
  ['A', 'F'],
  ['A', 'K'],
  ['A', 'L'],
  ['A', 'B'],
  ['A', 'M'],
  ['B', 'N'],
  ['B', 'G'],
  ['B', 'C'],
  ['C', 'D'],
  ['D', 'O'],
  ['G', 'P'],
  ['F', 'Q'],
  ['F', 'R'],
  ['H', 'S'],
  ['E', 'T'],
  ['E', 'U']
]
const chart = (id, dataValues, ip) => {
  
  const chart1 = {

    chart: {
      type: 'networkgraph',
      marginTop: 80,
      backgroundColor: 'transparent'
    },

    turboThreshold: 0,
  
    title: {
      text: ''
    },
  
    subtitle: {
      text: ''
    },
  
    plotOptions: {
      series:{
        duration: 1000000
      },
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          approximation: "none",
          enableSimulation: true,
          initialPositionRadius: ip,
          initialPositions: "circle",
          integration: "verlet",
          linkLength: 300,
          maxIterations: 1000,
          type: "reingold-fruchterman",
        }
      }
    },
  
    series: [{
      marker: {
        radius: 3,
      },
      dataLabels: {
        linkFormat: '',
        allowOverlap: true
      },
      data: dataValues,
    }]
  }
  let highChart = Highcharts.chart(id, chart1);
  var height = parseInt(highChart.chartHeight);
  var width = parseInt(highChart.chartWidth);
  highChart.setSize( (width), (height), true)

  // document.getElementsByClassName("highcharts-point highcharts-color-0 highcharts-node")[7]
  
  
}
const sourceCharts = (id, dataValues, ip) => {
    chart(id, dataValues, ip);
    document.getElementsByClassName('highcharts-credits')[0].remove()
    
    setTimeout(() => {
      
      chart('container2', dataValues, ip);
      document.getElementsByClassName('highcharts-credits')[0].remove()
    
    }, 4000);
    setTimeout(() => {
      sourceCharts('container1', buildGraph(), 1)
    }, 8000);
}

const buildGraph = (links = 5, range = 8) => {
  let mainGraph1 = []
  for(i = 0; i < links; i++){
    mainGraph1 = connectNodesByNumber({letter: alphabet[i], num: getRandomInt(range), arr: deepCopyAlphabet(), mainGraph: mainGraph1, isRandom: true})
  }
  return mainGraph1
}


// mainGraph2 = connectNodesByNumber({letter: 'b', num: 20, arr: deepCopyAlphabet(), mainGraph, isRandom: false})
// document.getElementsByClassName("highcharts-point highcharts-color-0 highcharts-node")[7].point
setTimeout(() => {
  sourceCharts('container1', buildGraph(), 1)
}, 1000);


/* example output: 
[
  ["a","h"],["a","y"],["a","d"],["a","v"],["a","w"],["a","r"],["a","l"],["a","i"],["a","f"],["a","s"],
  ["a","j"],["a","m"],["a","e"],["a","t"],["a","k"],["a","a"],["a","x"],["a","z"],["a","b"],["a","n"],
  ["b","u"],["b","t"],["b","s"],["b","r"],["b","q"],["b","p"],["b","o"],["b","n"],["b","m"],["b","l"],
  ["b","k"],["b","j"],["b","i"],["b","h"],["b","g"],["b","f"],["b","e"],["b","d"],["b","c"],["b","b"]
]
*/