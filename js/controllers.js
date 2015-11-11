angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

//.controller('ChartsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})

.controller('PreghiereCtrl', function ($window, $scope, $rootScope, Chats, $http) {
    
    $scope.preghiere = [];

    var callJsonFile = function () {
        $http.get('js/data.json')
            .success(function (response) {
                var l = response.length;
                var r = Math.ceil(Math.random() * l) - 1;
                $scope.preghiera = response[r];
                $scope.preghiere = response;
            });
    };
    callJsonFile();

    //In questo modo non serve fare una chiamata ad ogni click, l'array di preghere c'é già ;)
    $scope.doRefresh = function () {
        var l = $scope.preghiere.length;
        var r = Math.ceil(Math.random() * l) - 1;
        //In questo modo non verrà mai pescata la stessa preghiera: capitava che cl click rimaneva sulla stessa
        // e si doveva cliccare un'altra volta
        if ($scope.preghiera._id != $scope.preghiere[r]._id) {
            $scope.preghiera = $scope.preghiere[r];
        } else {
            $scope.doRefresh();
        }
    };

})

.controller('StoriaCntrl', function ($scope, $stateParams, Chats) {})

.controller('PreghieraDetailCtrl', function ($scope, $rootScope, Chats, $stateParams) {
    $scope.preghiere = $rootScope.preghiere;
    for (var i in $scope.preghiere) {
        if ($scope.preghiere[i]._id == $stateParams.preghieraId) {
            $scope.currPreghiera = $scope.preghiere[i];
        }
    }

})

.controller('ContattiCtrl', function ($scope) {})

.controller('AccountCtrl', function ($scope) {
    $scope.preghiere
    $scope.settings = {
        enableFriends: true
    };
});
/*
.controller('MyCtrl', function($scope, $timeout) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  $scope.refreshing = false;
  
  $scope.doRefresh = function(outsideAngularContext) {
    $scope.refreshing = true;
    if( outsideAngularContext ) {
      $scope.$apply();
    }
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
      $scope.refreshing = false;
    
    }, 1000);
      
  };
  
});*/