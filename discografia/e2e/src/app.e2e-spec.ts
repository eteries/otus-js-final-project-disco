import { AppPage } from './app.po';
import { APP_TITLE } from '../../src/app/shared/constants';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(APP_TITLE);
  });
});
