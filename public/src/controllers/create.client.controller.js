/**
 * Created by jaypr on 3/22/2016.
 */

angular
    .module('ContactsApp')
    .controller('CreateNewCtrl', ['$scope', '$location', 'Contact', function($scope, $location, Contact) {

        $scope.addContact = function() {
            var newContact = new Contact({
                firstName: $scope.newFirstName,
                lastName: $scope.newLastName
            });

            newContact.$save(function(response) {
                    //$scope.newFirstName = "";
                    //$scope.newLastName = "";
                console.log(response);
                $location.path('/contacts');

            }
            );
        };

    }]);
