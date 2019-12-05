export default ngModule => {
    // stylesheet
    require('./greeting.scss');
    ngModule.directive('greeting', () => {
            return {
                restrict: 'E',
                scope: {"state": 1},
                template: require('./greeting.html'),
                controllerAs: 'vm',
                /*
                @ngInject
                 */
                controller: function ($location) {
                    let vm = this;
                    vm.greeting = 'Hello webpack'
                    let count = 0;
                    console.log(vm)
                    vm.getClick = () => {
                        count += 1
                        console.log($location.$$port)
                    }
                }
            }
        }
    )
}