export default class IssuesService {
    constructor($q, APIService){
        'ngInject';
        this.$q = $q;
        this.api = APIService;
    }

    getIssues(page,per_page) {
        let defer = this.$q.defer();
        this.api.get(`https://api.github.com/repos/angular/angular.js/issues?page=${page}&per_page=${per_page}`)
        .then((issues) => {
            defer.resolve(issues);
        })
        .catch(e => defer.reject(e));
        
        return defer.promise;
    }

};