'use strict';

app.controller('ProjectManagerController', ['$scope', '$uibModal', '$state', 'ToasterTool', 'ProjectFactory', 'HttpResponseFactory', 'ErrorHandlerFactory', function($scope, $uibModal,
    $state, ToasterTool, ProjectFactory, HttpResponseFactory, ErrorHandlerFactory) {

    $scope.projects = [];

    var errorHandler = ErrorHandlerFactory.handle;

    init();

    function init(){
      console.log($state);
      console.log('ProjectManagerController Init');
      getProjects();
      $scope.newProject = newProject;
    }

    function getProjects(){
      // ProjectFactory.getProjectList().get({},  getProjectListSuccess, getProjectListFailed);
      ProjectFactory.getProjectList().get({
			})
			.$promise
			.then(function(response){
				if(HttpResponseFactory.isResponseSuccess(response)){
					var data = HttpResponseFactory.getResponseData(response);
					angular.copy(data, $scope.projects);
				}else{
	        errorHandler(response);
				}
			})
      .catch(errorHandler);
    }

    function getProjectListSuccess(data) {
      if (data.success) {
        angular.copy(data.data, $scope.projects);
      }else{
        ToasterTool.error('错误',data.message);
      }

    }

    function getProjectListFailed(error){
      ToasterTool.error('错误','获取项目列表失败');
    }

    function newProject(){
      var modalInstance = $uibModal.open({
            templateUrl: 'views/app/project/modal/new_project.html',
            size: 'lg',
            controller: "ProjectAddController"
        });
    }
}]);
