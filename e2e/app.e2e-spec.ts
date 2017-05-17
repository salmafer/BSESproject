import { BSESprojectPage } from './app.po';

describe('bsesproject App', () => {
  let page: BSESprojectPage;

  beforeEach(() => {
    page = new BSESprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
