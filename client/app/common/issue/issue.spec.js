import IssueModule from './issue'
import IssueController from './issue.controller';
import IssueComponent from './issue.component';
import IssueTemplate from './issue.html';

describe('Issue', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IssueModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IssueController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(IssueTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = IssueComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(IssueTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(IssueController);
      });
  });
});
