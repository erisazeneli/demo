export default class APIService {
    constructor($http, $q, $timeout){
        'ngInject';
        this.$http = $http;
        this.$q = $q;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    }

    get(url) {
        let defer = this.$q.defer();
        this.$http.get(url)
        .then(r => defer.resolve(r.data))
        .catch(e => defer.reject(e))
        return defer.promise;
    }

};