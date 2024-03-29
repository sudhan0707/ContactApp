angular
    .module('ContactsApp')
    .controller('ListController', ['$scope', 'Contact', '$location', function($scope, Contact, $location){

        $scope.fields = ['FirstName','LastName', 'ID',""];
        $scope.contacts = Contact.query();

        // Function for Add Click Button
        $scope.createContact = function() {
            $location.path('/create');
        };

        //Function for Edit Click Button
        $scope.editContact = function(contactid) {
            console.log(contactid);
            //var id = contactid;
            $location.path('/edit/'+contactid);
        };

        $scope.deleteContact = function(contactid) {
            console.log(contactid);
            //var id = contactid;
            $location.path('/delete/'+contactid);
        };
    }]);


