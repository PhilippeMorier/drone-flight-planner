import { by, element } from 'protractor';

import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show all created plans', () => {
    page
      .navigateTo()
      .clickCreate()
      .clickCreate()
      .clickCreate();

    expect(element.all(by.css('mdl-list-item')).count())
      .toEqual(3);
  });
});
