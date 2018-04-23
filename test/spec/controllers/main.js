'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('no debe tener items al empezar', function(){
    expect(MainCtrl.tareas.length).toBe(0);
  })
});
