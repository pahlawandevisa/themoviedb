angular.module('app')
    .filter('cut', function () {
        return function (input) {
            if (input) return input.substr(0, 200) + ' ...';
            else return "";
        }
    })
    .filter('filtraPerTitolo', function () {
        return function (input, title) {
            if (!title) return input;
            return input.filter(function (film) {
                return film.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
            })
        }
    })
    .filter('filtraPerGenere', function () {
        return function (input, genid) {
            if (!genid) return input;
            return input.filter(function (film) {
                return film.genre_ids.indexOf(genid) > -1;
            })
        }
    })