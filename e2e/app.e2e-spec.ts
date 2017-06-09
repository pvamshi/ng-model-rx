import { NgModelRxPage } from './app.po';

describe('ng-model-rx App', () => {
  let page: NgModelRxPage;

  beforeEach(() => {
    page = new NgModelRxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
