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
  setTimeout(() => { 
    doWork(-20)
  }, 1000)
  const doWork = (x) => {
    var height = highChart.chartHeight;
    var width = highChart.chartWidth;
    
    highChart.setSize(width+x, height+x, true);
    setTimeout(() => { 
      doWork(-x)
    }, 1000);
  }

  // document.getElementsByClassName("highcharts-point highcharts-color-0 highcharts-node")[7]
  
  
}
const sourceCharts = () => {
    chart('container2', dataValues1, 1);
    document.getElementsByClassName('highcharts-credits')[0].remove()
    setTimeout(() => { 
    }, 6000)

    // setTimeout(() => { 
    //   chart('container2', dataValues1, 1);
    //   document.getElementsByClassName('highcharts-credits')[0].remove()
    // }, 6000)

    
    // setTimeout(() => { 
    //   sourceCharts()
    // }, 10000);
}

setTimeout(() => {
  sourceCharts()  
}, 100);


