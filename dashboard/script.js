var viewsData = [
    { y: 'June', a: 90, b: 70 },
    { y: 'July', a: 100, b: 75 },
    { y: 'August', a: 115, b: 75 },
    { y: 'September', a: 120, b: 85 },
    { y: 'October', a: 145, b: 85 },
    { y: 'November', a: 160, b: 95 },
    { y: 'December', a: 160, b: 95 },
    { y: 'January', a: 50, b: 90 },
    { y: 'February', a: 65, b: 75 },
    { y: 'March', a: 50, b: 50 },
    { y: 'April', a: 75, b: 60 },
    { y: 'May', a: 80, b: 65 },
  ],
  viewsConfig = {
    data: viewsData,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Eestist', 'Välismaalt'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['gray', 'red'],
  };

var usersData = [
    { y: '2018', a: 32, b: 8 },
    { y: '2019', a: 54, b: 18 },
    { y: '2020', a: 142, b: 43 },
    { y: '2021', a: 215, b: 75 },
    { y: '2022', a: 365, b: 112 },
  ],
  usersConfig = {
    data: usersData,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Eestist', 'Välismaalt'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['gray', 'red'],
  };

var salesData = [
    { y: '2018', a: 24 },
    { y: '2019', a: 67 },
    { y: '2020', a: 113 },
    { y: '2021', a: 197 },
    { y: '2022', a: 276 },
  ],
  salesConfig = {
    data: salesData,
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Müüki'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['green'],
  };

var data = [
    { y: '2018', a: 24 * 20, b: 24 * 7 },
    { y: '2019', a: 67 * 20, b: 67 * 7 },
    { y: '2020', a: 113 * 20, b: 113 * 7 },
    { y: '2021', a: 197 * 20, b: 197 * 7 },
    { y: '2022', a: 276 * 20, b: 276 * 7 },
  ],
  config = {
    data: data,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Tulu', 'Kulu'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors: ['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors: ['gray', 'red'],
  };

salesConfig.element = 'area-chart';
Morris.Area(salesConfig);
config.element = 'line-chart';
Morris.Line(config);
viewsConfig.element = 'bar-chart';
Morris.Bar(viewsConfig);
usersConfig.element = 'stacked';
usersConfig.stacked = true;
Morris.Bar(usersConfig);
