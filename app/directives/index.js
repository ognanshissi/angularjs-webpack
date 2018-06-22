import GreetingDirectives from './greeting/greeting.directive'

export default ngModule =>  {
    // load all directives in this file
    GreetingDirectives(ngModule)
};