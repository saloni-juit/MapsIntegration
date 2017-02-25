'use strict';
angular.module('signeasyApp').run(function($rootScope) {
        angular.element(document).on("click", function(e) {
          $rootScope.$broadcast("documentClicked", angular.element(e.target));
        });
      });


angular.module('signeasyApp').directive("dropdown", function($rootScope) {
    return {
        restrict: "E",
        templateUrl: "../components/dropdown/dropdown.html",
        scope: {
            placeholder: "@",
            list: "=",
            selected: "=",
            property: "@"
        },
        link: function(scope) {
            scope.listVisible = false;
            scope.isPlaceholder = true;
            scope.isShow = false;

            scope.select = function(item) {
                scope.isPlaceholder = false;
                scope.selected = item;
                scope.isShow = false;
            };

            scope.isSelected = function(item) {
                if(scope.selected !== undefined){
                    return item[scope.property] === scope.selected[scope.property];
                }
            };


            $rootScope.$on("documentClicked", function(inner, target) {
               if(!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0){
                    if(scope.listVisible == true && !scope.isShow){
                        scope.$apply(function() {
                            scope.listVisible = false;
                        });
                    }
                }

               //  if($(".dropdown-list").)

                // if($(target[0]).parents(".dropdown-display.clicked").length  0 || $(target[0]).is(".dropdown-display.clicked")){
                //     scope.$apply(function() {
                //         scope.listVisible = false;
                //     });
                // }
            });

            scope.show = function() {
                scope.listVisible = true;
                scope.isShow = true;
            };
        
            scope.$watch("selected", function(value) {
                if(scope.selected !== undefined){
                    scope.isPlaceholder = scope.selected[scope.property] === undefined;
                    scope.display = scope.selected[scope.property];
                }
            });
        }
    }
});