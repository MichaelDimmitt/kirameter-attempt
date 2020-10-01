const dataValues1 = [
  ['B', 'N'],
  ['B', 'G'],
  ['B', 'C'],
  ['C', 'D'],
  ['D', 'O'],
  ['G', 'P'],
  ['F', 'Q'],
  ['F', 'R'],
  ['A', 'S'],
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
  ['A', 'I'],
  ['A', 'J'],
  ['A', 'E'],
  ['A', 'F'],
  ['A', 'K'],
  ['A', 'L'],
  ['A', 'B'],
  ['A', 'M'],
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
let g = 0.0625
let f = -0.981
let t = 0.5
const chart = (id, dataValues, ip) => {
  
  let chart1 = {

    chart: {
      type: 'networkgraph',
      marginTop: 80,
      backgroundColor: 'transparent'
    },
  
    title: {
      text: ''
    },
  
    subtitle: {
      text: ''
    },
  
    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          approximation: "none",
          enableSimulation: true,
          initialPositionRadius: ip,
          initialPositions: "circle",
          integration: "verlet",
          linkLength: 100,
          maxIterations: 1000,
          type: "reingold-fruchterman",
          gravitationalConstant: g,
          friction: f,
          theta: t
        }
      }
    },
  
    series: [{
      marker: {
        radius: 1,
      },
      dataLabels: {
        linkFormat: '',
        allowOverlap: true
      },
      data: dataValues,
    }]
  }
  let highChart = Highcharts.chart(id, chart1);
  
  const scalar = 100
  const pairs = [
   [-scalar, 0], [-scalar, -scalar], [scalar, 0], [scalar, scalar],
   [0, scalar], [scalar, scalar], [0, -scalar], [-scalar, -scalar]
  ];
  const deepCopyPairs = () => JSON.parse(JSON.stringify(pairs));
  const moop = deepCopyPairs();
  
  // (-25, 0)(-25, -25)(25, 0) (25, 25)
  // (0, 25), (25, 25)(0, -25) (-25, -25)
  
  // (-x, 0) (-x, -y) (x, 0)(x,y)
  // (0, y)(x,y)(0,y)(-x,-y)
  x = 25
  setTimeout(() => { 
    doWork( deepCopyPairs() )
  }, 1000);  

  
  const doWork = (arr) => {
    console.log({arr})
    if(arr.length === 0){ arr = deepCopyPairs() }
    const getRandomInt = (arr) => Math.floor((Math.random() * arr.length))
    const removed = arr.splice(getRandomInt(arr), 1)  
    console.log({removed})
    let [x, y] = removed
    x = parseInt(x)
    y = parseInt(y)
    var height = parseInt(highChart.chartHeight);
    var width = parseInt(highChart.chartWidth);
    
    highChart.setSize( (width+x), (height+y), true);
    setTimeout(() => { 
      doWork(arr)
    }, 1000);

  }

  // document.getElementsByClassName("highcharts-point highcharts-color-0 highcharts-node")[7]
  
  
}
const sourceCharts = (id, dataValues) => {
    chart(id, dataValues, 1);
    document.getElementsByClassName('highcharts-credits')[0].remove()
    
}

setTimeout(() => {
  sourceCharts('container2', dataValues1)  
}, 100);
setTimeout(() => {
  sourceCharts('container1', dataValues2)  
}, 600);
setTimeout(() => {
  sourceCharts('container4', dataValues2)  
}, 600);


