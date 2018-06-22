export default ngModule => {
    ngModule.config(function ($locationProvider, $routeProvider) {
        // location
        $locationProvider.html5Mode(true)

        // route
        $routeProvider
            .when("/", {
                template: "<greeting></greeting>"
            })
            .when("/contact/", {
                template: "<greeting></greeting>",
            })
    })
}