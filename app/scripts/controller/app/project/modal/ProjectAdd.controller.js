'use strict';

app.controller('ProjectAddController', ['$scope', '$state', '$uibModalInstance', '$stateParams', 'ToasterTool',  'ProjectFactory',  function($scope,
    $state, $uibModalInstance, $stateParams, ToasterTool, ProjectFactory) {

    init();

    function init(){
      console.log($state);
      console.log('ready to get yardstick code content!');
    }

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };



}]);
