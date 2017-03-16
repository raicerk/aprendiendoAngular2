import { Proyectoangular2Page } from './app.po';

describe('proyectoangular2 App', function() {
  let page: Proyectoangular2Page;

  beforeEach(() => {
    page = new Proyectoangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
