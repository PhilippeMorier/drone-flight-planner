import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): this {
    browser.get('/');
    return this;
  }

  public clickCreate(times: number = 1): this {
    for (let i = 0; i < times; i++) {
      element(by.css('button')).click();
    }
    return this;
  }

  public clickListItem(index: number): this {
    element.all(by.css('mdl-list-item'))
      .get(index)
      .click();
    return this;
  }
}
