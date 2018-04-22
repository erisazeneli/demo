import angular from 'angular';
import IssuesService from './issues.js';
import APIService from './API.js';

let services = angular.module('services', [])

.service({
    APIService,
    IssuesService,
})
  
.name;

export default services;