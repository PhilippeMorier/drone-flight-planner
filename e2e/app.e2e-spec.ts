import { by, element } from 'protractor';

import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show all created flight plans', () => {
    const newPlansCount = 3;

    page
      .navigateTo()
      .clickCreate(newPlansCount);

    expect(element.all(by.css('mdl-list-item')).count())
      .toEqual(newPlansCount);
  });

  it('should select the clicked flight plan', () => {
    const newPlansCount = 3;

    page
      .navigateTo()
      .clickCreate(newPlansCount)
      .clickListItem(0);

    expect(element.all(by.css('mdl-list-item')).get(0).getText())
      .toContain('Selected');
  });
});
