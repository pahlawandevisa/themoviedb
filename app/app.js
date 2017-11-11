angular.module('app', ['toastr'])
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
    });