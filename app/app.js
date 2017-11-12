angular.module('app', [
    'ui.router',
    'toastr'
])
    .run(function () {
        console.log("Yahooo Angular is running!")
    })
    .config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            progressBar: true,
            closeButton: true,
            tapToDismiss: true,
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    })
    .controller('mainCtrl', function ($scope) {

        $scope.$on('nav-main', function (event, val) {
            // tramite scope
            // $scope.shared = val;

            //tramite broadcast
            $scope.$broadcast('main-films', val)


        })
    })