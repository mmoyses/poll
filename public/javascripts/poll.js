angular.module('poll', ['highcharts-ng']);

angular.module('poll').
  controller('PollController', ['$scope', '$http', function($scope, $http) {

    var text1 = 'Bare bones',
        text2 = 'Middle of the road',
        text3 = 'Volume discount',
        socket = io.connect();

    function newValues(data) {
      $scope.before1 = data.before1;
      $scope.before2 = data.before2;
      $scope.before3 = data.before3;
      $scope.after1 = data.after1;
      $scope.after2 = data.after2;
      $scope.after3 = data.after3;
    }

    socket.on('update', function(data) {
      newValues(data);
      $scope.$digest();
    });

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'column'
        },
        legend: {
          itemStyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: '18px'
          }
        },
      },
      credits: {
        enabled: false
      },
      series: [{
        showInLegend: false,
        name: 'Before',
        data: []
      }],
      title: {
        text: 'What Should Day Choose?'
      },
      xAxis: {
        labels: {
          style: {
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        },
        categories: ['Bare Bones', 'Middle of the Road', 'Volume Discount']
      },
      yAxis: {
        gridLineDashStyle: 'dash',
        allowDecimals: false,
        labels: {
          style: {
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold'
          }
        },
        floor: 0,
        min: 0,
        title: {
          style: {
            fontSize: '14px'
          },
          text: 'count'
        }
      }
    };

    $scope.before1 = 0;
    $scope.before2 = 0;
    $scope.before3 = 0;
    $scope.after1 = 0;
    $scope.after2 = 0;
    $scope.after3 = 0;

    function sendValue(value) {
      $http.put('/data/options', value)
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
    }

    $scope.beforeChanged = function(value) {
      switch(value) {
        case 1:
          sendValue({ before1: Number($scope.before1) });
          break;
        case 2:
          sendValue({ before2: Number($scope.before2) });
          break;
        case 3:
          sendValue({ before3: Number($scope.before3) });
          break;
        default:
          break;
      }
    };

    $scope.afterChanged = function(value) {
      switch(value) {
        case 1:
          sendValue({ after1: Number($scope.after1) });
          break;
        case 2:
          sendValue({ after2: Number($scope.after2) });
          break;
        case 3:
          sendValue({ after3: Number($scope.after3) });
          break;
        default:
          break;
      }
    };

    function updateValue() {
      $scope.chartConfig.series[0].data = [[text1, $scope.before1], [text2, $scope.before2], [text3, $scope.before3]];
      if ($scope.after1 || $scope.after2 || $scope.after3) {
        if ($scope.chartConfig.series.length == 1) {
          $scope.chartConfig.series.push({ name: 'After', data: [] });
          $scope.chartConfig.series[0].showInLegend = true;
        }
        $scope.chartConfig.series[1].data = [[text1, $scope.after1], [text2, $scope.after2], [text3, $scope.after3]];
      } else {
        if ($scope.chartConfig.series.length == 2) {
          $scope.chartConfig.series.pop();
          $scope.chartConfig.series[0].showInLegend = false;
        }
      }
    }

    $scope.$watch('before1', function() {
      updateValue();
    });

    $scope.$watch('before2', function() {
      updateValue();
    });

    $scope.$watch('before3', function() {
      updateValue();
    });

    $scope.$watch('after1', function() {
      updateValue();
    });

    $scope.$watch('after2', function() {
      updateValue();
    });

    $scope.$watch('after3', function() {
      updateValue();
    });

    function init() {
      $http.get('/data/options')
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
    }
    init();

    $scope.addBefore1 = function() {
      $http.post('/data/options', { before1: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractBefore1 = function() {
      $http.post('/data/options', { before1: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.addBefore2 = function() {
      $http.post('/data/options', { before2: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractBefore2 = function() {
      $http.post('/data/options', { before2: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.addBefore3 = function() {
      $http.post('/data/options', { before3: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractBefore3 = function() {
      $http.post('/data/options', { before3: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

      $scope.addAfter1 = function() {
      $http.post('/data/options', { after1: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractAfter1 = function() {
      $http.post('/data/options', { after1: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.addAfter2 = function() {
      $http.post('/data/options', { after2: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractAfter2 = function() {
      $http.post('/data/options', { after2: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.addAfter3 = function() {
      $http.post('/data/options', { after3: 1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

    $scope.subtractAfter3 = function() {
      $http.post('/data/options', { after3: -1 })
        .success(function(data) {
          newValues(data);
        })
        .error(function() {
          
        });
      };

  }]);