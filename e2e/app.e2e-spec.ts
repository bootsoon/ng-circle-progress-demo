import { NgCircleProgressDemoPage } from './app.po';

describe('ng-circle-progress-demo App', () => {
  let page: NgCircleProgressDemoPage;

  beforeEach(() => {
    page = new NgCircleProgressDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
