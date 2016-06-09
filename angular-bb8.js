var app = angular.module('app', []);

app.controller('mainCtrl', function() {
  this.config = {
    speed: 4,
    accelMod: 1.2
  }
});

app.component('bb8', {
  template: "<h2>This is to be bb8</h2>"
});

app.component('configBar', {
  bindings: {
    configData: '='
  },
  templateUrl: 'configBar.html'
})

angular.bootstrap(document, ['app'], {
  strictDi: true
});
