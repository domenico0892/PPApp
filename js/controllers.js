angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

//.controller('ChartsCtrl', function($scope, Chats) {
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})

.controller('PreghiereCtrl', function ($scope, $rootScope, Chats, $http) {
    $http.get('js/data.json')
    .success(function (response){
        //$scope.preghiere=response;
        var l = response.length;
        var r = Math.ceil(Math.random() * l) - 1;
        $scope.preghiera = response[r];
    });
    // $scope.preghiere = [
    //     {
    //         "_id": "01",
    //         "titolo": "INVOCAZIONE A SAN PIO",
    //         "ripetere": "Ripetere per 3",
    //         "testo": "O Padre Pio, luce di Dio, prega Gesù e la Vergine Maria per me e per tutta l'umanità sofferente. Amen.",
    //         "img": "http://www.bridgebuilding.com/images/nmpapx.jpg"
    //     }];
    //$rootScope.preghiere = $scope.preghiere;
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