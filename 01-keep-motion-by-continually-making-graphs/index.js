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
  Highcharts.chart(id, chart1);

  // document.getElementsByClassName("highcharts-point highcharts-color-0 highcharts-node")[7]
  
  
}
const sourceCharts = () => {
    chart('container1', dataValues1, 1);
    chart('container3', dataValues1, 60);
    chart('container5', dataValues1, 60);
    document.getElementsByClassName('highcharts-credits')[0].remove()
    document.getElementsByClassName('highcharts-credits')[0].remove()
    document.getElementsByClassName('highcharts-credits')[0].remove()
    setTimeout(() => { 
      chart('container1', dataValues1, 1);
      chart('container2', dataValues1, 200);
      chart('container3', dataValues1, 60);
      document.getElementsByClassName('highcharts-credits')[0].remove() 
      document.getElementsByClassName('highcharts-credits')[0].remove()
      document.getElementsByClassName('highcharts-credits')[0].remove()
    }, 6000)

    
    setTimeout(() => { 
      sourceCharts()
    }, 10000);
}

setTimeout(() => {
  sourceCharts()  
}, 100);


