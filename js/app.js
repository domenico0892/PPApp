// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])


.run(function ($ionicPlatform, $cordovaSQLite) {
    console.log("fanculo")
    if (window.cordova) {
      db = $cordovaSQLite.openDB({ name: "my.db" }); //device
    }else{
      db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100); // browser
    }
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
            if (window.cordova) {
      db = $cordovaSQLite.openDB({ name: "my.db" }); //device
    }else{
      db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100); // browser
    }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.storia', {
            url: '/storia',
            views: {
                'tab-storia': {
                    templateUrl: 'templates/tab-storia.html',
                    controller: 'StoriaCntrl'
                }
            }
        })
        .state('tab.preghiere', {
            url: '/preghiere',
            views: {
                'tab-preghiere': {
                    templateUrl: 'templates/tab-preghiere.html',
                    controller: 'PreghiereCtrl'
                }
            }
        })
        .state('tab.preghiere-detail', {
            url: '/chats/:preghieraId',
            views: {
                'tab-preghiere': {
                    templateUrl: 'templates/detail-preghiere.html',
                    controller: 'PreghieraDetailCtrl'
                }
            }
        })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })

    .state('tab.contatti', {
        url: '/contatti',
        views: {
            'tab-contatti': {
                templateUrl: 'templates/tab-contatti.html',
                controller: 'ContattiCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});

// var db = null;
 
// var example = angular.module('starter', ['ionic', 'ngCordova'])
//     .run(function($ionicPlatform, $cordovaSQLite) {
//         $ionicPlatform.ready(function() {
//             if(window.cordova && window.cordova.plugins.Keyboard) {
//                 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//             }
//             if(window.StatusBar) {
//                 StatusBar.styleDefault();
//             }
//             db = $cordovaSQLite.openDB("my.db");
//             $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
//         });
//     });