angular.module('poll', ['highcharts-ng']);

angular.module('poll').
  controller('PollController', ['$scope', '$http', function($scope, $http) {

    var text1 = 'Bare bones',
        text2 = 'Middle of the road',
        text3 = 'Volume discount';

    $scope.chartConfig = {
      options: {
          chart: {
              type: 'pie'
          }
      },
      series: [{
          data: []
      }],
      title: {
          text: 'SYSCO options'
      },

      loading: false
    };

    $scope.option1 = 0;
    $scope.option2 = 0;
    $scope.option3 = 0;

    function init() {
      $http.get('/data/options')
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
    }
    init();

    $scope.addOption1 = function() {
      $http.post('/data/options', { option1: 1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

    $scope.subtractOption1 = function() {
      $http.post('/data/options', { option1: -1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

    $scope.addOption2 = function() {
      $http.post('/data/options', { option2: 1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

    $scope.subtractOption2 = function() {
      $http.post('/data/options', { option2: -1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

    $scope.addOption3 = function() {
      $http.post('/data/options', { option3: 1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

    $scope.subtractOption3 = function() {
      $http.post('/data/options', { option3: -1 })
        .success(function(data) {
          $scope.option1 = data.option1;
          $scope.option2 = data.option2;
          $scope.option3 = data.option3;
          $scope.chartConfig.series[0].data = [[text1, $scope.option1], [text2, $scope.option2], [text3, $scope.option3]];
        })
        .error(function() {
          
        });
      };

  }]);