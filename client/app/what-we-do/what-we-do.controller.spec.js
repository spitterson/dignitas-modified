'use strict';

describe('Controller: WhatWeDoCtrl', function () {

  // load the controller's module
  beforeEach(module('dignitasApp'));

  var WhatWeDoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatWeDoCtrl = $controller('WhatWeDoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
