import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): this {
    browser.get('/');
    return this;
  }

  public clickCreate(): this {
    element(by.css('button')).click();
    return this;
  }
}
