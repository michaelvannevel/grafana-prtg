import {PRTGDataSource} from './datasource';
import {PRTGQueryController} from './query_ctrl';

class PRTGConfigController {
  constructor($scope, $injector, $rootScope, $sce, templateSrv) {
     var scope = $scope;
     $scope.$watch('ctrl.current.url', function(newValue, oldValue) {
       scope.ctrl.current.jsonData.realUrl = newValue;
    });
  }
}
PRTGConfigController.templateUrl = './partials/config.html';

//class PRTGQueryOptionsController {}
//PRTGQueryOptionsController.templateUrl = './partials/query.options.html';

class PRTGAnnotationsQueryController {}
PRTGAnnotationsQueryController.templateUrl = './partials/annotations.editor.html';

export {
  PRTGDataSource as Datasource,
  PRTGQueryController as QueryCtrl,
  PRTGConfigController as ConfigCtrl,
  //PRTGQueryOptionsController as QueryOptionsCtrl,
  PRTGAnnotationsQueryController as AnnotationsQueryCtrl
};
