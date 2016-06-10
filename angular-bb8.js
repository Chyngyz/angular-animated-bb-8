//
// Angular Animated BB-8
// http://codepen.io/Chyngyz/pen/YWwYGq
//


var app = angular.module('app', []);

app.component('bb8App', {
  templateUrl: 'bb8-app.html',
  controller: function($interval, $document) {
    var vm = this;
    vm.config = {
      droidX: 0,
      mouseX: 0,
      toTheRight: true,
      speed: 2,
      accelMod: 1.7
    };

    vm.handleMouseMove = function($event) {
      vm.config.mouseX = $event.pageX;
    };

    vm.movement = function() {
      if(Math.abs(Math.round(vm.config.droidX)-vm.config.mouseX) !== 1){

          var distance = vm.config.mouseX - vm.config.droidX;
          var acceleration = Math.abs(distance * vm.config.accelMod) / 100;

          // Move to the right
          if (vm.config.droidX < vm.config.mouseX) {
              vm.config.droidX = vm.config.droidX+(vm.config.speed*acceleration);
              vm.config.toTheRight = true;
          }
          // Move to the left
          else {
            vm.config.droidX = vm.config.droidX-(vm.config.speed*acceleration);
            vm.config.toTheRight = false;
          }
      }
    };

    vm.$onInit = function() {
      vm.config.mouseX = 300;
      $document.on('mousemove', vm.handleMouseMove);
    }

    vm.$onDestroy = function() {
      $document.off('mousemove', vm.handleMouseMove);
    }

    $interval(vm.movement, 1);
  }
})

app.component('bb8', {
  bindings: {
    configData: "="
  },
  templateUrl: "bb8.html"
});

app.component('configBar', {
  bindings: {
    configData: '='
  },
  templateUrl: 'configBar.html'
})

angular.bootstrap(document, ['app']);
