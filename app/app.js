import angular from 'angular'
import uiRouter from 'angular-ui-router'
// import ngAnimate from 'angular-animate'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
  .module('appAngular', [
    uiRouter,
    // ngAnimate,
    common,
    components
  ])
  .component('app', AppComponent)

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['appAngular']))


export default root
