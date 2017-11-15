angular.module('app').component('filmDettaglio', {
    templateUrl: 'app/components/film/film.template.html',
    bindings: {
        film: '<'
    },
    controller: function () {

        this.stars = [
            {
                colorata: false
            },
            {
                colorata: false
            },
            {
                colorata: false
            },
            {
                colorata: false
            },
            {
                colorata: false
            },
            {
                colorata: false
            },
        ];

        this.colora = function (index) {
            for (let i = 0; i <= index; i++) {
                this.stars[i].colorata = true;
            }
        }
        this.scolora = function () {
            this.stars.forEach(element => {
                element.colorata = false;
            });
        }
        this.vota = function (index) {
            console.log(index + 1);
            this.mostra = false;
        }
    },
    controllerAs: 'mv'
})