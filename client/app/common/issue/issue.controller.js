class issueController {

  constructor(IssuesService) {
    "ngInject";
    this.IssuesService = IssuesService;
    this.pagination= [1,2,3,4,5]
    this.$onInit = () => {
      this._getIssues(1,30);
  }
  }

  _getIssues(page,per_page) {
    this.IssuesService.getIssues(page,per_page).then((issues) => {
        this.issues = issues;
        console.log(this.issues);
    })
  }
}

export default issueController;
