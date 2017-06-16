import { BostonCelticsPage } from './app.po';

describe('boston-celtics App', () => {
  let page: BostonCelticsPage;

  beforeEach(() => {
    page = new BostonCelticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
