'use strict';

app.controller('ProjectAddController', ['$scope', '$state', '$uibModalInstance', '$stateParams', 'ToasterTool',  'ProjectFactory',  function($scope,
    $state, $uibModalInstance, $stateParams, ToasterTool, ProjectFactory) {

    $scope.user = {
      "avatarUrl": "images/avatar1.jpg",
      "name": "py"
    }

    $scope.users = [];

    init();

    function init(){
      console.log($state);
      console.log('ready to get yardstick code content!');
      $scope.selectUser  = selectUser;
      loadUsers();
    }

    function loadUsers(){
      $scope.users.push(
        {
          "avatarUrl": "images/avatar1.jpg",
          "name": "py"
        }
      );

      $scope.users.push(
        {
          "avatarUrl": "images/avatar2.jpg",
          "name": "group1"
        }
      );

      $scope.users.push(
        {
          "avatarUrl": "images/avatar3.jpg",
          "name": "group2"
        }
      );
    }

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    function selectUser(user){
      $scope.user = user;
    }

}]);
