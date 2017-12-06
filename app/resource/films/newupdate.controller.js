angular.module('app').controller('newupdateCtrl', function (
    $scope,
    $state,
    film,
    FilmSrv,
    GenreSrv) {
    // recupera film
    $scope.film = film.data;
    $scope.film.release_date = new Date($scope.film.release_date);
    
    GenreSrv.getAll()
        .then(function (result) {
            $scope.all = true;
            $scope.generi = result.data;
            $scope.generi.unshift({ id: 0, name: 'Tutti i generi' })
            $scope.gen = $scope.generi[0].id;
        })
        .catch(function (err) {
            console.log(err)
        });

    $scope.remove = function (index) { 
        $scope.film.genre.splice(index, 1);
    }
    
    $scope.inserisci = function () { 
        if (!$scope.film.genre.some((gen) => {
            return gen.id == $scope.gen.id
        })) { 
            $scope.film.genre.push($scope.gen);
            $scope.film.genre_ids.push($scope.gen.id);

        }
        
    }

    $scope.salva = function () { 
        FilmSrv.update($scope.film)
            .then(() => { 
                $state.go('films')
            })
            .catch((err) => { 
                console.log(err);
            });
    }

});