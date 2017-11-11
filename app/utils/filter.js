angular.module('app').filter('cut', function () {
    return function (input) {
        if (input) return input.substr(0, 200) + ' ...';
        else return "";
    }
})