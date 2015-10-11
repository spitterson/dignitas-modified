'use strict';

angular.module('dignitasApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };
    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
        };
        $(document).ready(function () {
            var clicks;

            $('#icon').on("click", function () {
                $("#info").css("visibility", "visible");
                clicks = 1;

                if (clicks > 0) {
                    $('#icon').on("click", function () {
                        $("#info").css("visibility", "hidden");
                        clicks = 0;
                    });
                } else {}
            });
        });
    });
