angular
  .module("warRoom")
  .directive("includeExecutableFile", includeExecutableFile);
  
function includeExecutableFile() {
  var directive = {
    transclude: true,
    restrict: 'EA',
    scope: {
      src: '@'
    },
    link: function($scope, elem, attrs) {
      elem.ready(function() {
        $(elem).find('script').each(function(index, value) {
          eval($(value).text());
        });
      });
    },
    templateUrl: function(elem, attr) {
      return attr.src;
    }
  }
  return directive;
}