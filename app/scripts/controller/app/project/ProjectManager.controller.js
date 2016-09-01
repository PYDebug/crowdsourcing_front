'use strict';

app.controller('ProjectManagerController', ['$scope', '$state', 'ToasterTool', 'ProjectFactory', 'HttpResponseFactory', 'ErrorHandlerFactory', function($scope,
    $state, ToasterTool, ProjectFactory, HttpResponseFactory, ErrorHandlerFactory) {

    $scope.projects = [];

    var errorHandler = ErrorHandlerFactory.handle;

    init();

    function init(){
      console.log($state);
      console.log('ProjectManagerController Init');
      getProjects();
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
}]);
