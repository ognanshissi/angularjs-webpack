export default ngModule => {
    // stylesheet
    require('./greeting.scss');
    ngModule.directive('greeting', () => {
            return {
                restrict: 'E',
                scope: {},
                template: require('./greeting.html'),
                controllerAs: 'vm',
                /*
                @ngInject
                 */
                controller: function ($location) {
                    var vm = this;
                    vm.greeting = 'Hello webpack'
                    var count = 0;
                    vm.getClick = () => {
                        count += 1
                        console.log('hello world')
                    }
                }
            }
        }
    )
}