var app = angular.module("myApp", []);
app.controller("firstController", function ($scope) {
    $scope.name = "Akshatha Naidu";
});
app.controller("secondController", function ($scope, $rootScope) {
    $scope.name = "AKSHATHA";
    $rootScope.fullname = "Akshatha Naidu";

});
app.controller("employeedatacntrl", function ($scope) {
    $scope.testdata = [

        {
            name: "Akshatha Naidu",
            class: "10",
            email: "aksh@gmail.com",
            test: "hai",
            cell: 12345,
        },
        {
            name: "sreevidya",
            class: "11",
            email: "vid@gmail.com",
            test: "hai",
            cell: 1245,
        },
        {
            name: "Madhavi",
            class: "10",
            email: "mad@gmail.com",
            test: "hai",
            cell: 112455,
        },
        {
            name: "Malathi",
            class: "10",
            email: "mal@gmail.com",
            test: "hai",
            cell: 12345,
        },
        {
            name: "bindhu",
            class: "10",
            email: "bin@gmail.com",
            test: "hai",
            cell: 123456,
        },
        {
            name: "bharati",
            class: "10",
            email: "bha@gmail.com",
            test: "hai",
            cell: 1234,
        }
    ]
});

app.directive("firstDirective", function () {

    return {
        restrict:"C",
        template: "<h1> This is Element Selector</h1>"
    }
});        