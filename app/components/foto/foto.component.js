angular.module('app').component('foto', {
    template: `
    <div class="col-xs-6 col-md-3">
        <a href="" class="thumbnail">
            <img src="https://farm{{$ctrl.foto.farm}}.staticflickr.com/{{$ctrl.foto.server}}/{{$ctrl.foto.id}}_{{$ctrl.foto.secret}}_m.jpg"
                alt="...">
        </a>
    </div>`,
    bindings: {
        foto: '=',
    },
})