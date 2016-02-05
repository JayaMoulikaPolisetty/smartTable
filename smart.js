var app = angular.module('appS', []);

app.controller('mainController', ['$scope', '$filter', function (scope, filter) {
    
    scope.rowCollection = [
        {name: 'Moulika', education: 'b.tech', DateOfBirth: '1995-08-09', percentage: '76%'},
        {name: 'Shiva', education: 'b.tech', DateOfBirth: '1993-04-28', percentage: '74%'},
        {name: 'Hanu', education: 'mca', DateOfBirth: '1981-01-14', percentage: '78%'},
        {name: 'Gupta', education: 'ca', DateOfBirth: '1994-11-22', percentage: '70%'},
        {name: 'Rushender', education: 'lawyer', DateOfBirth: '1995-03-12', percentage: '70%'}
    ];
    
    
    scope.exportData = function () {
        alasql('SELECT * INTO CSV("test.csv",{headers:true}) FROM ?', [scope.rowCollection]);
    };
    
    }]);

   
