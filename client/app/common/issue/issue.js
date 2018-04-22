import angular from 'angular';
import uiRouter from 'angular-ui-router';
import issueComponent from './issue.component';

let issueModule = angular.module('issue', [
  uiRouter
])

.component('issue', issueComponent)
  
.name;

export default issueModule;
