import angular from 'angular';
import Navbar from './navbar/navbar';
import issue from './issue/issue';
import User from './user/user';
import services from './services/services';

let commonModule = angular.module('app.common', [
  Navbar,
  issue,
  User,
  services
])
  
.name;

export default commonModule;
